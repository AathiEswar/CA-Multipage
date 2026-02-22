/**
 * animations.js
 * Central GSAP animation utilities for FinEdge & Associates.
 * Uses ScrollTrigger for all scroll-based reveals.
 */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─── Defaults ─────────────────────────────────────────────────────────────
const EASE_OUT = 'power3.out'
const EASE_INOUT = 'power2.inOut'
const DURATION = 0.75
const STAGGER = 0.12

/**
 * Fade + slide up — the bread-and-butter reveal.
 * @param {string|Element} targets  CSS selector or DOM element(s)
 * @param {object}         opts     Optional overrides
 */
export function fadeUp(targets, opts = {}) {
  const els = gsap.utils.toArray(targets)
  if (!els.length) return

  gsap.fromTo(els,
    { opacity: 0, y: opts.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: opts.duration ?? DURATION,
      ease: opts.ease ?? EASE_OUT,
      stagger: opts.stagger ?? STAGGER,
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? els[0],
        start: opts.start ?? 'top 88%',
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
    { opacity: 0, x: -(opts.x ?? 60) },
    {
      opacity: 1,
      x: 0,
      duration: opts.duration ?? DURATION,
      ease: opts.ease ?? EASE_OUT,
      stagger: opts.stagger ?? 0,
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? els[0],
        start: opts.start ?? 'top 85%',
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
    { opacity: 0, x: opts.x ?? 60 },
    {
      opacity: 1,
      x: 0,
      duration: opts.duration ?? DURATION,
      ease: opts.ease ?? EASE_OUT,
      stagger: opts.stagger ?? 0,
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? els[0],
        start: opts.start ?? 'top 85%',
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
    { opacity: 0, scale: opts.from ?? 0.88 },
    {
      opacity: 1,
      scale: 1,
      duration: opts.duration ?? 0.6,
      ease: opts.ease ?? EASE_INOUT,
      stagger: opts.stagger ?? STAGGER,
      delay: opts.delay ?? 0,
      scrollTrigger: {
        trigger: opts.trigger ?? els[0],
        start: opts.start ?? 'top 88%',
        once: true,
      },
      clearProps: 'opacity,transform',
    }
  )
}

/**
 * Animated number counter.
 * @param {Element} el      DOM element whose textContent is the target number
 * @param {number}  target  Final numeric value
 * @param {string}  suffix  Characters after the number ('+', '%', etc.)
 */
export function countUp(el, target, suffix = '', opts = {}) {
  if (!el) return
  const obj = { val: 0 }
  gsap.to(obj, {
    val: target,
    duration: opts.duration ?? 2,
    ease: 'power1.inOut',
    delay: opts.delay ?? 0,
    onUpdate: () => { el.textContent = Math.round(obj.val) + suffix },
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      once: true,
    },
  })
}

/**
 * Parallax shift on scroll (subtle depth effect).
 */
export function parallax(target, opts = {}) {
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
