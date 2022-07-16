// swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


const mySwiper_thumb = new Swiper('.work_swiper .swiper-thumb', {
  slidesPerView: 5,
  spaceBetween: 8,
  grabCursor: true,
  scrollbar: {
    el: '.work_swiper .swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 7,
    },
  },
});

const mySwiper_main = new Swiper('.work_swiper .swiper-main', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 500,
  navigation: {
    nextEl: '.work_swiper .swiper-button-next',
    prevEl: '.work_swiper .swiper-button-prev',
  },
  thumbs: {
    swiper: mySwiper_thumb,
  },
});