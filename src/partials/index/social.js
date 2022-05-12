import Swiper, {
  Grid,
  Navigation
} from "swiper"

new Swiper(".social-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  modules: [Grid, Navigation],
  grid: {
    rows: 1,
    fill: "row"
  },
  navigation: {
    prevEl: ".social-slider__nav--prev",
    nextEl: ".social-slider__nav--next"
  },
  breakpoints: {
    471: {
      slidesPerView: 2,
      grid: { rows: 1 }
    },

    769: {
      slidesPerView: 1.3,
      grid: { rows: 2 }
    },

    1061: {
      slidesPerView: 2.1,
      grid: { rows: 2 }
    },

    1351: {
      slidesPerView: 2.8,
      grid: { rows: 2 }
    }
  }
})
