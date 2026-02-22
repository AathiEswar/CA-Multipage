import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.15, ...options })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastScroll = window.scrollY
    const handleScroll = () => {
      const current = window.scrollY
      setScrollY(current)
      setScrollDir(current > lastScroll ? 'down' : 'up')
      lastScroll = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollDir, scrollY }
}
