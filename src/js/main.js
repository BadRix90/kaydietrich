import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initialize AOS (Animate On Scroll) library
 */
function initAOS() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
  });
}

/**
 * Initialize Mobile Navigation Toggle
 */
function initMobileNav() {
  const mobileMenuBtn = document.querySelector('[data-mobile-menu]');
  const mobileMenu = document.querySelector('[data-mobile-menu-content]');
  
  if (!mobileMenuBtn || !mobileMenu) return;
  
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
  });
}

/**
 * Initialize Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/**
 * Main initialization function
 */
function init() {
  initAOS();
  initMobileNav();
  initSmoothScroll();
  console.log('✅ Website initialized');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
