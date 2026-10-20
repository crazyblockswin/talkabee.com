(()=>{'use strict';
const $=id=>document.getElementById(id),sceneKey='talkabee-v2-scene-';
const catalog=[...(window.TAB_ADVENTURE_CATALOG||[])];
const built=window.TAB_SCENES||{};
const names=new Map([...Object.keys(built).map(id=>[id,built[id].title||id]),...catalog.map(x=>[x.id,x.title])]);
for(const [id,title] of names){const o=document.createElement('option');o.value=id;o.textContent=title;$('adventure').append(o)}
const safe=(s)=>String(s||'').trim().replace(/\\/g,'/');
const isImage=p=>/\.(?:jpe?g|png|webp|avif)(?:[?#].*)?$/i.test(p);
const safePath=p=>{p=safe(p).replace(/^['"]|['"]$/g,'');if(/^https?:\/\//i.test(p))return p;if(/^(?:data:|blob:|javascript:|file:|\/\/|\/)/i.test(p))return '';return p.replace(/^\.\//,'')};
let paths=[];let extracted={hotspots:[],overlays:[]};
function showCandidates(items){
 const list=$('candidates');list.replaceChildren();paths=items;
 if(!items.length){list.textContent='No image paths found. Enter the background path manually below.';return}
 items.forEach((item,i)=>{
 const row=document.createElement('label');row.className='candidate';
 const radio=document.createElement('input');radio.type='radio';radio.name='candidate';radio.value=item.path;if(i===0)radio.checked=true;
 const info=document.createElement('div');const strong=document.createElement('strong');strong.textContent=item.path;const sub=document.createElement('p');sub.className='small';sub.textContent=item.reason;info.append(strong,sub);row.append(radio,info);list.append(row);
 });
}
$('oldHtml').addEventListener('change',async e=>{
 const file=e.target.files?.[0];if(!file)return;
 if(!/\.html?$/i.test(file.name)){ $('result').textContent='Please select an HTML file.';return }
 if(file.size>20_000_000){$('result').textContent='File too large for safe inspection (20 MB maximum).';return}
 const raw=await file.text();
 // DOMParser creates an inert document. No old scripts are added to this page.
 const doc=new DOMParser().parseFromString(raw,'text/html');
 const found=new Map();
 function add(value,reason,rank){
  let p=safePath(value);if(!p||!isImage(p))return;
  if(!found.has(p)||found.get(p).rank<rank)found.set(p,{path:p,reason,rank});
 }
 for(const el of doc.querySelectorAll('img[src]'))add(el.getAttribute('src'),'Image element (could be an overlay)',1);
 for(const el of doc.querySelectorAll('[style]')){
  const style=el.getAttribute('style')||'';
  for(const m of style.matchAll(/(?:background(?:-image)?)\s*:[^;]*?url\(\s*(['"]?)(.*?)\1\s*\)/gi))add(m[2],'Inline CSS background',6);
 }
 for(const style of doc.querySelectorAll('style')){
  const css=style.textContent||'';
  for(const m of css.matchAll(/background(?:-image)?\s*:[^;}]*?url\(\s*(['"]?)(.*?)\1\s*\)/gi))add(m[2],'CSS background',7);
 }
 for(const m of raw.matchAll(/(?:["'(`])((?:\.{0,2}\/)?(?:images?\/)?[^"'`()<>\s]{2,180}\.(?:jpg|jpeg|png|webp))(?:[?#][^"'`()<>\s]*)?(?:["'`)])/gi))add(m[1],'Image filename found in HTML or script text',2);
 // Read only declarative legacy markup; never evaluate its JavaScript.
 const pct=(el,key)=>{const style=el.getAttribute('style')||'';const pairs=style.split(';').map(x=>x.trim().split(':'));const pair=pairs.find(x=>x[0]?.trim().toLowerCase()===key);if(!pair)return NaN;const value=(pair.slice(1).join(':')||'').trim();return /^-?[0-9.]+%$/.test(value)?Number(value.slice(0,-1)):NaN};
 const valid=n=>Number.isFinite(n)&&n>=-50&&n<=150;
 const hotspotMap=new Map();
 for(const el of doc.querySelectorAll('.hotspot,.home-hotspot,.yacht-hotspot,[data-word][style]')){
  const x=pct(el,'left'),y=pct(el,'top'),w=pct(el,'width'),h=pct(el,'height');
  if(![x,y,w,h].every(valid)||w<=0||h<=0)continue;
  const key=(el.getAttribute('data-word')||el.id||el.getAttribute('aria-label')||'').trim();
  if(!key)continue;
  const id=key.toLowerCase().replace(/[^a-z0-9_-]+/g,'-').replace(/^-|-$/g,'')||'hotspot';
  if(hotspotMap.has(id))continue;
  const sound=safePath(el.getAttribute('data-sound')||'');
  hotspotMap.set(id,{id,label:el.getAttribute('aria-label')||key,x,y,w,h,sound:/\.(mp3|wav|ogg)(?:[?#].*)?$/i.test(sound)?sound:'',translations:{}});
 }
 let overlays=[];
 const overlayData=doc.querySelector('#tb-overlay-data');
 if(overlayData){try{
  const parsed=JSON.parse(overlayData.textContent||'[]');
  if(Array.isArray(parsed))overlays=parsed.filter(o=>o&&typeof o==='object'&&isImage(o.src)&&valid(Number(o.x))&&valid(Number(o.y))&&valid(Number(o.w))&&Number(o.w)>0).map(o=>({id:String(o.id||'overlay-'+overlays.length),src:safePath(o.src),x:Number(o.x),y:Number(o.y),w:Number(o.w),h:Number(o.h)||12,rotation:Number(o.rotation)||0,z:Number(o.z)||1}));
 }catch(e){$('result').textContent='Overlay data could not be read: '+e.message}}
 extracted={hotspots:[...hotspotMap.values()],overlays};
 $('migrationReport').textContent=`Found ${extracted.hotspots.length} compatible hotspot rectangles and ${extracted.overlays.length} image overlays. Only directly attached data-sound paths are copied. Verify positions against the new background.`;
 $('importContent').disabled=!(extracted.hotspots.length||extracted.overlays.length);
 const arr=[...found.values()].sort((a,b)=>b.rank-a.rank||a.path.localeCompare(b.path));
 showCandidates(arr);
 $('details').textContent=`Inspected ${file.name}. Found ${arr.length} distinct image candidates. The list is ranked, not guaranteed.`;
 $('apply').disabled=false;
 $('result').textContent='';
});
$('importContent').addEventListener('click',()=>{
 const id=$('adventure').value;
 const existing=(()=>{try{return JSON.parse(localStorage.getItem(sceneKey+id))}catch{return null}})();
 const data=existing||structuredClone(built[id]||{title:names.get(id)||id,image:'',hotspots:[],overlays:[],lessons:[],challenges:[]});
 if(!Array.isArray(data.hotspots))data.hotspots=[];
 if(!Array.isArray(data.overlays))data.overlays=[];
 const merge=$('mergeContent').checked;
 const selected=[['hotspots',$('includeHotspots').checked],['overlays',$('includeOverlays').checked]];
 if(selected.filter(x=>x[1]).every(([type])=>extracted[type].length===0)){$('result').textContent='No compatible hotspots or overlays detected. Nothing imported. Please use the Boardwalk migration file or check the source HTML.';return}
 if(!selected.some(x=>x[1])){$('result').textContent='Choose at least one content type.';return}
 // Existing scene remains in storage until a successful import; no surprise JSON prompt.
 const counts=[];
 for(const [type,enabled] of selected){if(!enabled)continue;const incoming=extracted[type];if(merge){
  const ids=new Set(data[type].map(o=>o.id));let added=0;
  for(const item of incoming)if(!ids.has(item.id)){data[type].push(item);ids.add(item.id);added++}
  counts.push(type+': '+added+' added, existing retained');
 }else{data[type]=structuredClone(incoming);counts.push(type+': '+incoming.length+' replaced')}}
 try{localStorage.setItem(sceneKey+id,JSON.stringify(data));$('result').textContent='Imported into '+(names.get(id)||id)+' in this browser: '+counts.join('; ')+'. Open Master Studio to verify, then back up and publish. Old HTML was not changed.'}
 catch(err){$('result').textContent='Import failed: '+err.message}
});
$('manualPath').addEventListener('input',()=>{$('apply').disabled=false});
function download(name,text){const blob=new Blob([text],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000)}
$('apply').addEventListener('click',()=>{
 const id=$('adventure').value;
 const chosen=document.querySelector('input[name=candidate]:checked')?.value||'';
 const path=safePath($('manualPath').value||chosen);
 if(!path||!isImage(path)){$('result').textContent='Choose an image or enter a valid JPG/PNG/WebP path.';return}
 const original=(()=>{try{return JSON.parse(localStorage.getItem(sceneKey+id))}catch{return null}})();
 const entry=names.get(id)||id;
 const data=original||structuredClone(built[id]||{title:entry,image:'',hotspots:[],overlays:[],lessons:[],challenges:[]});
 // No automatic backup download; use Master Studio Backup All when desired.
 data.image=path;
 try{localStorage.setItem(sceneKey+id,JSON.stringify(data));$('result').textContent=`Assigned ${path} to ${entry} in this browser. Open Master Studio and select that Adventure to preview it. The actual image file must exist at the saved website path.`}
 catch(err){$('result').textContent='Could not save scene: '+err.message}
});
})();