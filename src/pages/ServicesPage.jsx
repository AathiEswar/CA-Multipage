import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { services } from '../data'
import { fadeUp, fadeLeft, fadeRight } from '../animations'
import './ServicesPage.css'

export default function ServicesPage() {
  const navigate = useNavigate()

  useEffect(() => {
    fadeUp('.page-hero__inner > *', { start: 'top 110%', stagger: 0.15 })
    // Alternate slide direction for each service row
    document.querySelectorAll('.service-row').forEach((row, i) => {
      if (i % 2 === 0) fadeLeft(row, { trigger: row })
      else fadeRight(row, { trigger: row })
    })
    fadeUp('.services-page .section.bg-gray > .container > *', { stagger: 0.15 })
  }, [])

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__inner">
          <span className="badge badge-accent">Our Services</span>
          <h1>Comprehensive Financial Solutions</h1>
          <p>We provide a wide range of professional services to help you stay compliant and manage your finances effectively.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-white">
        <div className="container">
          <div className="services-list">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card service-row ${index % 2 !== 0 ? 'service-row--reverse' : ''}`}
                onClick={() => navigate(`/services/${service.id}`)}
              >
                <div className="service-row__content">
                  <div className="service-row__icon" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                    <service.icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-row__features">
                    {service.features.map((feature, i) => (
                      <li key={i}><FiCheck style={{ color: service.color }} /> {feature}</li>
                    ))}
                  </ul>
                  <div className="service-card__link" style={{ marginTop: '12px' }}>
                    Learn More <FiArrowRight />
                  </div>
                </div>
                <div className="service-row__visual">
                  <div className="service-row__visual-bg" style={{ backgroundColor: `${service.color}08` }}>
                    <service.icon style={{ fontSize: '5rem', opacity: 0.1, color: service.color }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview or CTA */}
      <section className="section bg-gray">
        <div className="container text-center">
          <h2>Need a custom solution for your business?</h2>
          <p style={{ margin: '16px auto 32px', maxWidth: '600px' }}>
            We understand that every business has unique requirements. Contact us today for a tailored service package that fits your needs perfectly.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/contact')}>Get Free Quote</button>
            <button className="btn btn-outline btn-lg" onClick={() => navigate('/pricing')}>View Pricing</button>
          </div>
        </div>
      </section>
    </div>
  )
}
