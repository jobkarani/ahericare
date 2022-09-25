// humberger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menus");
const navLink = document.querySelectorAll(".nav-links");

const mobileMenu = () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
}

const closeMenu = () => {
  hamburger.classList.remove("active")
  navMenu.classList.remove("active")
}

hamburger.addEventListener("click" , mobileMenu)
navLink.forEach((l) => l.addEventListener("click",closeMenu))

// slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}

// testimonials

let carouselIndex = 1;
showCarousels(carouselIndex);

function plusSlides(n) {
  showCarousels(carouselIndex += n);
}

function currentSlide(n) {
  showCarousels(carouselIndex = n);
}

function showCarousels(n) {
  let i;
  let slides = document.getElementsByClassName("card");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {carouselIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[carouselIndex-1].style.display = "block";  
  dots[carouselIndex-1].className += " active";
}

//scroll button 

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
