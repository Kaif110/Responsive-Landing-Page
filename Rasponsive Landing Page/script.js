const navbar = document.getElementById("navbar")
window.addEventListener("scroll", ()=>{
  navbar.classList.toggle("scrolled", window.scrollY > 50)
});

const menuBtn = document.getElementById("menuBtn")
const navLinks = document.getElementById("navLinks")
menuBtn.addEventListener("click", ()=>{
  navLinks.classList.toggle("active")
});