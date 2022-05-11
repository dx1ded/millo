import { Navigation } from "swiper"
import { doesTheQueryMatch } from "@/_utils";

const slider = ".news-slider"
const options = {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    prevEl: ".news-navigation__item--prev",
    nextEl: ".news-navigation__item--next"
  }
}

const mediaQuery = window.matchMedia("(max-width: 48em)")
const mediaQueryHandler = doesTheQueryMatch.bind(
  mediaQuery,
  slider,
  options
)

// Check in load

mediaQueryHandler()

// Add change event

mediaQuery.addEventListener("change", mediaQueryHandler)
