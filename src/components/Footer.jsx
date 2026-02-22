import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi'
import { siteConfig, navLinks, services } from '../data'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__divider"></div>

      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Column 1: Logo & Desc */}
            <div className="footer__col">
              <Link to="/" className="footer__logo">
                <div className="navbar__logo-icon">
                  <svg viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="10" fill="var(--accent)" />
                    <path d="M12 28V14h4l4 8 4-8h4v14h-3.5V19.5l-3.5 7h-2l-3.5-7V28H12z" fill="var(--primary-dark)" />
                  </svg>
                </div>
                <div className="footer__logo-text">
                  <span className="footer__logo-name">{siteConfig.name}</span>
                  <span className="footer__logo-tag">{siteConfig.tagline}</span>
                </div>
              </Link>
              <p className="footer__desc">
                Your trusted partner in financial excellence. We provide comprehensive accounting, tax, and advisory services to help your business thrive.
              </p>
              <div className="footer__social">
                <a href={siteConfig.social.facebook} aria-label="Facebook"><FiFacebook /></a>
                <a href={siteConfig.social.twitter} aria-label="Twitter"><FiTwitter /></a>
                <a href={siteConfig.social.linkedin} aria-label="LinkedIn"><FiLinkedin /></a>
                <a href={siteConfig.social.instagram} aria-label="Instagram"><FiInstagram /></a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="footer__col">
              <h4>Our Services</h4>
              <ul>
                {services.slice(0, 5).map(service => (
                  <li key={service.id}>
                    <Link to={`/services/${service.id}`}><FiArrowRight /> {service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div className="footer__col">
              <h4>Quick Links</h4>
              <ul>
                {navLinks.map(link => (
                  <li key={link.path}>
                    <Link to={link.path}><FiArrowRight /> {link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="footer__col">
              <h4>Contact Us</h4>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <FiMapPin className="footer__contact-icon" />
                  <span>{siteConfig.address}</span>
                </div>
                <a href={`tel:${siteConfig.phone}`} className="footer__contact-item">
                  <FiPhone className="footer__contact-icon" />
                  <span>{siteConfig.phone}</span>
                </a>
                <a href={`mailto:${siteConfig.email}`} className="footer__contact-item">
                  <FiMail className="footer__contact-icon" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p>&copy; {currentYear} {siteConfig.name}. All Rights Reserved.</p>
            <div className="footer__bottom-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
