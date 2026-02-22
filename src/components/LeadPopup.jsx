import { useState, useEffect } from 'react'
import { FiX, FiCheckCircle } from 'react-icons/fi'
import { services } from '../data'
import './LeadPopup.css'

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenLeadPopup')
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        sessionStorage.setItem('hasSeenLeadPopup', 'true')
      }, 10000) // Show after 10 seconds
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <div className="lead-popup__overlay">
      <div className="lead-popup">
        <button
          className="lead-popup__close"
          onClick={() => setIsVisible(false)}
          aria-label="Close popup"
        >
          <FiX />
        </button>

        {!isSubmitted ? (
          <>
            <div className="lead-popup__icon">
              <FiCheckCircle />
            </div>
            <h3>Get a Free Consultation</h3>
            <p>Ready to streamline your finances? Let's discuss how we can help your business grow.</p>

            <form className="lead-popup__form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Interested Service</option>
                {services.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
              <button type="submit" className="btn btn-primary">Send Request</button>
            </form>
            <p className="lead-popup__note">We'll get back to you within 24 hours.</p>
          </>
        ) : (
          <div className="lead-popup__success">
            <div className="lead-popup__icon">
              <FiCheckCircle />
            </div>
            <h3>Thank You!</h3>
            <p>Your request has been received. Our team will contact you shortly.</p>
          </div>
        )}
      </div>
    </div>
  )
}
