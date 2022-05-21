import Swiper, {
  Navigation,
  Manipulation
} from "swiper"

const salesSlider = new Swiper(".sales-slider", {
  modules: [Navigation, Manipulation],
  slidesPerView: 1.7,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".sales-nav--next",
    prevEl: ".sales-nav--prev"
  },
  breakpoints: {
    900: {
      slidesPerView: 3,
      spaceBetween: 15
    },

    1350: { slidesPerView: 2 },

    1500: { slidesPerView: 3 }
  }
})

// Products load / render / loader

// import { getProductsWithSales } from "@/services/FirebaseService"
// import { productCard } from "@/markup/product"

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
