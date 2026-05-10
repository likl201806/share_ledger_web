/**
 * Kalana Website Main JavaScript
 * 处理移动端菜单、FAQ 展开等交互
 */

// Mobile Menu Toggle
function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  const navbarRight = document.querySelector('.navbar-right');

  if (navLinks) {
    navLinks.classList.toggle('active');
  }
  if (navbarRight) {
    navbarRight.classList.toggle('active');
  }
}

// Close mobile menu when clicking on a link
if (document.querySelector('.nav-links')) {
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      const navLinks = document.getElementById('navLinks');
      const navbarRight = document.querySelector('.navbar-right');

      if (navLinks) {
        navLinks.classList.remove('active');
      }
      if (navbarRight) {
        navbarRight.classList.remove('active');
      }
    });
  });
}

// FAQ Toggle
function toggleFaq(element) {
  const faqItem = element.closest('.faq-item');
  if (!faqItem) return;

  const isActive = faqItem.classList.contains('active');

  // Close all other FAQ items
  document.querySelectorAll('.faq-item').forEach(function(item) {
    item.classList.remove('active');
  });

  // Toggle current FAQ item
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 64;
      const targetPosition = target.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with fade-in class
function setupFadeInAnimations() {
  document.querySelectorAll('.card.fade-in, .fade-in').forEach(function(element) {
    if (!element.closest('.hero')) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(element);
    }
  });
}

// Add active state to navigation based on scroll position
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.active)');

  if (sections.length === 0 || navLinks.length === 0) return;

  const scrollPosition = window.scrollY + 100;

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Handle scroll-to-top for pages without sections
function handlePageScroll() {
  const scrollPosition = window.scrollY;

  // Add shadow to navbar on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (scrollPosition > 10) {
      navbar.style.boxShadow = 'var(--shadow-sm)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Trigger initial scroll check
  handlePageScroll();
  updateActiveNav();

  // Setup fade-in animations
  setupFadeInAnimations();

  // Ensure fade-in elements are visible after a short delay
  setTimeout(function() {
    document.querySelectorAll('.hero .fade-in').forEach(function(element) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    });
  }, 100);

  // Setup scroll event listeners
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      handlePageScroll();
      updateActiveNav();
    }, 50);
  }, { passive: true });
});
