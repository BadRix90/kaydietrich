import AOS from "aos"
import "aos/dist/aos.css"

/**
 * Initialize AOS (Animate On Scroll) library
 */
function initAOS() {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  })
}

/**
 * Initialize Mobile Navigation Toggle
 */
function initMobileNav() {
  const mobileMenuBtn = document.querySelector("[data-mobile-menu]")
  const mobileMenu = document.querySelector("[data-mobile-menu-content]")

  if (!mobileMenuBtn || !mobileMenu) return

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
 */
function initStickyHeader() {
  const header = document.querySelector("[data-header]")
  if (!header) return

  let lastScrollY = window.scrollY
  let ticking = false

  const updateHeader = () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        header.style.transform = "translateY(-100%)"
      } else {
        // Scrolling up
        header.style.transform = "translateY(0)"
      }
    } else {
      header.style.transform = "translateY(0)"
    }

    lastScrollY = currentScrollY
    ticking = false
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader)
      ticking = true
    }
  })
}

/**
 * Initialize Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href")
      if (href === "#") return

      e.preventDefault()
      const target = document.querySelector(href)
      if (!target) return

      // Account for sticky header height
      const headerOffset = 100
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    })
  })
}

/**
 * Initialize Contact Form Handler
 */
function initContactForm() {
  const form = document.querySelector("[data-contact-form]")
  const successMessage = document.querySelector("[data-success-message]")

  if (!form) return

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    console.log("[v0] Form submitted:", data)

    // Simulate form submission (replace with actual API call)
    try {
      // TODO: Replace with actual API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      // Show success message
      form.classList.add("hidden")
      successMessage.classList.remove("hidden")

      // Reset form after delay
      setTimeout(() => {
        form.reset()
        form.classList.remove("hidden")
        successMessage.classList.add("hidden")
      }, 5000)
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      alert("Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.")
    }
  })

  // Inline validation
  const emailInput = form.querySelector("#email")
  if (emailInput) {
    emailInput.addEventListener("blur", () => {
      const isValid = emailInput.validity.valid
      if (!isValid && emailInput.value) {
        emailInput.classList.add("border-red-500")
      } else {
        emailInput.classList.remove("border-red-500")
      }
    })
  }
}

/**
 * Main initialization function
 */
function init() {
  initAOS()
  initMobileNav()
  initStickyHeader()
  initSmoothScroll()
  initContactForm()
  console.log("✅ Website initialized")
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}
