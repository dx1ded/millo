import { getProducts } from "@/services/FirebaseService"
import { Filter } from "@cmps/Filter/filter"
import { Product } from "@cmps/Product/product"

const section = document.querySelector(".products")
const container = section.querySelector(".container")
const loadMoreButton = section.querySelector("#more-btn")

const TYPE = section.dataset.type
const OFFSET = 12

let step = 0

const database = []
const options = {
  root: null,
  threshold: 0.5
}

// Form

const form = document.querySelector(".filter-form")
const filter = new Filter({
  form,
  database,
  container,
  loadMoreButton
})

async function loadProducts() {
  const products = await getProducts({
    type: TYPE,
    offset: OFFSET * step
  })

  renderProducts(products)
  // areMoreProducts(products.size)

  step++
}

function renderProducts(products) {
  products.forEach((product) => {
    const data = product.data()
    const isSuitable = filter.filter(data)

    if (!isSuitable) return

    const productNode = new Product(data).node
    
    container.insertBefore(
      productNode,
      loadMoreButton
    )

    // Push product to <local database>

    database.push(data)
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
