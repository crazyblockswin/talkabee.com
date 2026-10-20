(function(){
'use strict';
if(window.__tbMasterPiperInstalled)return;
window.__tbMasterPiperInstalled=true;
const learn=document.getElementById('learn'), mode=document.getElementById('voiceMode');
if(!learn||!mode)return;
const script=document.currentScript;
const url=new URL('../piper-matched-118/piper-tts-web.js',script.src).href;
const voiceKey='talkabee-piper-voice-';
const prefix={en:['en_'],es:['es_'],fr:['fr_'],de:['de_'],it:['it_'],pt:['pt_'],no:['no_','nb_']};
let engine=null,loading=null,voices=[],currentAudio=null,currentUrl=null,token=0;
const wrap=document.createElement('div');wrap.id='tbMasterPiperControls';
wrap.style.cssText='margin:8px 0 12px;padding:9px;border:1px solid #a8b2bd;border-radius:8px;font:13px Arial,sans-serif';
const label=document.createElement('label');label.textContent='Piper voice';
const select=document.createElement('select');select.id='tbMasterPiperVoice';select.style.cssText='display:block;width:100%;margin:5px 0';
const info=document.createElement('div');info.id='tbMasterPiperStatus';info.setAttribute('role','status');info.textContent='Piper waiting';
const loadBtn=document.createElement('button');loadBtn.type='button';loadBtn.textContent='Load Piper voice';
wrap.append(label,select,loadBtn,info);
mode.insertAdjacentElement('afterend',wrap);
function status(s){info.textContent=s}
function stop(){token++;if(currentAudio){currentAudio.pause();currentAudio=null}if(currentUrl){URL.revokeObjectURL(currentUrl);currentUrl=null}}
window.tbMasterPiperStop=stop;
function saved(){try{return localStorage.getItem(voiceKey+learn.value)||''}catch{return ''}}
function choose(){const candidates=voices.filter(v=>(prefix[learn.value]||['en_']).some(p=>v.toLowerCase().startsWith(p)));select.replaceChildren();for(const v of candidates)select.add(new Option(v,v));const prior=saved();if(candidates.includes(prior))select.value=prior;else if(candidates.length)select.value=candidates.find(v=>v.includes('medium'))||candidates[0];else select.add(new Option('No voice for this language',''));if(select.value)try{localStorage.setItem(voiceKey+learn.value,select.value)}catch{};status(candidates.length?'Piper ready: '+select.value:'No Piper voice available for '+learn.value)}
async function load(){if(engine)return engine;if(loading)return loading;loading=(async()=>{status('Loading Piper voice catalog…');const m=await import(url);const raw=await m.voices();voices=(Array.isArray(raw)?raw.map(v=>typeof v==='string'?v:v?.id||v?.key||v?.name||''):Object.keys(raw||{})).filter(Boolean);engine=m;choose();return m})();try{return await loading}catch(e){loading=null;status('Piper unavailable: '+(e?.message||e));throw e}}
function update(){wrap.hidden=mode.value!=='enhanced';stop();if(!wrap.hidden){const requested=learn.value;load().then(()=>{if(learn.value===requested)choose()}).catch(()=>{});}}
mode.addEventListener('change',update);
function languageChanged(){stop();if(engine)choose();else if(mode.value==='enhanced'){const requested=learn.value;load().then(()=>{if(learn.value===requested)choose()}).catch(()=>{});}else status('Piper waiting for '+learn.value);}
learn.addEventListener('change',languageChanged);
window.addEventListener('tb-master-language-change',languageChanged);
select.addEventListener('change',()=>{stop();try{localStorage.setItem(voiceKey+learn.value,select.value)}catch{};status('Selected '+select.value)});
loadBtn.addEventListener('click',()=>load().catch(()=>{}));
window.tbAdventurePiperSpeak=function(text,rate,onComplete){
 if(mode.value!=='enhanced'||!text)return false;
 stop();const ticket=token;
 (async()=>{try{const m=await load();if(ticket!==token||mode.value!=='enhanced')return;const languageAtStart=learn.value;choose();const voiceId=select.value;if(!voiceId)throw Error('No Piper voice selected');status('Preparing '+voiceId+'…');const wav=await m.predict({text:String(text),voiceId},p=>{if(ticket===token&&p?.total)status('Downloading voice: '+Math.round(p.loaded/p.total*100)+'%')});if(ticket!==token||mode.value!=='enhanced'||select.value!==voiceId||learn.value!==languageAtStart)return;currentUrl=URL.createObjectURL(wav);currentAudio=new Audio(currentUrl);currentAudio.playbackRate=typeof rate==='number'&&rate>0?rate:1;const a=currentAudio;a.addEventListener('ended',()=>{if(ticket!==token)return;currentAudio=null;if(currentUrl){URL.revokeObjectURL(currentUrl);currentUrl=null}status('Piper ready');onComplete?.()},{once:true});await a.play();if(ticket===token)status('Enhanced voice playing')}catch(e){if(ticket===token){status('Piper failed: '+(e?.message||e));console.error(e);onComplete?.()}}})();return true;
};
update();
})();
