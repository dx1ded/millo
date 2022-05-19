import { doesTheQueryMatch } from "@/_utils"

const slider = ".news-tags"
const options = {
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    376: {
      slidesPerView: 2.2
    }
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
