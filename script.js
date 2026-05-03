// <!-- =============================================
//  JAVASCRIPT
//  Three simple behaviors explained with comments
//  ============================================= -->
// ---- 1. NAV: Sticky background on scroll ----
// When you scroll past 60px, the nav gets a dark background.
// Without this, the transparent nav would be unreadable over body content.
const nav = document.getElementById("mainNav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    nav.classList.add("nav--scrolled"); // CSS handles the styling
  } else {
    nav.classList.remove("nav--scrolled");
  }
});

// ---- 2. NAV: Mobile hamburger menu toggle ----
// On small screens the links are hidden. Clicking the hamburger
// shows/hides them by adding the 'nav--open' class.
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("nav--open"); // toggle = add if missing, remove if present
});

// Close menu when a link is clicked
document.querySelectorAll(".nav__links a").forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("nav--open");
  });
});

// ---- 3. SCROLL REVEAL: Animate sections into view ----
// IntersectionObserver watches every .reveal element.
// When one enters the viewport, we add the 'revealed' class
// which triggers the CSS fade+slide-up animation.
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // stop watching once revealed
      }
    });
  },
  {
    threshold: 0.12, // triggers when 12% of the element is visible
  },
);

revealElements.forEach(function (el) {
  observer.observe(el);
});

// ---- 4. CONTACT FORM: Demo submit handler ----
// Right now this just shows a success message.
// When you add a Formspree action= to the form, this still works —
// Formspree handles the actual email sending.
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop the page from reloading

  // If you add action="https://formspree.io/f/YOUR_ID" to the form,
  // replace the line above with a real fetch() call — or let the
  // form submit naturally by removing e.preventDefault().

  // Show success message
  contactForm.style.display = "none";
  formSuccess.classList.add("active");
});
