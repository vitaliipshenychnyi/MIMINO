// функціонал слайдеру секції about-restaurant
var swiper = new Swiper('.slider__about', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopedSlides: 2,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 800,
  navigation: {
    nextEl: '.about__next.restaurant',
    prevEl: '.about__prev.restaurant',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

// функціонал слайдеру секції about-hotel
var swiper = new Swiper('.slider__about', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopedSlides: 2,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 800,
  navigation: {
    nextEl: '.about__next.hotel',
    prevEl: '.about__prev.hotel',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

// функціонал слайдеру секції about-kitchent сторінки RESTAURANT
var swiper = new Swiper('.slider__about', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopedSlides: 2,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 800,
  navigation: {
    nextEl: '.about__next.kitchen',
    prevEl: '.about__prev.kitchen',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

// функціонал слайдеру секції room-lux сторінки HOTEL
// var swiper = new Swiper('.js-swiper_room-lux', {
//   slidesPerView: 2,
//   spaceBetween: 25,
//   slidesPerGroup: 1,
//   loop: true,
//   loopedSlides: 2,
//   loopFillGroupWithBlank: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: true,
//   },
//   speed: 800,
//   navigation: {
//     nextEl: '.js-swiper4-button-next',
//     prevEl: '.js-swiper4-button-prev',
//   },
//   breakpoints: {
//     1024: {
//       spaceBetween: 40,
//     },
//   },
// });

// функціонал слайдеру секції room-2 сторінки HOTEL
// var swiper = new Swiper('.js-swiper_room-2', {
//   slidesPerView: 2,
//   spaceBetween: 25,
//   slidesPerGroup: 1,
//   loop: true,
//   loopedSlides: 2,
//   loopFillGroupWithBlank: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: true,
//   },
//   speed: 800,
//   navigation: {
//     nextEl: '.js-swiper5-button-next',
//     prevEl: '.js-swiper5-button-prev',
//   },
//   breakpoints: {
//     1024: {
//       spaceBetween: 40,
//     },
//   },
// });

// функціонал слайдеру сторінки ROOM
// var swiper = new Swiper('.swiper_room-hero', {
//   direction: 'horizontal',
//   slidesPerView: 1,
//   spaceBetween: 0,
//   slidesPerGroup: 1,
//   loop: true,
//   loopedSlides: 1,
//   loopFillGroupWithBlank: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 6000,
//     disableOnInteraction: false,
//   },
//   speed: 1000,
//   navigation: {
//     nextEl: '.swiper-button-next-room',
//     prevEl: '.swiper-button-prev-room',
//   },
// });

// функціонал слайдеру секції room-3 сторінки HOTEL
// var swiper = new Swiper('.js-swiper_room-3', {
//   slidesPerView: 2,
//   spaceBetween: 25,
//   slidesPerGroup: 1,
//   loop: true,
//   loopedSlides: 2,
//   loopFillGroupWithBlank: true,
//   grabCursor: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: true,
//   },
//   speed: 800,
//   navigation: {
//     nextEl: '.js-swiper7-button-next',
//     prevEl: '.js-swiper7-button-prev',
//   },
//   breakpoints: {
//     1024: {
//       spaceBetween: 40,
//     },
//   },
// });

// функціонал слайдеру секції detail-restaurant
var swiper = new Swiper('.slider__details', {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopedSlides: 12,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 800,
  navigation: {
    nextEl: '.details__next.restaurant',
    prevEl: '.details__prev.restaurant',
  },
  breakpoints: {
    1024: {
      spaceBetween: 34,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 87,
      slidesPerView: 3,
    },
  },
});

// функціонал слайдеру секції detail-hotel
var swiper = new Swiper('.slider__details', {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopedSlides: 12,
  loopFillGroupWithBlank: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 800,
  navigation: {
    nextEl: '.details__next.hotel',
    prevEl: '.details__prev.hotel',
  },
  breakpoints: {
    1024: {
      spaceBetween: 34,
      slidesPerView: 3,
    },
    1280: {
      spaceBetween: 87,
      slidesPerView: 3,
    },
  },
});
