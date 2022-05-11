import Swiper, {
  Grid,
  Navigation
} from "swiper"

new Swiper(".social-slider", {
  slidesPerView: 2.8,
  spaceBetween: 20,
  modules: [Grid, Navigation],
  grid: {
    rows: 2,
    fill: "row"
  },
  navigation: {
    prevEl: ".social-slider__nav--prev",
    nextEl: ".social-slider__nav--next"
  }
})
