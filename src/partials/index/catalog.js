import { doesTheQueryMatch } from "@/_utils"
import {
  Pagination,
  A11y
} from "swiper"

const slider = ".catalog-slider"
const options = {
  modules: [Pagination, A11y],
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".catalog-pagination",
    bulletElement: "button",
    bulletClass: "catalog-pagination__item",
    bulletActiveClass: "catalog-pagination__item--active",
    clickable: true
  },
  a11y: {
    paginationBulletMessage: "Перейти на слайд номер {{index}}"
  },
  breakpoints: {
    467: { slidesPerView: 1.5 },

    601: {
      slidesPerView: 1.8,
      centeredSlides: true
    },

    769: {
      slidesPerView: 2.5,
      centeredSlides: false
    },

    901: {
      slidesPerView: 3,
      centeredSlides: false
    }
  }
}

const mediaQuery = window.matchMedia("(max-width: 75em)")
const mediaQueryHandler = doesTheQueryMatch.bind(
  mediaQuery,
  slider,
  options
)

// Check in load

mediaQueryHandler()

// Add change event

mediaQuery.addEventListener("change", mediaQueryHandler)
