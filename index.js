const menuBar = document.querySelector('.fa-solid.fa-bars.fa-xl')
const menuX = document.querySelector('.fa-solid.fa-xmark.fa-2xl')
const mobileNav = document.querySelector('.navbar-mobile')
const mobileCover = document.querySelector('.mobile-cover')

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
});
