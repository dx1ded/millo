import "focus-visible"
import "@cmps/Burger/burger"
import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Grid,
  A11y,
  Manipulation
} from "swiper"

// Hero Slider

new Swiper(".hero-slider", {
  modules: [Pagination, EffectFade, Autoplay, A11y],
  effect: "fade",
  fadeEffect: { crossFade: true },
  autoplay: { delay: 5000 },
  speed: 1000,
  pagination: {
    el: ".hero-pagination",
    bulletElement: "button",
    bulletClass: "hero-pagination__item",
    bulletActiveClass: "hero-pagination__item--active",
    clickable: true
  },
  a11y: {
    paginationBulletMessage: "Перейти на слайд номер {{index}}"
  }
})

// Sales Slider

const salesSlider = new Swiper(".sales-slider", {
  modules: [Navigation, Manipulation],
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".sales-nav--next",
    prevEl: ".sales-nav--prev"
  }
})

// Social Slider

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

// ===============================================
// + Catalog Slider
// ===============================================

const mediaQuery = window.matchMedia("(max-width: 75em)")

let catalogSlider

function doesTheQueryMatch() {
  if (mediaQuery.matches) {
    catalogSlider = new Swiper(".catalog-slider", {
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: true
        },

        467: { slidesPerView: 1.5 },

        601: { slidesPerView: 1.8 },

        769: {
          slidesPerView: 2.5,
          centeredSlides: false
        },

        900: { slidesPerView: 3 }
      }
    })
  } else if (catalogSlider) {
    catalogSlider.destroy()
  }
}

// Check in load

doesTheQueryMatch()

// Add change event

mediaQuery.addEventListener("change", doesTheQueryMatch)

// ===============================================


// Products load / render / loader

// import { getProductsWithSales } from "./services/FirebaseService"
// import { productCard } from "./utils/productMarkup"

// const options = {
//   root: null,
//   threshold: [0, 0.5]
// }

// const observer = new IntersectionObserver(async ([ entry ]) => {
//   if (!entry.isIntersecting || document.querySelector(".product")) return

//   const products = await getProductsWithSales({ count: 4 })

//   products.forEach((product) => {
//     salesSlider.appendSlide(productCard(product.data()))
//   })

//   document.querySelector(".loader").style.display = "none"
// }, options)

// observer.observe(document.querySelector(".sales-slider"))
