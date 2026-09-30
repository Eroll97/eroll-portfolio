'use client';
import { useEffect, useState } from 'react';
const words=['AI Automation Expert','WordPress Developer','GoHighLevel Expert','Funnel Builder'];
export default function Typewriter(){ const [word,setWord]=useState(0),[text,setText]=useState(''); useEffect(()=>{ const target=words[word]; let direction=1; let i=0; let timer;
  const tick=()=>{ i+=direction; setText(target.slice(0,i)); if(i===target.length){ direction=-1; timer=setTimeout(tick,1300); return;} if(i===0&&direction===-1){ setWord((word+1)%words.length); return;} timer=setTimeout(tick,direction===1?70:28); }; tick(); return()=>clearTimeout(timer); },[word]);
  return <span>{text}<b className="blink">_</b></span> }
