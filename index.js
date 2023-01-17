// menu managment variables
const menuBar = document.querySelector('.fa-solid.fa-bars.fa-xl')
const menuX = document.querySelector('.fa-solid.fa-xmark.fa-2xl')
const mobileNav = document.querySelector('.navbar-mobile')
const mobileCover = document.querySelector('.mobile-cover')
// Project popups variables
const travelPlan = document.querySelector('#travel-plan')
const travelPlanContent = document.querySelector('#travel-plan-content')
const popUpClose = document.querySelectorAll('.close-pop')
const eatMyWay = document.querySelector('#eat-my-way')
const eatMyWayContent = document.querySelector('#eat-my-way-content')
const gibsonsBakery = document.querySelector('#gibsons-bakery')
const gibsonsBakeryContent = document.querySelector('#gibsons-bakery-content')
const sellebrity = document.querySelector('#sellebrity')
const sellebrityContent = document.querySelector('#sellebrity-content')
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
  gibsonsBakeryContent.classList.remove('modal-content-show')
  sellebrityContent.classList.remove('modal-content-show')
  carousel1.goToSlide(0);
  carousel1.stopSlideTransition()
  carousel2.goToSlide(0);
  carousel2.stopSlideTransition()
  carousel3.goToSlide(0);
  carousel3.stopSlideTransition()
  carousel4.goToSlide(0);
  carousel4.stopSlideTransition()
});

for (let i = 0; i < popUpClose.length; i++) {
  popUpClose[i].addEventListener("click", (event) => {
    mobileNav.classList.remove('show-navbar-mobile')
    mobileCover.classList.remove('show-mobile-cover')
    travelPlanContent.classList.remove('modal-content-show')
    eatMyWayContent.classList.remove('modal-content-show')
  });
}

class Carousel {
  constructor(element) {
    this.slides = element.querySelectorAll('.slide');
    this.currentSlide = 0;
    this.intervalId = setInterval(this.nextSlide.bind(this), 5000);
    this.goToSlide(0);
    this.stopSlideTransition();
  }

  nextSlide() {
    this.stopSlideTransition()
    this.intervalId = setInterval(this.nextSlide.bind(this), 5000);
    this.goToSlide(this.currentSlide+1);
  }

  stopSlideTransition() {
    clearInterval(this.intervalId);
  }

  prevSlide() {
    this.stopSlideTransition()
    this.intervalId = setInterval(this.nextSlide.bind(this), 5000);
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
const carousel3 = new Carousel(document.getElementById('carousel3'));
const carousel4 = new Carousel(document.getElementById('carousel4'));
// Project popups JS
travelPlan.addEventListener("click", (event) => {
  carousel1.stopSlideTransition()
  travelPlanContent.classList.add('modal-content-show')
  mobileCover.classList.add('show-mobile-cover')
});
eatMyWay.addEventListener("click", (event) => {
  carousel2.stopSlideTransition()
  eatMyWayContent.classList.add('modal-content-show')
  mobileCover.classList.add('show-mobile-cover')
});
gibsonsBakery.addEventListener("click", (event) => {
  carousel3.stopSlideTransition()
  gibsonsBakeryContent.classList.add('modal-content-show')
  mobileCover.classList.add('show-mobile-cover')
});
sellebrity.addEventListener("click", (event) => {
  carousel4.stopSlideTransition()
  sellebrityContent.classList.add('modal-content-show')
  mobileCover.classList.add('show-mobile-cover')
});
