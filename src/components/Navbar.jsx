import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Download } from 'lucide-react'

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/skills', 'Skills'],
  ['/experience', 'Experience'],
  ['/projects', 'Projects'],
  ['/services', 'Services'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">F<span>Y</span></span>
          <span className="brand-name">Fizza Yousaf<span>.</span></span>
        </Link>

        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <a
          href={`${import.meta.env.BASE_URL}Fizza-Yousaf-CV.pdf`}
          download="Fizza-Yousaf-CV.pdf"
          className="nav-cta"
        >
          Download CV <Download size={16} />
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
