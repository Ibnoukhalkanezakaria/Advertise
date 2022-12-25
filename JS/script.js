// Nav Toggle
let navToggle = document.querySelector(".nav-toggle");
let navLinks = document.querySelector(".nav-links");

navToggle.onclick = function () {
  navToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
};
