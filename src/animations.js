/**
 * animations.js
 * Central GSAP animation utilities for FinEdge & Associates.
 * Uses ScrollTrigger for all scroll-based reveals.
 * Mobile-optimised: faster durations, earlier triggers, smaller offsets.
 */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Responsive helpers ───────────────────────────────────────────────────
const isMobile = () => window.innerWidth <= 900

const EASE_OUT = 'power3.out'
const EASE_INOUT = 'power2.inOut'

// Adaptive defaults — snappier on mobile
const dur = () => isMobile() ? 0.45 : 0.75
const stag = () => isMobile() ? 0.06 : 0.12
const yOff = () => isMobile() ? 24 : 40
const xOff = () => isMobile() ? 30 : 60
const trigger = () => isMobile() ? 'top 98%' : 'top 88%'

/**
 * Fade + slide up — the bread-and-butter reveal.
 */
export function fadeUp(targets, opts = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return

  gsap.fromTo(els,
    { opacity: 0, y: opts.y ?? yOff() },
    {
      opacity: 1,
      y: 0,
      duration: opts.duration ?? dur(),
      ease: opts.ease ?? EASE_OUT,
      stagger: opts.stagger ?? stag(),
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? els[0],
        start: opts.start ?? trigger(),
        once: true,
        ...opts.scrollTrigger,
      },
      clearProps: 'opacity,transform',
      ...opts.gsapOpts,
    }
  )
}

/**
 * Fade + slide in from the left.
 */
export function fadeLeft(targets, opts = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return

  gsap.fromTo(els,
    { opacity: 0, x: -(opts.x ?? xOff()) },
    {
      opacity: 1,
      x: 0,
      duration: opts.duration ?? dur(),
      ease: opts.ease ?? EASE_OUT,
      stagger: opts.stagger ?? 0,
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? els[0],
        start: opts.start ?? trigger(),
        once: true,
      },
      clearProps: 'opacity,transform',
    }
  )
}

/**
 * Fade + slide in from the right.
 */
export function fadeRight(targets, opts = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return

  gsap.fromTo(els,
    { opacity: 0, x: opts.x ?? xOff() },
    {
      opacity: 1,
      x: 0,
      duration: opts.duration ?? dur(),
      ease: opts.ease ?? EASE_OUT,
      stagger: opts.stagger ?? 0,
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? els[0],
        start: opts.start ?? trigger(),
        once: true,
      },
      clearProps: 'opacity,transform',
    }
  )
}

/**
 * Scale + fade in (card pop feel).
 */
export function scaleFade(targets, opts = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return

  gsap.fromTo(els,
    { opacity: 0, scale: opts.from ?? (isMobile() ? 0.92 : 0.88) },
    {
      opacity: 1,
      scale: 1,
      duration: opts.duration ?? (isMobile() ? 0.35 : 0.6),
      ease: opts.ease ?? EASE_INOUT,
      stagger: opts.stagger ?? stag(),
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? els[0],
        start: opts.start ?? trigger(),
        once: true,
      },
      clearProps: 'opacity,transform',
    }
  )
}

/**
 * Animated number counter.
 */
export function countUp(el, target, suffix = '', opts = {}) {
  if (!el) return
  const obj = { val: 0 }
  gsap.to(obj, {
    val: target,
    duration: opts.duration ?? (isMobile() ? 1.2 : 2),
    ease: 'power1.inOut',
    delay: opts.delay ?? 0,
    onUpdate: () => { el.textContent = Math.round(obj.val) + suffix },
    scrollTrigger: {
      trigger: el,
      start: isMobile() ? 'top 98%' : 'top 90%',
      once: true,
    },
  })
}

/**
 * Parallax shift on scroll (subtle depth effect).
 * Disabled on mobile to avoid jank.
 */
export function parallax(target, opts = {}) {
  if (isMobile()) return  // skip parallax on mobile
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return

  gsap.to(el, {
    y: opts.y ?? -60,
    ease: 'none',
    scrollTrigger: {
      trigger: opts.trigger ?? el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: opts.scrub ?? 1.5,
    },
  })
}

export { gsap, ScrollTrigger }
