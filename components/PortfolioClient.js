'use client';
import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import { categories, platforms } from '../lib/data';

export default function PortfolioClient({projects}){
 const [category,setCategory]=useState('All categories'); const [platform,setPlatform]=useState('All');
 const counts=useMemo(()=>Object.fromEntries(categories.map(c=>[c,projects.filter(p=>p.category===c).length])),[projects]);
 const filtered=projects.filter(p=>(category==='All categories'||p.category===category)&&(platform==='All'||p.platform===platform));
 const catButtons=['All categories',...categories]; const platButtons=['All',...platforms];
 return <div className="portfolio-layout">
   <aside className="portfolio-sidebar"><div className="filter-box"><p>Category</p><nav>{catButtons.map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?'active':''}><span className="globe">◎</span><span>{c}</span><b>{c==='All categories'?projects.length:counts[c]}</b></button>)}</nav></div><div className="filter-box platform-box"><p>Platform</p><div>{platButtons.map(p=><button key={p} onClick={()=>setPlatform(p)} className={platform===p?'active':''}>{p}</button>)}</div></div></aside>
   <div className="mobile-filters"><div><span>Platform</span>{platButtons.map(p=><button key={p} className={platform===p?'active':''} onClick={()=>setPlatform(p)}>{p}</button>)}</div><div><span>Category</span>{catButtons.map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c==='All categories'?'All':c} ({c==='All categories'?projects.length:counts[c]})</button>)}</div></div>
   <div className="portfolio-results"><p className="showing">Showing <strong>{filtered.length}</strong> projects</p><div className="portfolio-grid">{filtered.map(p=><ProjectCard project={p} key={p.name}/>)}</div></div>
 </div>
}
