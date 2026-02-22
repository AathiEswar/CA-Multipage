import { useEffect } from 'react'
import { industries } from '../data'
import { fadeUp, scaleFade } from '../animations'
import './IndustriesPage.css'

export default function IndustriesPage() {
  useEffect(() => {
    fadeUp('.page-hero__inner > *', { start: 'top 110%', stagger: 0.15 })
    scaleFade('.industry-detail-card', { stagger: 0.08 })
    fadeUp('.industries-page .section.bg-gray .card > *', { stagger: 0.15 })
  }, [])

  return (
    <div className="industries-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__inner">
          <span className="badge badge-accent">Industries</span>
          <h1>Expertise Across Sectors</h1>
          <p>We provide specialized financial and compliance services tailored to the unique needs of various industries.</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Specialization</span>
            <h2>Who We Serve</h2>
            <p>Our deep industry knowledge allows us to provide more than just compliance — we provide strategic sector-specific value.</p>
          </div>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="card industry-detail-card">
                <div className="industry-detail-card__icon-wrap">
                  <industry.icon className="industry-detail-card__icon" />
                </div>
                <h3>{industry.name}</h3>
                <p>{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial CTA */}
      <section className="section bg-gray">
        <div className="container">
          <div className="card" style={{ padding: '60px', textAlign: 'center', background: 'var(--primary-dark)', color: 'white', border: 'none' }}>
            <h2 style={{ color: 'white', marginBottom: '16px' }}>Don't see your industry?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              We serve clients across hundreds of micro-niches. Our fundamental expertise in finance and law applies universally. Contact us to discuss your specific business model.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <a href="/contact" className="btn btn-accent btn-lg">Consult Our Experts</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
