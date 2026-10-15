import { useState } from 'react'
import { projects } from '../data'
import ProjectCard from '../components/ProjectCard'

const filters = ['All', 'React', 'JavaScript', 'WordPress', 'Webflow']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = projects.filter(project => filter === 'All' || project.stack.includes(filter))

  return (
    <main className="page container">
      <div className="page-intro">
        <span className="section-label">MY PORTFOLIO</span>
        <h1>Selected <em>projects.</em></h1>
        <p>Real project screenshots and websites from my frontend, WordPress and Webflow work.</p>
      </div>

      <div className="filter-row" role="group" aria-label="Filter projects">
        {filters.map(item => (
          <button
            key={item}
            className={item === filter ? 'filter active' : 'filter'}
            onClick={() => setFilter(item)}
            aria-pressed={item === filter}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>

      {visible.length === 0 && <p className="empty-state">No projects in this category yet.</p>}
      <p className="projects-note">
        Screenshots are from supplied project images. For projects without a supplied screenshot,
        no substitute image is used. Select the external-link icon to view the actual website.
      </p>
    </main>
  )
}
