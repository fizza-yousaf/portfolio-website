
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Heart,
  Lightbulb
} from 'lucide-react'

export default function About() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>
          About Fizza Yousaf | Frontend Developer in Islamabad
        </title>

        <meta
          name="description"
          content="Learn about Fizza Yousaf, a Software Engineering graduate and Frontend Developer based in Islamabad, Pakistan, specializing in React.js, JavaScript, WordPress and Webflow."
        />

        <link
  rel="canonical"
  href="https://portfolio-website-pi-eight-70.vercel.app/about"
/>
      </Helmet>

      <main className="page container">
        <div className="page-intro">
          <span className="section-label">
            GET TO KNOW ME
          </span>

          <h1>
            More than <em>just code.</em>
          </h1>

          <p>
            Get to know Fizza Yousaf, a Frontend Developer
            based in Islamabad, Pakistan.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-portrait">
            <span className="portrait-ring" />

            <img
              className="about-portrait-image"
              src={`${import.meta.env.BASE_URL}fizza-portrait.png`}
              alt="Fizza Yousaf - Frontend Developer based in Islamabad, Pakistan"
            />

            <span className="portrait-note">
              Design minded. Code driven.
            </span>
          </div>

          <div className="about-content">
            <h2>
              Hi, I'm Fizza Yousaf — a Frontend Developer
              based in Islamabad.
            </h2>

            <p>
              I'm a Software Engineering graduate from
              Mirpur University of Science & Technology (MUST),
              Pakistan, where I completed my bachelor's degree
              in 2024. I'm passionate about creating responsive,
              interactive, and user-friendly web experiences.
            </p>

            <p>
              I specialize in frontend development using
              HTML, CSS, JavaScript, and React.js. I also
              have professional experience with WordPress,
              Elementor, WooCommerce, and Webflow, building
              websites that combine clean design with
              practical functionality.
            </p>

            <p>
              My experience ranges from developing client
              websites and e-commerce platforms to building
              interactive JavaScript applications and React
              projects. Some of my personal projects include
              a React Expense Tracker, AI Website Audit Tool,
              TripMate Smart Trip Planner, and an interactive
              Admin Dashboard.
            </p>

            <p>
              I enjoy solving problems, learning new technologies,
              and turning creative ideas into functional digital
              products. I focus on writing clean, maintainable
              code and creating accessible, responsive interfaces.
            </p>

            <p>
              My goal is to continue growing as a professional
              Frontend Developer, strengthen my expertise in
              React and modern JavaScript, and collaborate with
              teams around the world to build meaningful
              web applications.
            </p>

            <div className="about-highlights">
              <div>
                <MapPin size={21} />
                <span>
                  Islamabad, Pakistan
                </span>
              </div>

              <div>
                <GraduationCap size={21} />
                <span>
                  BS Software Engineering · MUST
                </span>
              </div>

              <div>
                <Heart size={21} />
                <span>
                  Passionate about frontend development
                </span>
              </div>

              <div>
                <Lightbulb size={21} />
                <span>
                  Always learning new technologies
                </span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Let's work together
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
