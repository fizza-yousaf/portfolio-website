import { Link } from 'react-router-dom'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link className="brand" to="/">
              <span className="brand-mark">F<span>Y</span></span>
              <span className="brand-name">Fizza Yousaf<span>.</span></span>
            </Link>
            <p>Building digital experiences with purpose and personality.</p>
          </div>
          <div className="footer-icons">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} />
            </a>
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={19} />
              </a>
            )}
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={19} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Fizza Yousaf. Built with React.</span>
          <Link to="/contact">Let's create something <ArrowUpRight size={14} /></Link>
        </div>
      </div>
    </footer>
  )
}
