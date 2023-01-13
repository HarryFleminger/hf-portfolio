// menu managment variables
const menuBar = document.querySelector('.fa-solid.fa-bars.fa-xl')
const menuX = document.querySelector('.fa-solid.fa-xmark.fa-2xl')
const mobileNav = document.querySelector('.navbar-mobile')
const mobileCover = document.querySelector('.mobile-cover')
// Project popups variables
const travelPlan = document.querySelector('#travel-plan')
const travelPlanContent = document.querySelector('#travel-plan-content')
const popUpClose = document.querySelector('.close-pop')
const eatMyWay = document.querySelector('#eat-my-way')
const eatMyWayContent = document.querySelector('#eat-my-way-content')
// Carousel variables
// var slides = document.querySelectorAll('.slide');
// var currentSlide = 0;

// menu managment JS
menuBar.addEventListener("click", (event) => {
  mobileNav.classList.add('show-navbar-mobile')
  mobileCover.classList.add('show-mobile-cover')
});
menuBar.addEventListener("mouseover", (event) => {
  menuBar.classList.add('fa-beat')
});
menuBar.addEventListener("mouseout", (event) => {
  menuBar.classList.remove('fa-beat')
});
menuX.addEventListener("click", (event) => {
  mobileNav.classList.remove('show-navbar-mobile')
  mobileCover.classList.remove('show-mobile-cover')
});
mobileCover.addEventListener("click", (event) => {
  mobileNav.classList.remove('show-navbar-mobile')
  mobileCover.classList.remove('show-mobile-cover')
  travelPlanContent.classList.remove('modal-content-show')
  eatMyWayContent.classList.remove('modal-content-show')
});
popUpClose.addEventListener("click", (event) => {
  mobileNav.classList.remove('show-navbar-mobile')
  mobileCover.classList.remove('show-mobile-cover')
  travelPlanContent.classList.remove('modal-content-show')
  eatMyWayContent.classList.remove('modal-content-show')
});

// Project popups JS
travelPlan.addEventListener("click", (event) => {
  travelPlanContent.classList.add('modal-content-show')
  mobileCover.classList.add('show-mobile-cover')
});
eatMyWay.addEventListener("click", (event) => {
  eatMyWayContent.classList.add('modal-content-show')
  mobileCover.classList.add('show-mobile-cover')
});

// Carousel JS
// setInterval(nextSlide, 5000);

// nextSlide()

// function nextSlide() {
//   goToSlide(currentSlide+1);
// }

// function prevSlide() {
//   goToSlide(currentSlide-1);
// }

// function goToSlide(n) {
//   slides[currentSlide].className = 'slide';
//   currentSlide = (n+slides.length)%slides.length;
//   slides[currentSlide].className = 'slide active';
// }

class Carousel {
  constructor(element) {
    this.slides = element.querySelectorAll('.slide');
    this.currentSlide = 0;
    setInterval(this.nextSlide.bind(this), 5000);
    this.nextSlide();
  }

  nextSlide() {
    this.goToSlide(this.currentSlide+1);
  }

  prevSlide() {
    this.goToSlide(this.currentSlide-1);
  }

  goToSlide(n) {
    this.slides[this.currentSlide].className = 'slide';
    this.currentSlide = (n+this.slides.length)%this.slides.length;
    this.slides[this.currentSlide].className = 'slide active';
  }
}

const carousel1 = new Carousel(document.getElementById('carousel1'));
const carousel2 = new Carousel(document.getElementById('carousel2'));
