import { Product } from "@cmps/Product/product"

export class Filter {
  constructor({ form, database, container, loadMoreButton }) {
    this.form = form
    this.formElements = form.elements
    this.database = database
    this.container = container
    this.loadMoreButton = loadMoreButton
    this.types = [
      "extent",
      "geography",
      "acid",
      "method",
      "category",
      "kind-of-coffee"
    ]

    this.init()
  }

  init() {
    this.form.addEventListener("change", this.changeHandler)
  }

  changeHandler = () => {
    const elements = this.container.querySelectorAll(".product")

    if (elements.length) {
      elements.forEach((element) => element.remove())
    }

    this.database.forEach((product) => {
      const isSuitable = this.filter(product)

      if (!isSuitable) return

      const productNode = new Product(product).node

      this.container.insertBefore(
        productNode,
        this.loadMoreButton
      )
    })
  }

  filter(product) {
    return this.types.every((type) => {
      const productValue = product[type]
      const clientValue = this.formElements[type].value

      if (!clientValue) return true

      return Array.isArray(productValue)
        ? productValue.includes(clientValue)
        : `${productValue}` === clientValue
    })
  }
}
