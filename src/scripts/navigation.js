/**
 * Navigation Module
 * Handles Mobile Menu and Smart Sticky Header
 */

/**
 * Initialize Mobile Navigation Toggle
 */
export function initMobileNav() {
  const mobileMenuBtn = document.querySelector("[data-mobile-menu]")
  const mobileMenu = document.querySelector("[data-mobile-menu-content]")

  if (!mobileMenuBtn || !mobileMenu) return

  // Toggle menu on button click
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden")
    mobileMenuBtn.setAttribute("aria-expanded", !isOpen)
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
      mobileMenuBtn.setAttribute("aria-expanded", "false")
    })
  })
}

/**
 * Initialize Smart Sticky Header
 * Hides header on scroll down, shows on scroll up
 * @param {number} threshold - Scroll threshold in pixels before hiding
 */
export function initStickyHeader(threshold = 100) {
  const header = document.querySelector("[data-header]")
  if (!header) return

  let lastScrollY = window.scrollY
  let ticking = false

  const updateHeader = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > threshold) {
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        header.style.transform = "translateY(-100%)"
      } else {
        // Scrolling up - show header
        header.style.transform = "translateY(0)"
      }
    } else {
      // At top of page - always show header
      header.style.transform = "translateY(0)"
    }

    lastScrollY = currentScrollY
    ticking = false
  }

  // Use requestAnimationFrame for smooth performance
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader)
      ticking = true
    }
  })
}