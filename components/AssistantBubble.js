'use client';
import { useState } from 'react';
export default function AssistantBubble(){ const [open,setOpen]=useState(false); return <>
  {open&&<div className="assistant-panel"><button onClick={()=>setOpen(false)} aria-label="Close">×</button><span className="assistant-kicker">AI assistant</span><h3>Hi, I’m Eroll’s assistant.</h3><p>This replica includes the floating assistant treatment from the reference. Connect this panel to your real chat workflow later.</p><a href="/contact">Start a project →</a></div>}
  <button className="assistant-btn" onClick={()=>setOpen(v=>!v)} aria-label="Chat with assistant"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.7 1.4 5.1 3.6 6.7-.1.9-.5 2.3-1.5 3.6 0 0 2.4-.3 4.5-1.9 1.1.3 2.2.5 3.4.5 5.5 0 10-3.9 10-8.9S17.5 3 12 3z"/></svg></button>
</> }
