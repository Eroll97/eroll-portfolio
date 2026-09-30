'use client';
import { useEffect, useRef } from 'react';

export default function HeroCanvas(){
  const ref=useRef(null);
  useEffect(()=>{
    const c=ref.current, ctx=c.getContext('2d'); let raf; let t=0;
    const resize=()=>{ const dpr=Math.min(devicePixelRatio||1,2); const s=c.clientWidth; c.width=s*dpr; c.height=s*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); };
    const draw=()=>{ const w=c.clientWidth,h=c.clientHeight,cx=w/2,cy=h/2,R=w*.31; ctx.clearRect(0,0,w,h); t+=.006;
      ctx.save(); ctx.translate(cx,cy); ctx.rotate(t*.25); ctx.strokeStyle='rgba(255,255,255,.22)'; ctx.lineWidth=.8;
      for(let lat=-5;lat<=5;lat++){ const yy=(lat/5)*R*.8; const rx=Math.sqrt(Math.max(0,R*R-yy*yy)); ctx.beginPath(); ctx.ellipse(0,yy,rx,rx*.26,0,0,Math.PI*2); ctx.stroke(); }
      for(let lon=0;lon<14;lon++){ ctx.save(); ctx.rotate((Math.PI*2/14)*lon+t); ctx.beginPath(); ctx.ellipse(0,0,R*.22,R,0,0,Math.PI*2); ctx.stroke(); ctx.restore(); }
      ctx.strokeStyle='rgba(255,255,255,.08)'; ctx.beginPath(); ctx.arc(0,0,R*1.2,0,Math.PI*2); ctx.stroke(); ctx.restore(); raf=requestAnimationFrame(draw); };
    resize(); addEventListener('resize',resize); draw(); return()=>{cancelAnimationFrame(raf);removeEventListener('resize',resize)};
  },[]);
  return <canvas className="hero-canvas" ref={ref}/>;
}
