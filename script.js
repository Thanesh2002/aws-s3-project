// Smooth scroll highlight active section
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 100;

  links.forEach(link => {
    let section = document.querySelector(link.getAttribute("href"));

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.style.color = "#63b3ed";
    } else {
      link.style.color = "#a0aec0";
    }
  });
});

// Button animation effect
const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});

// Simple console message
console.log("🚀 AWS S3 Website Loaded Successfully!");

// Navbar shadow on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
