import "focus-visible"
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

// Products load / render / loader

import { getProductsWithSales } from "./services/FirebaseService"
import { slide } from "./utils/slideMarkup"

new IntersectionObserver(async ([ entry ]) => {
  if (!entry.isIntersecting) return
  else if (document.querySelector(".product")) return

  const products = await getProductsWithSales({ count: 4 })

  products.forEach((product) => {
    salesSlider.appendSlide(slide(product.data()))
  })

  document.querySelector(".loader").style.display = "none"
}, { threshold: [0, 0.5] }).observe(document.querySelector(".sales-slider"))
