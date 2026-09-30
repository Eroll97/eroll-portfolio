export default function ProjectCard({project}){ return <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-card">
  <div className="project-shot"><img src={project.image} alt={`${project.name} website screenshot`} loading="lazy"/><span className="project-fade"/><span className="project-platform">{project.platform}</span><span className="project-category">{project.category}</span></div>
  <div className="project-main"><div><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-arrow">↗</span></div>
  <div className="project-tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div>
  <div className="project-view"><span>View Project <b>↗</b></span></div>
</a> }
