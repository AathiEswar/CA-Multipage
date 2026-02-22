import { useState, useEffect } from 'react'
import { FiCheck, FiInfo, FiPlus, FiMinus } from 'react-icons/fi'
import { pricingPlans, faqs } from '../data'
import { fadeUp, scaleFade } from '../animations'
import './PricingPage.css'

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    fadeUp('.page-hero__inner > *', { start: 'top 110%', stagger: 0.15 })
    scaleFade('.pricing-card', { stagger: 0.14 })
    fadeUp('.faq-item', { stagger: 0.1 })
  }, [])

  return (
    <div className="pricing-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__inner">
          <span className="badge badge-accent">Pricing Plans</span>
          <h1>Transparent & Affordable Pricing</h1>
          <p>Choose a plan that fits your business needs. No hidden charges, just professional service at a clear price.</p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="pricing-grid">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`card pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}
              >
                {plan.popular && <div className="pricing-card__badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <p className="pricing-card__desc">{plan.desc}</p>
                <div className="pricing-card__price">
                  <span className="pricing-card__currency">₹</span>
                  <span className="pricing-card__amount">{plan.price}</span>
                  <span className="pricing-card__period">{plan.period}</span>
                </div>
                <ul className="pricing-card__features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><FiCheck /> {feature}</li>
                  ))}
                </ul>
                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-primary'} btn-lg`} style={{ width: '100%' }}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px', color: 'var(--gray-500)', fontSize: '0.9rem' }}>
            <FiInfo /> All prices mentioned are exclusive of GST as applicable by Indian laws.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Knowledge Base</span>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our services, pricing, and process.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'faq-item--open' : ''}`}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <div className="faq-item__q">
                  {faq.q}
                  <div className="faq-item__toggle">
                    {openFaq === index ? <FiMinus /> : <FiPlus />}
                  </div>
                </div>
                {openFaq === index && (
                  <div className="faq-item__a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
