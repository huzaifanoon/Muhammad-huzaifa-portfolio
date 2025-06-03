// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Typing Animation
const typingText = document.querySelector(".typing-text")
const roles = [
  "Programmer",
  "Event Manager",
  "Marketing Specialist",
  "WordPress Developer",
  "Tech Entrepreneur",
  "Community Builder",
]

let roleIndex = 0
let charIndex = 0
let isDeleting = false

function typeRole() {
  const currentRole = roles[roleIndex]

  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex - 1)
    charIndex--
  } else {
    typingText.textContent = currentRole.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000 // Pause at end
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
    typeSpeed = 500 // Pause before next word
  }

  setTimeout(typeRole, typeSpeed)
}

// Start typing animation
typeRole()

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(10, 10, 10, 0.98)"
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.95)"
  }
})

// Skill Bar Animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width")
    bar.style.width = width
  })
}

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")

      // Animate skill bars when skills section is visible
      if (entry.target.classList.contains("skills")) {
        setTimeout(animateSkillBars, 500)
      }

      // Animate stats counter
      if (entry.target.classList.contains("stats")) {
        animateCounters()
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("animate-on-scroll")
  observer.observe(section)
})

// Counter Animation
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent.replace(/[^\d]/g, ""))
    const increment = target / 100
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }

      // Format the number
      let displayValue = Math.floor(current)
      if (counter.textContent.includes("M")) {
        displayValue = (displayValue / 1000000).toFixed(1) + "M"
      } else if (counter.textContent.includes("K")) {
        displayValue = (displayValue / 1000).toFixed(1) + "K"
      } else if (counter.textContent.includes("+")) {
        displayValue = displayValue + "+"
      }

      counter.textContent = displayValue
    }, 20)
  })
}

// Contact Form
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address")
    return
  }

  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! I'll get back to you soon.")
    contactForm.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const rate = scrolled * -0.5

  if (hero) {
    hero.style.transform = `translateY(${rate}px)`
  }
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Animate hero elements
  setTimeout(() => {
    document.querySelector(".hero-title").classList.add("fade-in-up")
  }, 300)

  setTimeout(() => {
    document.querySelector(".typing-container").classList.add("fade-in-up")
  }, 600)

  setTimeout(() => {
    document.querySelector(".hero-description").classList.add("fade-in-up")
  }, 900)

  setTimeout(() => {
    document.querySelector(".hero-buttons").classList.add("fade-in-up")
  }, 1200)
})

// Dynamic year in footer
const currentYear = new Date().getFullYear()
document.querySelector(".footer-content p").textContent = `© ${currentYear} Muhammad Huzaifa. All rights reserved.`

// Add hover effects to cards
document.querySelectorAll(".education-card, .skill-category").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
    this.style.boxShadow = "0 20px 40px rgba(0, 212, 255, 0.2)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
    this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)"
  })
})

// Floating animation for profile icons
document.querySelectorAll(".icon-item").forEach((icon, index) => {
  icon.style.animationDelay = `${index * 0.5}s`
})

// Add active nav link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})
