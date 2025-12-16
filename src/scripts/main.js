/**
 * Main Entry Point for kaydietrich.de
 * Orchestrates all modules and initializes the website
 */

import { initAOS, initSmoothScroll } from "./animations.js"
import { initMobileNav, initStickyHeader } from "./navigation.js"
import { initContactForm } from "./contact-form.js"

/**
 * Initialize all website modules
 */
function init() {
  // Animations
  initAOS()
  initSmoothScroll(100) // 100px header offset

  // Navigation
  initMobileNav()
  initStickyHeader(100) // Hide header after 100px scroll

  // Forms
  initContactForm()

  console.log("✅ Website initialized - kaydietrich.de")
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}