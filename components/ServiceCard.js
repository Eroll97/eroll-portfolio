'use client';
import Link from 'next/link';
const icons={
monitor:<><rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 22h8M12 18v4M6 9h6M6 13h9"/></>,
flow:<><rect x="2" y="3" width="7" height="6" rx="1.5"/><rect x="15" y="3" width="7" height="6" rx="1.5"/><rect x="8.5" y="15" width="7" height="6" rx="1.5"/><path d="M5.5 9v3.5h13V9M12 12.5V15"/></>,
funnel:<path d="M3 3h18l-7 8.5V19l-4 2v-9.5z"/>,
bot:<><rect x="5" y="7" width="14" height="12" rx="3"/><circle cx="10" cy="12.5" r=".8" fill="currentColor"/><circle cx="14" cy="12.5" r=".8" fill="currentColor"/><path d="M9.5 16.2q2.5 1.6 5 0M12 7V4M5 11H2.5M19 11h2.5"/><circle cx="12" cy="3" r="1" fill="currentColor"/></>,
bag:<><path d="M6 7 7.5 21h9L18 7zM9 7a3 3 0 0 1 6 0M9.8 13l1.8 1.8 3-3.3"/></>,
target:<><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><path d="M12 3V1M21 12h2"/></>
};
export default function ServiceCard({service}){ const move=e=>{const r=e.currentTarget.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;e.currentTarget.style.transform=`perspective(900px) rotateX(${(-y*8).toFixed(2)}deg) rotateY(${(x*8).toFixed(2)}deg) scale(1.01)`; e.currentTarget.style.setProperty('--mx',`${(x+.5)*100}%`); e.currentTarget.style.setProperty('--my',`${(y+.5)*100}%`)}; const leave=e=>e.currentTarget.style.transform='perspective(900px) rotateX(0) rotateY(0) scale(1)';
return <div className="tilt-wrap" onMouseMove={move} onMouseLeave={leave}><Link href={`/services#${service.id}`} className="service-card"><span className="service-number">{service.number}</span><span className="service-glow"/><span className="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{icons[service.icon]}</svg></span><h3>{service.title}</h3><p>{service.short}</p><span className="learn-more">Learn more <i>↗</i><b/></span></Link></div> }
