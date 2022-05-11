import Swiper, {
  Pagination,
  EffectFade,
  Autoplay,
  A11y
} from "swiper"

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
