import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight, FiCheckCircle, FiStar, FiFileText,
  FiDollarSign, FiBook, FiShield, FiBriefcase, FiUsers
} from 'react-icons/fi'
import {
  siteConfig, stats, services, whyChooseUs,
  industries, testimonials, processSteps
} from '../data'
import { fadeUp, fadeLeft, fadeRight, scaleFade, countUp } from '../animations'
import './HomePage.css'

export default function HomePage() {
  /* ── Refs ─────────────────────────────────────── */
  const heroContentRef = useRef(null)
  const heroVisualRef = useRef(null)
  const statsRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const whyRef = useRef(null)
  const processRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

  /* ── GSAP ─────────────────────────────────────── */
  useEffect(() => {
    // Hero — staggered slide in on mount (no scroll trigger)
    fadeUp('.hero__badge', { start: 'top 110%', delay: 0.1 })
    fadeUp('.hero h1', { start: 'top 110%', delay: 0.25, y: 50 })
    fadeUp('.hero__subtitle', { start: 'top 110%', delay: 0.4 })
    fadeUp('.hero__cta', { start: 'top 110%', delay: 0.55 })
    fadeUp('.hero__trust-row', { start: 'top 110%', delay: 0.7 })
    fadeRight('.hero__visual', { start: 'top 110%', delay: 0.3, x: 80 })

    // Stats — pop in with scale
    scaleFade('.stat-item', {
      trigger: statsRef.current,
      stagger: 0.1,
    })

    // Stat counter numbers
    document.querySelectorAll('.stat-value').forEach(el => {
      const text = el.textContent
      const num = parseFloat(text.replace(/[^0-9.]/g, ''))
      const suffix = text.replace(/[0-9.]/g, '')
      if (!isNaN(num)) countUp(el, num, suffix)
    })

    // Services grid — each card fades up
    fadeUp('.service-card', { trigger: servicesRef.current, stagger: 0.1 })
    fadeUp('.section-header', { stagger: 0.12 })

    // About — text left, image right
    fadeLeft('.about-preview__img-wrap', { trigger: aboutRef.current })
    fadeRight('.about-preview__content', { trigger: aboutRef.current, delay: 0.15 })

    // Why choose us
    scaleFade('.why-card', { trigger: whyRef.current, stagger: 0.12 })

    // Process steps
    fadeUp('.process__step', { trigger: processRef.current, stagger: 0.15 })

    // Testimonials
    scaleFade('.testimonial-card', { trigger: testimonialsRef.current, stagger: 0.14 })

    // CTA Banner
    fadeUp('.cta-banner__inner > *', { trigger: ctaRef.current, stagger: 0.15 })
  }, [])

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__bg-gradient"></div>
          <div className="hero__bg-pattern"></div>
          <div className="hero__bg-circles">
            <div className="hero__circle hero__circle--1"></div>
            <div className="hero__circle hero__circle--2"></div>
            <div className="hero__circle hero__circle--3"></div>
          </div>
        </div>

        <div className="container hero__inner">
          <div className="hero__content" ref={heroContentRef}>
            <span className="hero__badge">Trusted by 500+ Businesses</span>
            <h1>
              Expert Financial Solutions for <br />
              <span className="hero__h1-accent">Modern Businesses</span>
            </h1>
            <p className="hero__subtitle">
              We provide comprehensive Chartered Accountancy services, from GST compliance and tax planning to strategic financial advisory.
            </p>
            <div className="hero__cta">
              <Link to="/contact" className="btn btn-primary btn-lg">Get Free Consultation</Link>
              <Link to="/services" className="btn btn-outline-white btn-lg">Explore Services</Link>
            </div>
            <div className="hero__trust-row">
              <div className="hero__avatars">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="hero__avatar">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" />
                  </div>
                ))}
                <div className="hero__avatar">+</div>
              </div>
              <div className="hero__trust-text">
                <div className="hero__stars">
                  {[1, 2, 3, 4, 5].map(i => <FiStar key={i} fill="currentColor" />)}
                </div>
                <span>4.9/5 Rating from 500+ Clients</span>
              </div>
            </div>
          </div>

          <div className="hero__visual" ref={heroVisualRef}>
            <div className="hero__card-stack">
              <div className="hero__float-card hero__float-card--1">
                <div className="hero__float-icon"><FiFileText /></div>
                <div>
                  <strong>100% Tax Compliance</strong>
                  <span>Always on time</span>
                </div>
              </div>
              <div className="hero__float-card hero__float-card--2">
                <div className="hero__float-icon"><FiDollarSign /></div>
                <div>
                  <strong>Maximized Savings</strong>
                  <span>Strategic tax planning</span>
                </div>
              </div>
              <div className="hero__float-card hero__float-card--3">
                <div className="hero__float-icon"><FiUsers /></div>
                <div>
                  <strong>Expert Advisors</strong>
                  <span>Dedicated CA support</span>
                </div>
              </div>
              <div className="hero__illustration">
                <svg viewBox="0 0 400 400" fill="none">
                  <circle cx="200" cy="200" r="150" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="10 10" />
                  <rect x="100" y="100" width="200" height="200" rx="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
                  <path d="M150 250 L200 180 L250 250" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="200" cy="180" r="10" fill="var(--accent)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
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

      {/* Services Section */}
      <section className="section bg-white" ref={servicesRef}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Our Expertise</span>
            <h2>Comprehensive Financial Services</h2>
            <p>From startups to established enterprises, we provide tailored solutions for every stage of your business journey.</p>
          </div>
          <div className="grid grid-3">
            {services.map(service => (
              <Link to={`/services/${service.id}`} key={service.id} className="card service-card">
                <div className="service-card__icon" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <div className="service-card__link">
                  Learn More <FiArrowRight />
                </div>
              </Link>
            ))}
          </div>
          <div className="services-overview__cta">
            <Link to="/services" className="btn btn-outline btn-lg">View All Services</Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview" ref={aboutRef}>
        <div className="container">
          <div className="about-preview__inner">
            <div className="about-preview__img-wrap">
              <svg viewBox="0 0 500 400" fill="none">
                <rect width="500" height="400" rx="20" fill="var(--gray-200)" />
                <path d="M150 150 L350 150 L350 250 L150 250 Z" fill="var(--primary-dark)" opacity="0.1" />
                <text x="250" y="210" textAnchor="middle" fill="var(--primary-dark)" fontSize="20" fontWeight="bold">Professional CA Firm</text>
              </svg>
              <div className="about-preview__exp-badge">
                <strong>10+</strong>
                <span>Years of <br />Excellence</span>
              </div>
            </div>
            <div className="about-preview__content">
              <span className="badge">Who We Are</span>
              <h2>Building Strong Financial Foundations Since 2014</h2>
              <p>
                FinEdge &amp; Associates is a leading firm of Chartered Accountants dedicated to providing highest quality of professional service in the field of accounting, audit, and taxation.
              </p>
              <ul className="about-preview__list">
                <li><FiCheckCircle /> Qualified &amp; Experienced CAs</li>
                <li><FiCheckCircle /> Personalized Client Approach</li>
                <li><FiCheckCircle /> 100% Data Security &amp; Privacy</li>
                <li><FiCheckCircle /> Tech-Driven Accounting Solutions</li>
              </ul>
              <Link to="/about" className="btn btn-primary btn-lg">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white" ref={whyRef}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Why Choose Us</span>
            <h2>The FinEdge Advantage</h2>
            <p>We go beyond traditional accounting to become your strategic growth partners.</p>
          </div>
          <div className="grid grid-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-card__icon"><item.icon /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" ref={processRef}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Our Process</span>
            <h2>How We Work Together</h2>
            <p>A simple, transparent, and efficient process to handle your financial requirements.</p>
          </div>
          <div className="process__steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process__step">
                <div className="process__step-num">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials" ref={testimonialsRef}>
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Trusted by hundreds of entrepreneurs and corporate clients across India.</p>
          </div>
          <div className="grid grid-2">
            {testimonials.map((t, index) => (
              <div key={index} className="card testimonial-card">
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
                </div>
                <p className="testimonial-card__review">"{t.review}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}, {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" ref={ctaRef}>
        <div className="cta-banner__bg"></div>
        <div className="container">
          <div className="cta-banner__inner">
            <h2>Ready to grow your business?</h2>
            <p>Schedule a free consultation with our experts and discover how we can help you achieve financial excellence.</p>
            <div className="cta-banner__buttons">
              <Link to="/contact" className="btn btn-accent btn-lg">Get Started Now</Link>
              <a href={`tel:${siteConfig.phone}`} className="btn btn-outline-white btn-lg">Call Us: {siteConfig.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
