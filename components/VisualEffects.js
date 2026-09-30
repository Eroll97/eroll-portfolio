'use client';
import { useEffect, useRef, useState } from 'react';

export default function VisualEffects() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const move = (e) => {
      if (dot.current) dot.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${e.clientX - 18}px,${e.clientY - 18}px)`;
    };
    const scroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
    };
    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('scroll', scroll); };
  }, []);

  return <>
    <div className="ambient ambient-a" />
    <div className="ambient ambient-b" />
    <div className="ambient ambient-c" />
    <div className="noise-overlay" />
    <div className="cursor-dot" ref={dot} />
    <div className="cursor-ring" ref={ring} />
    <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
  </>;
}
