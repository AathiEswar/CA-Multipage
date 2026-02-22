import { useEffect } from 'react'
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi'
import { blogPosts } from '../data'
import { fadeUp, scaleFade } from '../animations'
import './BlogPage.css'

export default function BlogPage() {
  useEffect(() => {
    fadeUp('.page-hero__inner > *', { start: 'top 110%', stagger: 0.15 })
    scaleFade('.blog-card', { stagger: 0.1 })
    fadeUp('.blog-page .section.bg-gray .card > div', { stagger: 0.12 })
  }, [])

  return (
    <div className="blog-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg"></div>
        <div className="container page-hero__inner">
          <span className="badge badge-accent">Financial Insights</span>
          <h1>Knowledge Hub</h1>
          <p>Stay updated with the latest trends in taxation, accounting, and business compliance in India.</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="card blog-card">
                <div className="blog-card__thumb" style={{ background: 'linear-gradient(135deg, var(--primary-50), var(--primary-100))' }}>
                  <div className="blog-card__category">{post.category}</div>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span><FiCalendar /> {post.date}</span>
                    <span><FiClock /> {post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="service-card__link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    Read Article <FiArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gray">
        <div className="container">
          <div className="card" style={{ padding: '60px', textAlign: 'center', background: 'var(--white)', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="badge">Newsletter</span>
              <h2>Get Insights Delivered</h2>
              <p style={{ maxWidth: '600px', margin: '16px auto 32px' }}>
                Join our monthly newsletter to receive expert advice on tax planning and financial management directly in your inbox.
              </p>
              <form style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '500px', margin: '0 auto' }}>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="input"
                  style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--gray-200)' }}
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe Now</button>
              </form>
            </div>
            {/* Decal Background */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'var(--primary-50)', opacity: 0.3, zIndex: 0 }}></div>
          </div>
        </div>
      </section >
    </div >
  )
}
