import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'
import { navLinks, siteConfig } from '../data'
import { useScrollDirection } from '../hooks'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollDir, scrollY } = useScrollDirection()
  const location = useLocation()
  const isScrolled = scrollY > 50

  useEffect(() => { setIsOpen(false) }, [location])
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Top Bar */}
      <div className={`topbar ${isScrolled ? 'topbar--hidden' : ''}`}>
        <div className="container topbar__inner">
          <div className="topbar__left">
            <a href={`tel:${siteConfig.phone}`}><FiPhone /> {siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`}><FiMail /> {siteConfig.email}</a>
          </div>
          <div className="topbar__right">
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${scrollDir === 'down' && scrollY > 300 ? 'navbar--hidden' : ''}`}>
        <div className="container navbar__inner">
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" fill="var(--primary)" />
                <path d="M12 28V14h4l4 8 4-8h4v14h-3.5V19.5l-3.5 7h-2l-3.5-7V28H12z" fill="white" />
              </svg>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">{siteConfig.name}</span>
              <span className="navbar__logo-tag">{siteConfig.tagline}</span>
            </div>
          </Link>

          <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="navbar__links-cta-mobile">
              <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
            </li>
          </ul>

          <div className="navbar__actions">
            <Link to="/contact" className="btn btn-primary btn-sm navbar__cta-desktop">
              Get Free Quote
            </Link>
            <button
              className="navbar__toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        <div
          className={`navbar__overlay ${isOpen ? 'navbar__overlay--visible' : ''}`}
          onClick={() => setIsOpen(false)}
        />
      </nav>
    </>
  )
}
