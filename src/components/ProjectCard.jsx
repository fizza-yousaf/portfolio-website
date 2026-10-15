import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  const imageUrl = project.image
    ? `${import.meta.env.BASE_URL}${project.image.replace(/^\/+/, '')}`
    : null

  return (
    <article className="project-card">
      <div className={`project-art ${imageUrl ? 'has-screenshot' : 'no-screenshot'}`}>
        {imageUrl ? (
          <img
            className="project-screenshot"
            src={imageUrl}
            alt={`${project.title} screenshot`}
            loading="lazy"
          />
        ) : (
          <div className="missing-screenshot">Screenshot not provided</div>
        )}
        <span className="art-index">{project.id} / SELECTED WORK</span>
      </div>

      <div className="project-info">
        <div className="project-meta">{project.category}</div>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <div className="project-actions">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title} live`}>
                <ArrowUpRight size={19} />
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer" aria-label={`View ${project.title} code`}>
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
        <p>{project.description}</p>
        <div className="tags">
          {project.stack.map(tag => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  )
}
