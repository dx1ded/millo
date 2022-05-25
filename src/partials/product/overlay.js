import { getProduct } from "@/services/FirebaseService"
import { Counter } from "@cmps/Counter/counter"
import { product } from "@/markup/product"

const loader = document.querySelector(".loader")

const url = new URL(document.location)
const id = url.searchParams.get("id")

getProduct({ id })
  .then((data) => {
    const productData = data.docs[0].data()
    const productMarkup = product(productData)

    loader.remove()

    document.querySelector(".overlay__container").insertAdjacentHTML(
      "afterbegin",
      productMarkup
    )

    new Counter(document.querySelector(".counter"))
  })
