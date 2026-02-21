// ==================== TYPING EFFECT ====================
const typingText = document.querySelector('.typing-text');
const phrases = [
  'Frontend Developer',
  'ML Enthusiast',
  'Python Developer',
  'Problem Solver',
  'Creative Coder'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }
  
  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    typingSpeed = 2000;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }
  
  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 1000);
});

// ==================== NAVBAR SCROLL EFFECT ====================
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Update active nav link
  updateActiveNavLink();
});

// ==================== MOBILE MENU ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ==================== SMOOTH SCROLLING ====================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== ACTIVE NAV LINK ====================
function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section, .hero');
  const scrollPos = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// ==================== SCROLL REVEAL ANIMATION ====================
const revealElements = document.querySelectorAll('.glass-card, .skill-category, .project-card, .timeline-item, .contact-content');

function revealOnScroll() {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.classList.add('reveal', 'active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ==================== SKILL PROGRESS ANIMATION ====================
const skillBars = document.querySelectorAll('.skill-progress');
let skillsAnimated = false;

function animateSkills() {
  const skillsSection = document.querySelector('#skills');
  const skillsSectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (skillsSectionTop < windowHeight - 200 && !skillsAnimated) {
    skillBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress');
      bar.style.width = progress + '%';
    });
    skillsAnimated = true;
  }
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ==================== CONTACT FORM HANDLING ====================
const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formMessage = document.getElementById('formMessage');
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  
  // Get form values
  const formData = {
    name: contactForm.querySelector('input[name="name"]').value,
    email: contactForm.querySelector('input[name="email"]').value,
    subject: contactForm.querySelector('input[name="subject"]').value,
    message: contactForm.querySelector('textarea[name="message"]').value
  };
  
  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
  
  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      formMessage.innerHTML = '<p style="color: #22d3ee;">✓ Message sent successfully!</p>';
      contactForm.reset();
    } else {
      formMessage.innerHTML = '<p style="color: #ef4444;">✗ Failed to send message. Please try again.</p>';
    }
  } catch (error) {
    formMessage.innerHTML = '<p style="color: #ef4444;">✗ An error occurred. Please try again.</p>';
  } finally {
    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
    
    // Clear message after 5 seconds
    setTimeout(() => {
      formMessage.innerHTML = '';
    }, 5000);
  }
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// ==================== CURSOR GLOW EFFECT ====================
document.addEventListener('mousemove', (e) => {
  const glowEffect = document.querySelector('.glow-effect');
  
  if (glowEffect) {
    const rect = glowEffect.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    glowEffect.style.transform = `translate(calc(-50% + ${x * 0.02}px), calc(-50% + ${y * 0.02}px))`;
  }
});

// ==================== INITIALIZE ANIMATIONS ====================
document.addEventListener('DOMContentLoaded', () => {
  // Add reveal class to elements
  revealElements.forEach(element => {
    element.classList.add('reveal');
  });
  
  // Trigger initial reveal check
  setTimeout(() => {
    revealOnScroll();
    animateSkills();
  }, 100);
});

// ==================== PERFORMANCE OPTIMIZATION ====================
let ticking = false;

function requestTick(callback) {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
    ticking = true;
  }
}

// Optimize scroll events
window.addEventListener('scroll', () => {
  requestTick(() => {
    updateActiveNavLink();
    revealOnScroll();
    animateSkills();
  });
});
