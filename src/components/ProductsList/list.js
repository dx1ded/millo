import { getProducts } from "@/services/FirebaseService"
import { productCard, productCardWide } from "@/markup/product"

const section = document.querySelector(".products")
const container = section.querySelector(".products__wrapper")
const loader = section.querySelector(".loader")
const loadMoreButton = section.querySelector("#more-btn")

const TYPE = section.dataset.type
const OFFSET = 12

let step = 0

const options = {
  root: null,
  threshold: 0.5
}

async function loadProducts() {
  const product = await getProducts({
    type: TYPE,
    offset: OFFSET * step
  })

  const docs = product.docs

  if (areMoreProducts(product.size)) {
    docs.pop()
  }

  toggleLoader()
  renderProducts(docs)

  step++
}

function renderProducts(products) {
  products.forEach((product) => {
    const data = product.data()
    const productMarkup = data.type
      ? productCardWide(data)
      : productCard(data)
    
    container.insertAdjacentHTML("beforeend", productMarkup)
  })
}

function areMoreProducts(size) {
  if (size !== 13) {
    loadMoreButton.remove()

    return false
  }

  return true
}

function toggleLoader() {
  if (loader) {
    loader.remove()
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
