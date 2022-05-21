import { doesTheQueryMatch } from "@/_utils"

const slider = ".offers-slider"
const options = {
  slidesPerView: 1.3,
  spaceBetween: 20,
  breakpoints: {
    501: {
      slidesPerView: 1.7
    },

    769: {
      slidesPerView: 3.2
    }
  }
}

const mediaQuery = window.matchMedia("(max-width: 67.5em)")
const mediaQueryHandler = doesTheQueryMatch.bind(
  mediaQuery,
  slider,
  options
)

// Check in load

mediaQueryHandler()

// Add change event

mediaQuery.addEventListener("change", mediaQueryHandler)
