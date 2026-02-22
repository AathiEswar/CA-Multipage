import { RiWhatsappLine } from 'react-icons/ri'
import { siteConfig } from '../data'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <RiWhatsappLine />
      <span className="whatsapp-btn__tooltip">Chat with us</span>
    </a>
  )
}
