import PortfolioClient from '../../components/PortfolioClient';
import { projects } from '../../lib/data';

export const metadata = { title: 'Portfolio — Eroll Oliver' };
export default function Portfolio(){ return <div className="page-wrap shell"><div className="page-heading"><p className="eyebrow"><span/> Portfolio</p><h1>Websites I've built & launched</h1><p>Every project below is a real, live website from the reference data. Hover any card to scroll through the full page — click to visit the live site.</p></div><PortfolioClient projects={projects}/></div> }
