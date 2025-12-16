/**
 * Animations Module
 * Handles AOS (Animate On Scroll) and Smooth Scrolling
 */

import AOS from "aos"
import "aos/dist/aos.css"

/**
 * Initialize AOS (Animate On Scroll) library
 */
export function initAOS() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  })
}

/**
 * Initialize Smooth Scroll for Anchor Links
 * @param {number} headerOffset - Height of sticky header in pixels
 */
export function initSmoothScroll(headerOffset = 100) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href")
      if (href === "#") return

      e.preventDefault()
      const target = document.querySelector(href)
      if (!target) return

      // Account for sticky header height
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })
  })
}