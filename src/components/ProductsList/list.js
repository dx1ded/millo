import { getProducts } from "@/services/FirebaseService"
import { productCard } from "@/markup/product"

const section = document.querySelector(".products")
const container = section.querySelector(".products__wrapper")
const loadMoreButton = section.querySelector("#more-btn")

const TYPE = section.dataset.type
const OFFSET = 12

let step = 0

const options = {
  root: null,
  threshold: 0.5
}

async function loadProducts() {
  const products = await getProducts({
    type: TYPE,
    offset: OFFSET * step
  })

  renderProducts(products)
  areMoreProducts(products.size)

  step++
}

function renderProducts(products) {
  products.forEach((product) => {
    const data = product.data()
    const productMarkup = productCard(data)
    
    container.insertAdjacentHTML("beforeend", productMarkup)
  })
}

function areMoreProducts(size) {
  if (size !== OFFSET) {
    loadMoreButton.remove()
  }
}

// Load products only if user's viewport is in the section

const observer = new IntersectionObserver(async ([entry]) => {
  if (!entry.isIntersecting || document.querySelector(".product")) return

  loadProducts()
}, options)

observer.observe(section)

// Handler to load more products on click

loadMoreButton.addEventListener("click", loadProducts)
