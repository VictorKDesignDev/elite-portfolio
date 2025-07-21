// Dark mode toggle (premium version)  
const themeToggle = document.createElement('div');  
themeToggle.innerHTML = '🌓';  
themeToggle.style.position = 'fixed';  
themeToggle.style.top = '20px';  
themeToggle.style.right = '20px';  
themeToggle.style.cursor = 'pointer';  
document.body.appendChild(themeToggle);  
// In /js/main.js  
gsap.registerPlugin(ScrollTrigger);  
gsap.utils.toArray(".project-card").forEach(card => {  
  gsap.from(card, {  
    scrollTrigger: {  
      trigger: card,  
      start: "top 80%",  
      toggleActions: "play none none reset"  
    },  
    opacity: 0,  
    y: 30,  
    duration: 1.3  
  });  
});  