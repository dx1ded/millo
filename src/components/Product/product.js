import { productCard } from "@/markup/product"

export class Product {
  constructor(data) {
    this.data = data
  }

  get node() {
    const markup = productCard(this.data)
    const node = new DOMParser()
      .parseFromString(markup, "text/html")
      .body.childNodes[0]

    return node
  }
}
