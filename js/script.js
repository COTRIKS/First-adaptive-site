$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    speed: 700,
    easing: "easy",
    autoplay: true,
    autoplaySpeed: 2500,
    touchThreshold: 10
  });
});

let burgerOpen = document.querySelector('.open');
let burgerClose = document.querySelector('.close');
let burgerMenu = document.querySelector('.burger-item');

burgerOpen.onclick = function() {
  burgerMenu.style.transform = 'translateX(0)';
};

burgerClose.onclick = function() {
  burgerMenu.style.transform = 'translateX(100%)';
};

window.onscroll = function() {
  let burger = document.querySelector('.burger-menu');

  burger.classList.toggle('burger-scroll', window.scrollY > 0);
};