(function(){
'use strict';
// Boardwalk adapter for the proven Grandma & Grandpa Piper runtime.
// Preserves native Boardwalk click handlers, challenges, popups, and MP3s.
// Initialize controls as a classic script; import Piper only when requested.
const piperModuleUrl = new URL('../piper-matched-118/piper-tts-web.js?voice-switch=1', document.currentScript?.src || location.href).href;
const $=id=>document.getElementById(id);
const mode=$('voiceLabMode'),select=$('voiceLabModel'),status=$('voiceLabStatus');
const lang=$('lang');
const prefix={en:'en_',es:'es_',fr:'fr_',de:'de_',it:'it_',pt:'pt_',no:'no_'};
let engine=null,loading=null,catalog=[],audio=null,url=null,request=0;
let lastText='',lastRate=.82;
const voiceKey=()=> 'talkabee-piper-voice-'+lang.value;
function savedVoice(){try{return localStorage.getItem(voiceKey())||''}catch(_){return ''}}
function saveVoice(){try{if(select.value)localStorage.setItem(voiceKey(),select.value)}catch(_){}}

const show=s=>{if(status)status.textContent=s};
function stop(){
 request++;
 if(audio){try{audio.pause();audio.currentTime=0}catch(_){}audio=null}
 if(url){URL.revokeObjectURL(url);url=null}
 try{speechSynthesis.cancel()}catch(_){}
}
function recommend(){
 const p=prefix[lang.value]||'en_',old=select.value,saved=savedVoice();
 const matches=catalog.filter(v=>v.toLowerCase().startsWith(p));
 select.replaceChildren();
 for(const id of matches)select.add(new Option(id,id));
 if(matches.includes(saved))select.value=saved;
 else if(matches.includes(old))select.value=old;
 else if(matches.length)select.value=matches.find(v=>/hfc[_-]female/i.test(v)&&/medium/i.test(v))||matches.find(v=>/hfc[_-]female/i.test(v))||matches.find(v=>v.includes('medium'))||matches[0];
 else select.add(new Option('No enhanced voice for this language',''));
}
async function loadEngine(){
 if(engine)return engine;
 if(loading)return loading;
 loading=(async()=>{
   show('Loading Piper voice catalog…');
   const m=await import(piperModuleUrl);
   const voices=await m.voices();
   const all=Array.isArray(voices)?voices.map(v=>typeof v==='string'?v:(v?.id||v?.key||v?.name||'')).filter(Boolean):Object.keys(voices||{});
   catalog=all.filter(id=>Object.values(prefix).some(p=>id.toLowerCase().startsWith(p)));
   if(!catalog.length)throw Error('No matching Piper voices found');
   engine=m;recommend();show('Piper ready: '+(select.value||'choose a voice')+'. First speech may download the voice model.');
   return engine;
 })();
 try{return await loading}catch(e){loading=null;show('Piper unavailable: '+(e?.message||e));console.error(e);throw e}
}
function updateMode(){
 const enabled=mode.value==='enhanced';
 $('voiceLabNeural').hidden=!enabled; $('voiceLabNeural').style.setProperty('display',enabled?'block':'none','important');
 $('voiceLabNote').textContent=enabled?'Load a voice before speaking.':'Uses voices available in your browser.';
 try{localStorage.setItem('talkabee-lab-voice-mode',mode.value)}catch(_){}
 show(enabled?(engine?'Piper ready: '+(select.value||'choose a voice')+'. First speech may download the voice model.':'Loading Piper voice catalog…'):'Standard voice ready.');
 if(enabled&&!engine)loadEngine().catch(()=>{});
}
try{if(localStorage.getItem('talkabee-lab-voice-mode')==='enhanced')mode.value='enhanced'}catch(_){}
mode.addEventListener('change',()=>{stop();updateMode()});
lang.addEventListener('change',()=>{stop();if(engine){recommend();show('Piper ready: '+(select.value||'choose a voice')+'. First speech may download the voice model.')}else if(mode.value==='enhanced')loadEngine().catch(()=>{})});
select.addEventListener('change',()=>{stop();saveVoice();show('Piper ready: '+select.value+'. First speech may download the voice model.')});
$('voiceLabLoad').addEventListener('click',()=>loadEngine().catch(()=>{}));
updateMode();

async function enhancedSpeak(text,rate,onComplete){
 stop();const ticket=request;
 try{
   const m=await loadEngine();if(ticket!==request||mode.value!=='enhanced')return;
   const voiceId=select.value;
   if(!voiceId)throw Error('No Piper voice available for this language');
   show('Preparing enhanced voice…');
   const wav=await m.predict({text,voiceId},p=>{
     if(ticket===request&&p?.total)show('Downloading voice: '+Math.round(p.loaded/p.total*100)+'%');
   });
   if(ticket!==request||mode.value!=='enhanced'||select.value!==voiceId)return;
   url=URL.createObjectURL(wav);audio=new Audio(url);audio.playbackRate=rate;
   const current=audio;
   current.addEventListener('ended',()=>{
     if(audio!==current)return;
     audio=null;if(url){URL.revokeObjectURL(url);url=null}
     if(ticket===request){show('Voice finished.');onComplete?.()}
   },{once:true});
   await current.play();
   if(ticket===request)show('Enhanced voice playing.');
 }catch(e){
   if(ticket!==request)return;
   console.error('Boardwalk Piper:',e);show('Piper failed: '+(e?.message||e)+'. Standard voice is available.');
   // Preserve audio completion for original Boardwalk sound effects.
   onComplete?.();
 }
}
window.tbBoardwalkEnhancedSpeak=function(text,rate,onComplete){
 if(mode.value!=='enhanced'||!text)return false;
 // Allow the first speech to initialize Piper after the catalog is ready.
 if(!select.value){if(!engine)loadEngine().catch(()=>{});return false;}
 lastText=text;lastRate=rate||.82;
 enhancedSpeak(text,rate||.82,onComplete);
 return true;
};
// The original script-card handlers already call speak(), so no duplicate
// click interception is necessary. Replay and Slow use the same route.

})();
