import { useEffect } from 'react'
import { FiAward, FiShield, FiHeart, FiClock, FiCheckCircle } from 'react-icons/fi'
import { stats, teamMembers } from '../data'
import { fadeUp, fadeLeft, fadeRight, scaleFade, countUp } from '../animations'
import './AboutPage.css'

export default function AboutPage() {
  useEffect(() => {
    // Page hero
    fadeUp('.page-hero__inner > *', { start: 'top 110%', stagger: 0.15 })
    // Story
    fadeLeft('.about-story__content', { delay: 0.1 })
    fadeRight('.about-story__values', { delay: 0.2 })
    fadeUp('.value-card', { stagger: 0.12 })
    // Stats with countUp
    scaleFade('.stats-grid--dark .stat-item', { stagger: 0.1 })
    document.querySelectorAll('.about-stats .stat-value').forEach(el => {
      const text = el.textContent
      const num = parseFloat(text.replace(/[^0-9.]/g, ''))
      const suffix = text.replace(/[0-9.]/g, '')
      if (!isNaN(num)) countUp(el, num, suffix)
    })
    // Team
    fadeUp('.team-card', { stagger: 0.1 })
    // Certifications
    scaleFade('.cert-badge', { stagger: 0.1 })
  }, [])

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__inner">
          <span className="badge badge-accent">About FinEdge</span>
          <h1>Empowering Businesses with Financial Excellence</h1>
          <p>We are a team of dedicated Chartered Accountants committed to your growth and compliance.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-story">
            <div className="about-story__content">
              <span className="badge">Our Story</span>
              <h2>A Legacy of Trust and Professionalism</h2>
              <p>
                Founded in 2014, FinEdge & Associates began with a simple mission: to provide high-quality financial services that are accessible and tailored to modern business needs.
              </p>
              <p>
                Over the past decade, we have grown from a small practice to a full-service CA firm, serving hundreds of clients across various industries. Our success is built on a foundation of integrity, precision, and a deep understanding of the Indian financial landscape.
              </p>
              <div className="about-preview__list">
                <li><FiCheckCircle /> 10+ Years of Industry Experience</li>
                <li><FiCheckCircle /> Team of 20+ Financial Experts</li>
                <li><FiCheckCircle /> 500+ Satisfied Business Clients</li>
                <li><FiCheckCircle /> PAN-India Service Presence</li>
              </div>
            </div>
            <div className="about-story__values">
              <div className="value-card">
                <FiAward className="value-card__icon" />
                <h3>Commitment to Excellence</h3>
                <p>We strive for perfection in every audit, tax filing, and advisory project we undertake.</p>
              </div>
              <div className="value-card">
                <FiShield className="value-card__icon" />
                <h3>Uncompromising Integrity</h3>
                <p>Trust is our most valuable asset. We maintain the highest ethical standards in all our dealings.</p>
              </div>
              <div className="value-card">
                <FiHeart className="value-card__icon" />
                <h3>Client-Centric Approach</h3>
                <p>Your business is unique, and so are our solutions. We take the time to understand your goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Stats Section */}
      <section className="about-stats section">
        <div className="container">
          <div className="stats-grid stats-grid--dark">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon"><stat.icon /></div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Our Team</span>
            <h2>Meet the Experts</h2>
            <p>Our team comprises qualified professionals with extensive experience in various domains of finance and law.</p>
          </div>
          <div className="grid grid-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="card team-card">
                <div className="team-card__avatar">
                  {member.name.split(' ').map(n => n.includes('CA') ? '' : n[0]).join('')}
                </div>
                <h3>{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <div className="team-card__meta">
                  <span><FiAward /> {member.exp} Exp.</span>
                  <span><FiShield /> {member.speciality}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section about-certs">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Our Credentials</span>
            <h2>Certified Excellence</h2>
          </div>
          <div className="about-certs__grid">
            <div className="cert-badge"><FiAward /> ICAI Registered</div>
            <div className="cert-badge"><FiAward /> GST Certified Firm</div>
            <div className="cert-badge"><FiAward /> ISO 9001:2015</div>
            <div className="cert-badge"><FiAward /> MSME Registered</div>
          </div>
        </div>
      </section>
    </div>
  )
}
