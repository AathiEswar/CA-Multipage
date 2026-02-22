import { useState, useEffect } from 'react'
import { FiPhone, FiMail, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import { siteConfig, services } from '../data'
import { fadeUp, fadeLeft, fadeRight } from '../animations'
import './ContactPage.css'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    fadeUp('.page-hero__inner > *', { start: 'top 110%', stagger: 0.15 })
    fadeLeft('.contact-info', { delay: 0.1 })
    fadeRight('.contact-form-wrap', { delay: 0.2 })
    fadeUp('.contact-info__item', { stagger: 0.12 })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__inner">
          <span className="badge badge-accent">Contact Us</span>
          <h1>Get in Touch</h1>
          <p>Have questions? We're here to help. Reach out to us for any financial, tax, or legal inquiries.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Start a Conversation</h2>
              <p>Schedule a free consultation or just say hello. Our experts are ready to assist you.</p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon"><FiMapPin /></div>
                  <div>
                    <strong>Office Address</strong>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>
                <a href={`tel:${siteConfig.phone}`} className="contact-info__item">
                  <div className="contact-info__icon"><FiPhone /></div>
                  <div>
                    <strong>Phone Number</strong>
                    <span>{siteConfig.phone}</span>
                  </div>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="contact-info__item">
                  <div className="contact-info__icon"><FiMail /></div>
                  <div>
                    <strong>Email Address</strong>
                    <span>{siteConfig.email}</span>
                  </div>
                </a>
              </div>

              <div className="contact-map card">
                {/* Embed a generic Google Maps iframe or a placeholder */}
                <div style={{ height: '300px', background: 'var(--gray-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FiMapPin style={{ fontSize: '3rem', color: 'var(--primary)', opacity: 0.3 }} />
                  <span style={{ marginLeft: '12px', color: 'var(--gray-500)' }}>Interactive Map View</span>
                </div>
              </div>
            </div>

            <div className="card contact-form-wrap">
              {!isSubmitted ? (
                <>
                  <h3>Send us a Message</h3>
                  <p>We typically respond within 24 hours.</p>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" required />
                      </div>
                      <div className="contact-form__field">
                        <label>Email Address</label>
                        <input type="email" placeholder="john@example.com" required />
                      </div>
                    </div>
                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+91 98765 43210" required />
                      </div>
                      <div className="contact-form__field">
                        <label>Subject</label>
                        <select required>
                          <option value="">Select Service</option>
                          {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                          <option value="other">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div className="contact-form__field">
                      <label>Your Message</label>
                      <textarea rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                  </form>
                </>
              ) : (
                <div className="contact-success">
                  <div className="contact-success__icon"><FiCheckCircle /></div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you shortly at your registered email address.</p>
                  <button className="btn btn-outline-primary" onClick={() => setIsSubmitted(false)}>Send Another Message</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
