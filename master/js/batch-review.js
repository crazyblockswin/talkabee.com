(()=>{'use strict';
const $=id=>document.getElementById(id), prefix='talkabee-v2-scene-', catalog=window.TAB_ADVENTURE_CATALOG||[];
const norm=s=>String(s||'').toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const candidates=[];let approvedCount=0;
const safeAudio=s=>/^(?:sounds?\/)?[^<>\"']+\.(?:mp3|ogg|wav)(?:\?.*)?$/i.test(s);
const safeImage=s=>/^images\/[^<>\"']+\.(?:png|jpe?g|webp|gif)$/i.test(s);
const baseScene=id=>{try{return JSON.parse(localStorage.getItem(prefix+id)||'null')||structuredClone((window.TAB_SCENES||{})[id]||{title:catalog.find(x=>x.id===id)?.title||id,image:'',hotspots:[],overlays:[],lessons:[],challenges:[]})}catch{return {title:id,image:'',hotspots:[],overlays:[],lessons:[],challenges:[]}}};
const close=(a,b)=>Math.abs(Number(a)-Number(b))<=2;
function duplicate(h,others){return others.some(o=>norm(o.id)===norm(h.id)|| (norm(o.label)===norm(h.label)&&close(o.x,h.x)&&close(o.y,h.y))||(close(o.x,h.x)&&close(o.y,h.y)&&close(o.w,h.w)&&close(o.h,h.h)))}
// Explicit legacy filename aliases retain the established Master Studio storage IDs.
const legacyFilenameAliases={"steam-train":"train-engineer","seattle-fishing":"seattle-fishing-charter","cave":"cave-exploration","rowing-regatta":"college-rowing","family-picnic":"large-picnic","spacewalk":"nasa-spacewalk","saturn-spacecraft":"spaceship-window-saturn","softball-game":"softball","football-game":"football","basic-training":"military-drill-sergeant","hot-air-balloon-festival":"hot-air-balloon"};
function locate(name){
 const n=norm(name.replace(/\.html?$/i,'').replace(/\(\d{8}-\d+\)/g,'').replace(/-studio-music/i,''));
 const stem=n.replace(/^talk-a-bee-/,'').replace(/-adventure$/,'').replace(/-local-save-guard$/,'');
 const aliased=legacyFilenameAliases[stem];
 if(aliased){const found=catalog.find(c=>c.id===aliased);if(found)return {id:found.id,title:found.title};}
 // Match complete normalized catalog IDs/titles, not incidental words inside filenames.
 const matches=catalog.map(c=>({id:c.id,title:c.title,keys:[norm(c.id),norm(c.title)]})).filter(c=>c.keys.some(k=>stem===k||n===k));
 if(matches.length===1)return {id:matches[0].id,title:matches[0].title};
 // Preserve matching for known prefixed/suffixed filenames, but reject ties.
 const scores=catalog.map(c=>{const keys=[norm(c.id),norm(c.title)];const score=Math.max(...keys.map(k=>(n.includes(k)&&k.length>=5)?k.length+20:0));return {id:c.id,title:c.title,score}}).filter(x=>x.score).sort((a,b)=>b.score-a.score);
 return scores.length&&(scores.length===1||scores[0].score>scores[1].score)?scores[0]:null;
}
function pct(el,k){const s=el.getAttribute('style')||'',v=s.match(new RegExp('(?:^|;)\\s*'+k+'\\s*:\\s*(-?[0-9.]+)%','i'));return v?Number(v[1]):NaN}
function valid(h){return [h.x,h.y,h.w,h.h].every(Number.isFinite)&&h.x>=-5&&h.y>=-5&&h.w>0&&h.h>0&&h.x+h.w<=110&&h.y+h.h<=110}
function path(s){s=String(s||'').trim().replace(/\\/g,'/');return /^(?:javascript:|data:|blob:|https?:|file:|\/)/i.test(s)?'':s}
function scan(file,raw){const doc=new DOMParser().parseFromString(raw,'text/html');const matched=locate(file.name), sceneId=matched?.id||'', existing=sceneId?baseScene(sceneId).hotspots||[]:[];
// Read explicitly serialized overlay data, not the PNG bytes.
const overlayScript=doc.getElementById('tb-overlay-data');
if(sceneId&&overlayScript){try{const entries=JSON.parse(overlayScript.textContent||'[]');for(const o of entries){if(!safeImage(o.src)||![o.x,o.y,o.w].every(v=>Number.isFinite(Number(v)))||Number(o.w)<=0)continue;const saved=baseScene(sceneId).overlays||[];const dup=saved.some(e=>e.src===o.src&&close(e.x,o.x)&&close(e.y,o.y));candidates.push({key:'overlay-'+file.name+'-'+o.id,file:file.name,sceneId,sceneTitle:matched.title,type:'overlay',overlay:{id:o.id||'overlay-'+norm(o.src),label:o.src.split('/').pop(),src:o.src,x:Number(o.x),y:Number(o.y),w:Number(o.w),rotation:Number(o.rotation)||0,z:Number(o.z)||4},dup,checked:false,warning:dup?'Existing overlay at this position':'Saved overlay position; image file must exist'});}}catch(e){console.warn('Overlay data unreadable',file.name,e)}}
// Recognize literal legacy sound maps such as campgroundSounds={bee:'bee.mp3'}.
const soundMap={};const mapRe=/(?:const|let|var)\s+([\w$]*[Ss]ounds?)\s*=\s*\{([^{}]{1,12000})\}/g;let m;
while((m=mapRe.exec(raw))){const pairs=/(?:[\"']([\w-]+)[\"']|([\w-]+))\s*:\s*[\"']([^\"']+\.(?:mp3|wav|ogg))[\"']/gi;let v;while((v=pairs.exec(m[2]))){const name=v[1]||v[2],src=v[3];soundMap[norm(name)]=src.includes('/')?src:'sounds/'+src}}
// Match existing scene hotspots by exact name first, then original hotspot geometry.
// Keep sound updates separate from duplicate hotspot creation.
const savedHotspots=sceneId?(baseScene(sceneId).hotspots||[]):[];
const originalNodes=[...doc.querySelectorAll('.hotspot,.home-hotspot,.yacht-hotspot,[data-word][style]')];
const originalByKey=new Map();
for(const el of originalNodes){const key=norm(el.getAttribute('data-word')||el.getAttribute('aria-label')||el.id);if(key&&!originalByKey.has(key))originalByKey.set(key,el)}
const soundEntries=new Map(Object.entries(soundMap));
for(const el of originalNodes){const key=norm(el.getAttribute('data-word')||el.getAttribute('aria-label')||el.id);const direct=path(el.getAttribute('data-sound'));if(key&&safeAudio(direct)&&!soundEntries.has(key))soundEntries.set(key,direct)}
if(sceneId)for(const [name,src] of soundEntries){if(!safeAudio(src))continue;
 const original=originalByKey.get(name);
 let matches=savedHotspots.filter(h=>norm(h.label)===name||norm(h.id)===name||norm(h.id).endsWith('-'+name));
 if(matches.length!==1&&original){const x=pct(original,'left'),y=pct(original,'top'),w=pct(original,'width'),height=pct(original,'height');if([x,y,w,height].every(Number.isFinite)){const spatial=savedHotspots.filter(h=>close(h.x,x)&&close(h.y,y)&&close(h.w,w)&&close(h.h,height));if(spatial.length===1)matches=spatial;}}
 const target=matches.length===1?matches[0]:null;
 candidates.push({key:'sound-'+file.name+'-'+name,file:file.name,sceneId,sceneTitle:matched.title,type:'sound',targetId:target?.id||'',sound:src,label:target?.label||name,dup:!target||target.sound===src,checked:false,warning:!target?(matches.length>1?'Ambiguous hotspot match':'No matching existing hotspot'):target.sound===src?'Sound already assigned':target.sound?'Replace '+target.sound+' → '+src:'Assign '+src+' to existing hotspot'});
}
const nodes=[...doc.querySelectorAll('.hotspot,.home-hotspot,.yacht-hotspot,[data-word][style]')],within=[];
for(const el of nodes){const label=(el.getAttribute('data-word')||el.getAttribute('aria-label')||el.id||'').trim();if(!label)continue;
const h={id:norm(label)||'object',label,x:pct(el,'left'),y:pct(el,'top'),w:pct(el,'width'),h:pct(el,'height'),sound:'',translations:{}};
if(!valid(h))continue;
const direct=path(el.getAttribute('data-sound'));if(/\.(mp3|ogg|wav)(?:\?.*)?$/i.test(direct))h.sound=direct;
const mapped=soundMap[norm(label)]||soundMap[norm(el.getAttribute('data-word'))];if(!h.sound&&mapped&&safeAudio(mapped))h.sound=mapped;
const inline=el.getAttribute('onclick')||'';const linked=!!(inline||el.hasAttribute('data-word')||el.hasAttribute('data-sound'));
const dup=duplicate(h,existing)||duplicate(h,within);within.push(h);
const id=sceneId+'-'+file.name+'-'+within.length;
candidates.push({key:id,file:file.name,sceneId,sceneTitle:matched?.title||'Unmatched',type:'hotspot',h,dup,linked,checked:false,warning:!sceneId?'Adventure name not matched':dup?'Duplicate detected':!linked?'No declarative connection found':!h.sound?'No sound mapping detected':mapped?'Legacy JavaScript sound mapping found (verify file)':'Direct sound path found (verify file)'});
}
return {matched,found:nodes.length,eligible:within.length};}
// Bulk approval controls are created alongside the existing review controls.
// Only matched, nonduplicate candidates can be selected.
function bulkSelection(checked){
 for(const c of candidates)c.checked=Boolean(checked&&!c.dup&&c.sceneId);
 render();
}
function installBulkControls(){
 const root=$('reviewRows');if(!root||document.getElementById('tbReviewSelectAll'))return;
 const bar=document.createElement('div');bar.style.cssText='display:flex;flex-wrap:wrap;gap:8px;margin:10px 0';
 const all=document.createElement('button');all.id='tbReviewSelectAll';all.type='button';all.textContent='✓ Select All Eligible';all.onclick=()=>bulkSelection(true);
 const none=document.createElement('button');none.id='tbReviewClearAll';none.type='button';none.textContent='Clear Selection';none.onclick=()=>bulkSelection(false);
 bar.append(all,none);root.parentNode.insertBefore(bar,root);
}
function render(){installBulkControls();const root=$('reviewRows');root.replaceChildren();const totals={duplicates:0,unmatched:0};
for(const c of candidates){if(c.dup)totals.duplicates++;if(!c.sceneId)totals.unmatched++;
const row=document.createElement('div');row.style.cssText='display:grid;grid-template-columns:26px minmax(180px,1fr) minmax(130px,1fr);gap:8px;padding:9px;border-bottom:1px solid #777;align-items:center';
const check=document.createElement('input');check.type='checkbox';check.checked=c.checked;check.disabled=c.dup||!c.sceneId;check.setAttribute('aria-label','Approve '+(c.type==='overlay'?c.overlay.label:c.type==='sound'?c.label:c.h.label));check.onchange=()=>{c.checked=check.checked;updateSummary()};
const info=document.createElement('div');const strong=document.createElement('strong');strong.textContent=(c.type==='overlay'?'🖼 Overlay: ':c.type==='sound'?'🔊 Sound: ':'Hotspot: ')+(c.type==='overlay'?c.overlay.label:c.type==='sound'?c.label:c.h.label);const sub=document.createElement('div');sub.style.fontSize='12px';sub.textContent=c.file+' → '+c.sceneTitle;info.append(strong,sub);
const warn=document.createElement('div');warn.style.fontSize='12px';warn.textContent=c.warning+(c.h?.sound?' | '+c.h.sound:'');row.append(check,info,warn);root.append(row);
}
$('reviewSummary').textContent=`${candidates.length} candidates across ${new Set(candidates.map(c=>c.file)).size} files; ${totals.duplicates} duplicates blocked; ${totals.unmatched} unmatched candidates blocked. Use Select All Eligible to approve matched, nonduplicate items, or choose individual items.`;updateSummary()}
function updateSummary(){$('reviewApprove').disabled=!candidates.some(c=>c.checked&&!c.dup&&c.sceneId);$('reviewSelected').textContent=candidates.filter(c=>c.checked&&!c.dup&&c.sceneId).length+' approved for import';}
$('batchFiles').addEventListener('change',async e=>{candidates.length=0;let reports=[];const files=[...e.target.files].filter(f=>/\.html?$/i.test(f.name));for(const f of files){try{const raw=await f.text(),r=scan(f,raw);reports.push(f.name+': '+r.eligible+' position-valid of '+r.found+' markup matches'+(r.matched?' → '+r.matched.title:' (unmatched)'))}catch(err){reports.push(f.name+': ERROR '+err.message)}}render();$('reviewLog').textContent=reports.join('\n');});
$('reviewApprove').onclick=()=>{const selected=candidates.filter(c=>c.checked&&!c.dup&&c.sceneId);if(!selected.length)return;
if(!confirm('Add '+selected.length+' specifically approved item(s) (hotspots / overlays / sound assignments) to Master Studio? Existing backgrounds, lessons, challenges and hotspots will remain unchanged.'))return;
const changes=new Map();for(const c of selected){const scene=changes.get(c.sceneId)||baseScene(c.sceneId);scene.hotspots??=[];scene.overlays??=[];if(c.type==='sound'){const target=scene.hotspots.find(h=>h.id===c.targetId);if(target&&target.sound!==c.sound){target.sound=c.sound;changes.set(c.sceneId,scene)}}else if(c.type==='overlay'){if(!scene.overlays.some(o=>o.src===c.overlay.src&&close(o.x,c.overlay.x)&&close(o.y,c.overlay.y))){let id=c.overlay.id,n=2;while(scene.overlays.some(o=>o.id===id))id=c.overlay.id+'-'+n++;scene.overlays.push({...c.overlay,id});changes.set(c.sceneId,scene)}}else if(!duplicate(c.h,scene.hotspots)){let id=c.h.id,n=2;while(scene.hotspots.some(h=>h.id===id))id=c.h.id+'-'+n++;scene.hotspots.push({...c.h,id});changes.set(c.sceneId,scene)}}
try{for(const [id,scene] of changes)localStorage.setItem(prefix+id,JSON.stringify(scene));approvedCount+=selected.length;for(const c of selected)c.checked=false;render();document.dispatchEvent(new CustomEvent('talkabee:batch-imported',{detail:{sceneIds:[...changes.keys()]}}));$('reviewLog').textContent='Saved '+selected.length+' approved selections across '+changes.size+' Adventures in this browser. Current Adventure refreshed automatically if it was included. You can also click Refresh Adventure. Then Backup All Adventures and Publish All. NOTE: Approved sound-only assignments were applied to existing hotspots where names matched uniquely. Literal legacy sound maps are detected where possible. Audio files are not copied; verify playback before publishing. Lessons/challenges are not converted.';}catch(err){$('reviewLog').textContent='Save failed: '+err.message;}};
})();
