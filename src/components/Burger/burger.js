const burger = document.querySelector(".burger")
const burgerOpen = document.querySelector("#burger-open")
const burgerClose = document.querySelector("#burger-close")

const burgerActiveClassName = "burger--active"

function toggleBurger() {
  burger.classList.toggle(burgerActiveClassName)
  document.body.classList.toggle("scroll-disabled")
}

[burgerOpen, burgerClose].forEach(
  (button) => button.addEventListener("click", toggleBurger)
)
