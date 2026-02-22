import { useParams, Link, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiCheckCircle, FiChevronRight, FiPhone, FiMail } from 'react-icons/fi'
import { services, siteConfig } from '../data'
import './ServiceDetailPage.css'

export default function ServiceDetailPage() {
  const { id } = useParams()
  const service = services.find(s => s.id === id)

  if (!service) return <Navigate to="/services" />

  return (
    <div className="service-detail-page">
      {/* Detail Hero */}
      <section className="service-detail-hero">
        <div className="page-hero__bg"></div>
        <div className="container service-detail-hero__inner">
          <Link to="/services" className="service-detail__back">
            <FiArrowLeft /> Back to Services
          </Link>
          <div className="service-detail__icon-wrap" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
            <service.icon />
          </div>
          <h1>{service.title}</h1>
          <p>{service.shortDesc}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="service-detail__body">
            <div className="service-detail__main">
              <h2>Service Overview</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px', color: 'var(--gray-600)' }}>
                {service.description}
              </p>

              <h2>Key Features</h2>
              <div className="service-detail__features">
                {service.features.map((feature, i) => (
                  <div key={i} className="card service-feature">
                    <FiCheckCircle className="service-feature__check" style={{ color: service.color }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <h2>Our Approach</h2>
              <p style={{ marginBottom: '24px' }}>
                At FinEdge, we don't just process paperwork; we provide strategic insights. Our approach to {service.title} is designed to minimize risk, ensure full compliance, and identify opportunities for optimization.
              </p>
              <div className="card service-detail__cta">
                <h3>Need this service?</h3>
                <p>Start with a free consultation today. We'll assess your requirements and provide a clear roadmap.</p>
                <Link to="/contact" className="btn btn-primary btn-lg">Get Free Quote</Link>
              </div>
            </div>

            <div className="service-detail__sidebar">
              <div className="card sidebar-card">
                <h4>Other Services</h4>
                <ul>
                  {services.filter(s => s.id !== id).map(s => (
                    <li key={s.id}>
                      <Link to={`/services/${s.id}`}>
                        <s.icon /> {s.title} <FiChevronRight />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card sidebar-card sidebar-card--cta">
                <h4>Have Questions?</h4>
                <p>Speak with our experts right now for immediate assistance.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href={`tel:${siteConfig.phone}`} className="btn btn-accent btn-sm" style={{ width: '100%' }}>
                    <FiPhone /> Call Now
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="btn btn-outline-white btn-sm" style={{ width: '100%' }}>
                    <FiMail /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
