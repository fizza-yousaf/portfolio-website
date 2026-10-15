import { Link } from 'react-router-dom'
import { Code2, ShoppingBag, LayoutTemplate, Smartphone, Gauge, Wrench, ArrowUpRight, MessageSquare } from 'lucide-react'

const services = [
  { icon: Code2, title: 'Frontend Development', description: 'Responsive, accessible website interfaces built with HTML, CSS, JavaScript and React.', tags: ['React', 'JavaScript', 'HTML & CSS'] },
  { icon: LayoutTemplate, title: 'WordPress Websites', description: 'Professional WordPress websites, landing pages, and content-driven layouts using Elementor and custom styling.', tags: ['WordPress', 'Elementor', 'ACF'] },
  { icon: ShoppingBag, title: 'WooCommerce Stores', description: 'Product pages, storefront layouts, shop configuration and customer-friendly shopping experiences.', tags: ['WooCommerce', 'WordPress', 'Responsive UI'] },
  { icon: Smartphone, title: 'Webflow Development', description: 'Responsive Webflow pages, CMS collections and polished website interactions.', tags: ['Webflow', 'CMS', 'Interactions'] },
  { icon: Gauge, title: 'Website Performance & UI Improvements', description: 'Frontend improvements for responsiveness, usability, accessibility and page performance.', tags: ['PageSpeed', 'UI Refinement', 'Accessibility'] },
  { icon: Wrench, title: 'Website Updates & Maintenance', description: 'Content updates, layout fixes, plugin setup and ongoing improvements for existing websites.', tags: ['Site Updates', 'Bug Fixes', 'Support'] },
]

export default function Services() {
  return <main className="page container services-page">
    <div className="page-intro"><span className="section-label">WHAT I CAN HELP WITH</span><h1>Services that bring <em>ideas to life.</em></h1><p>I build and improve modern, responsive websites with a focus on clean interfaces, practical functionality, and a smooth user experience.</p></div>
    <div className="services-grid">{services.map(({ icon: Icon, title, description, tags }, index) => <article className="service-card" key={title}>
      <div className="service-card-top"><span className="service-icon"><Icon size={25} strokeWidth={1.8}/></span><span className="service-index">0{index + 1}</span></div>
      <h2>{title}</h2><p>{description}</p><div className="service-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <Link to="/contact" className="service-link">Discuss a project <ArrowUpRight size={16}/></Link>
    </article>)}</div>
    <section className="services-cta"><span className="section-label">LET'S WORK TOGETHER</span><h2>Have a website in mind?</h2><p>Tell me what you are building, and we can discuss the scope, timeline, and the best approach.</p><Link to="/contact" className="btn btn-primary">Get in touch <MessageSquare size={18}/></Link></section>
  </main>
}
