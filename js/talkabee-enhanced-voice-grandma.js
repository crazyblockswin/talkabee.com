
const $=id=>document.getElementById(id), status=$('voiceLabStatus'), mode=$('voiceLabMode'), select=$('voiceLabModel'), field=$('voiceLabText');
const show=message=>{status.textContent=message};
const prefix={en:'en_',es:'es_',fr:'fr_',de:'de_',it:'it_',pt:'pt_',no:'no_'};
const speechLang={en:'en-US',es:'es-ES',fr:'fr-FR',de:'de-DE',it:'it-IT',pt:'pt-BR',no:'nb-NO'};
const lang=$('homeLanguage');
// Place the existing, proven neural engine controls beneath the browser voice selector.
const voicePanel=$('homeVoice');voicePanel?.insertAdjacentElement('afterend',$('voiceLab'));

let engine=null,loading=null,audio=null,audioUrl=null,busy=false,utterance=null,lastLessonText="",lastLessonRate=.86,runId=0;
const sentence=()=>($('homeWordline')?.innerText||$('homeWordline')?.textContent||'').replace(/\s+/g,' ').trim();
function stop(){runId++;busy=false;const play=$('voiceLabPlay'),slow=$('voiceLabSlow');if(play)play.disabled=false;if(slow)slow.disabled=false;if(audio){audio.pause();audio.currentTime=0;audio=null}if(audioUrl){URL.revokeObjectURL(audioUrl);audioUrl=null}if('speechSynthesis' in window)window.speechSynthesis.cancel();utterance=null}
let voiceCatalog=[];
function recommend(){if(!voiceCatalog.length)return;const p=prefix[lang?.value]||'en_';const previous=select.value;const options=voiceCatalog.filter(id=>id.toLowerCase().startsWith(p));select.replaceChildren();for(const id of options){const opt=document.createElement('option');opt.value=id;opt.textContent=id;select.appendChild(opt)}if(options.includes(previous))select.value=previous;else if(options.length)select.value=options.find(id=>id.includes('medium'))||options[0];else{const opt=document.createElement('option');opt.value='';opt.textContent='No enhanced voice available';select.appendChild(opt);show('No Enhanced voice for this language. Choose Standard.')}}
function updateMode(){const enhanced=mode.value==='enhanced';$('voiceLabNeural').hidden=!enhanced;$('voiceLabNote').textContent=enhanced?'Download once per voice. First use may take a moment.':'Uses voices installed in your browser.';try{localStorage.setItem('talkabee-lab-voice-mode',mode.value)}catch(_){};show(enhanced?'Enhanced selected. Click “Load voice” before speaking.':'Standard voice ready.');}
try{if(localStorage.getItem('talkabee-lab-voice-mode')==='enhanced')mode.value='enhanced'}catch(_){}
mode.addEventListener('change',()=>{stop();updateMode()});updateMode();
$('voiceLabCurrent').addEventListener('click',()=>{const s=sentence();if(s)field.value=s;else show('Choose an Activity first, or type a test sentence.')});
$('voiceLabStop').addEventListener('click',()=>{stop();show('Stopped.')});
lang?.addEventListener('change',recommend);
async function loadEngine(){if(engine)return engine;if(loading)return loading;
 loading=(async()=>{show('Loading enhanced engine and voice catalog…');const m=await import('../piper-matched-118/piper-tts-web.js?voice-switch=1');const models=await m.voices();const all=Array.isArray(models)?models.map(v=>typeof v==='string'?v:(v?.id||v?.key||v?.name||'')).filter(Boolean):Object.keys(models||{});const names=all.filter(id=>Object.values(prefix).some(p=>id.toLowerCase().startsWith(p)));if(!names.length)throw Error('No matching voices in catalog.');voiceCatalog=names;engine=m;recommend();show('Enhanced catalog ready. First speech may download a large model.');return engine})();
 try{return await loading}catch(e){loading=null;show('Enhanced engine unavailable: '+(e?.message||e)+'\nChoose Standard to continue.');console.error('Voice Lab engine',e);throw e}
}
$('voiceLabLoad').addEventListener('click',()=>{loadEngine().then(()=>show('Voice list ready. Select a voice and press Speak.')).catch(()=>{})});
select.addEventListener('change',()=>{stop();if(engine)show('Voice selected: '+select.value+'. Press Speak to use it; no refresh needed.');});
function standardSpeak(text,rate){if(!('speechSynthesis' in window)){show('Browser speech is not available.');return}stop();const u=new SpeechSynthesisUtterance(text);u.lang=speechLang[lang?.value]||'en-US';u.rate=rate;const voices=window.speechSynthesis.getVoices();const preferred=$('homeVoice')?.value;const chosen=voices.find(v=>v.voiceURI===preferred||v.name===preferred)||voices.find(v=>v.lang.toLowerCase()===u.lang.toLowerCase())||voices.find(v=>v.lang.toLowerCase().startsWith(u.lang.slice(0,2).toLowerCase()));if(chosen)u.voice=chosen;utterance=u;u.onerror=e=>show('Standard speech error: '+e.error);window.speechSynthesis.speak(u);show('Speaking with browser voice ('+u.lang+'). No model downloaded.')}
async function speak(rate,textOverride){const text=(textOverride===undefined?field.value:textOverride).trim();if(!text){show('Enter a sentence first.');return}
 if(mode.value==='standard'){standardSpeak(text,rate);return}
 stop();const requestId=runId;busy=true;$('voiceLabPlay').disabled=true;$('voiceLabSlow').disabled=true;
 try{const m=await loadEngine();if(requestId!==runId)return;const selectedVoice=select.value;if(!selectedVoice)throw Error('No voice selected for this language.');if(audioUrl){URL.revokeObjectURL(audioUrl);audioUrl=null}show('Preparing voice… First use may require a download.');const start=performance.now();const wav=await m.predict({text,voiceId:selectedVoice},p=>{if(requestId===runId&&p?.total)show('Downloading model: '+Math.round(p.loaded/p.total*100)+'%')});if(requestId!==runId||mode.value!=='enhanced'||select.value!==selectedVoice)return;audioUrl=URL.createObjectURL(wav);audio=new Audio(audioUrl);audio.playbackRate=rate;const currentAudio=audio;currentAudio.addEventListener('ended',()=>{if(audio===currentAudio){audio=null;if(audioUrl){URL.revokeObjectURL(audioUrl);audioUrl=null}if(requestId===runId)show('Voice finished.')}} ,{once:true});await currentAudio.play();if(requestId===runId)show('Enhanced voice playing. Generation: '+((performance.now()-start)/1000).toFixed(1)+' seconds.')}
 catch(e){if(requestId!==runId)return;const msg=String(e?.message||e);show('Enhanced voice failed: '+msg+(msg.includes('cdnjs.cloudflare.com/ajax/libs/onnxruntime-web/1.18.0')?'\nDiagnosis: Piper is still hardcoded to the old ONNX 1.18.0 Cloudflare runtime. Local ONNX 1.19.0 files are not being used by this bundle.':'')+'\nSwitch to Standard for reliable browser speech.');console.error('Voice Lab synthesis',e)}
 finally{if(requestId===runId){busy=false;$('voiceLabPlay').disabled=false;$('voiceLabSlow').disabled=false}}
}
$('voiceLabPlay').addEventListener('click',()=>speak(1));$('voiceLabSlow').addEventListener('click',()=>speak(.78));
// Capture lesson buttons before the original browser-speech handlers when Enhanced is active.
function neuralLesson(text,rate){if(!text)return;lastLessonText=text;lastLessonRate=rate;speak(rate,text)}
for(const [id,rate] of [['homePlay',.86],['homeSlow',.58],['homeReplay',null]]){
 $(id)?.addEventListener('click',ev=>{if(mode.value!=='enhanced')return;ev.preventDefault();ev.stopImmediatePropagation();const t=rate===null?(lastLessonText||sentence()):sentence();neuralLesson(t,rate===null?lastLessonRate:rate)},true);
}
$('homeWordline')?.addEventListener('click',ev=>{if(mode.value!=='enhanced')return;const btn=ev.target.closest('.home-word');if(!btn)return;ev.preventDefault();ev.stopImmediatePropagation();neuralLesson(btn.textContent.trim().replace(/[.,!?;:]+$/,''),.78)},true);
// Hotspots still run their original challenge and scene-sound logic. Standard is unchanged.

