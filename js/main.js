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

$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0:{
      items:1,
      nav: false
    },
    600:{
      items:2,
      nav: false
    },
    1000:{
      items:3,
      nav: false
    }
  }
});

const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}