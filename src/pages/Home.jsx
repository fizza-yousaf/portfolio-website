
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Globe2,
  Sparkles,
} from 'lucide-react'

import { profile, projects } from '../data'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      {/* Homepage SEO Metadata */}
      <Helmet>
        <title>
          Fizza Yousaf | Frontend Developer & React Developer
        </title>

        <meta
          name="description"
          content="Fizza Yousaf is a Frontend Developer based in Islamabad, Pakistan, specializing in React.js, JavaScript, WordPress and Webflow. Explore her portfolio, projects and experience."
        />

        <link
          rel="canonical"
          href="https://portfolio-website-pi-eight-70.vercel.app/"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <p className="hero-kicker">
            Hello, I'm Fizza Yousaf <span>✳</span>
          </p>

          <h1>
            Crafting web
            <br />
            experiences that <em>feel different.</em>
          </h1>

          <p className="hero-description">
            {profile.intro}
          </p>

          <div className="hero-buttons">
            <Link
              to="/projects"
              className="btn btn-primary"
            >
              Explore my work
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline"
            >
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hero-facts">
            <div>
              <strong>Frontend</strong>
              <span>Development</span>
            </div>

            <div>
              <strong>React + JS</strong>
              <span>Modern interfaces</span>
            </div>

            <div>
              <strong>CMS</strong>
              <span>WordPress & Webflow</span>
            </div>
          </div>
        </div>

        {/* Hero Portrait */}
        <div
          className="hero-visual"
          aria-label="Portrait of Fizza Yousaf with technology badges"
        >
          <div className="visual-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="portrait-glow" />

          <img
            className="hero-portrait"
            src={`${import.meta.env.BASE_URL}fizza-portrait.png`}
            alt="Portrait of Fizza Yousaf"
          />

          <div className="floating-chip chip-one">
            <Code2 size={18} />
            clean code
          </div>

          <div className="floating-chip chip-two">
            <Sparkles size={18} />
            creative UI
          </div>

          <div className="floating-chip chip-three">
            <Globe2 size={18} />
            web experiences
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">
                01 / SELECTED WORK
              </span>

              <h2>
                Things I've <em>built.</em>
              </h2>
            </div>

            <Link
              className="text-link"
              to="/projects"
            >
              All projects
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="projects-grid">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section container home-about">
        <div>
          <span className="section-label">
            02 / A LITTLE ABOUT ME
          </span>

          <h2>
            Developer by craft.
            <br />
            <em>Problem-solver</em> by nature.
          </h2>
        </div>

        <div>
          <p>
            I combine thoughtful design with practical frontend
            development. My background spans Webflow, WordPress,
            JavaScript, and React — and I love making ideas feel
            simple, useful, and polished.
          </p>

          <Link
            className="text-link"
            to="/about"
          >
            More about me
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-strip">
        <div className="container">
          <span className="section-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's make something <em>great.</em>
          </h2>

          <Link
            to="/contact"
            className="btn btn-light"
          >
            Let's connect
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
