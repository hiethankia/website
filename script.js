/* ============================================
   Ethan Kia Portfolio - Main JavaScript
   Clean, Modern, Professional
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functions
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initSmoothScroll();
});

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  
  if (!navbar) return;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ============================================
   MOBILE MENU TOGGLE
   ============================================ */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!menuToggle || !navLinks) return;
  
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });
  
  // Close menu when clicking on a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

/* ============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only handle actual anchor links
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ============================================
   CONSOLE MESSAGE
   ============================================ */
console.log('%c Ethan Kia Portfolio ', 'background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; font-size: 16px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c Class of 2029 | Grand Rapids, Michigan ', 'color: #94a3b8; font-size: 12px;');
