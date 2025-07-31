// Enable ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Fade-in hero content
gsap.from(".hero-title", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
});

gsap.from(".hero-subtitle", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 1,
  ease: "power2.out",
});

// Animate About Section on scroll
gsap.from(".about-section .container", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
});

// Animate Timeline Items one by one
gsap.utils.toArray(".timeline-item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
    },
    opacity: 0,
    x: i % 2 === 0 ? -100 : 100,
    duration: 0.8,
    ease: "power2.out",
  });
});

// Animate Projects
gsap.from(".projects-grid", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 80%",
  },
  opacity: 0,
  scale: 0.95,
  duration: 1,
  ease: "power2.out",
});

// Contact Form bounce-in
gsap.from("form", {
  scrollTrigger: {
    trigger: "form",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "back.out(1.7)",
});
