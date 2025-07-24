gsap.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".hero-subtitle", {
  y: 30,
  opacity: 0,
  delay: 0.5,
  duration: 1.2,
  ease: "power3.out"
});

gsap.from(".about-section h2", {
  scrollTrigger: ".about-section",
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power2.out"
});

gsap.from(".timeline-item", {
  scrollTrigger: ".timeline",
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2
});
gsap.from(".project-card", {
  scrollTrigger: ".projects-grid",
  y: 60,
  opacity: 0,
  stagger: 0.2,
  duration: 1.2,
  ease: "power2.out"
});
gsap.from("form input, form textarea, form button", {
  scrollTrigger: ".contact-section",
  y: 40,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  ease: "power2.out"
});
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
