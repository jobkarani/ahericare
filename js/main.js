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

// $(".carousel").owlCarousel({
//   margin: 20,
//   loop: true,
//   autoplay: true,
//   autoplayTimeout: 2000,
//   autoplayHoverPause: true,
//   responsive: {
//     0:{
//       items:1,
//       nav: false
//     },
//     600:{
//       items:2,
//       nav: false
//     },
//     1000:{
//       items:3,
//       nav: false
//     }
//   }
// });

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
  setTimeout(showSlides, 10000); 
}