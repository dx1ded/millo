export class Accordion {
  constructor(accordion) {
    this.accordion = accordion
    this.accordionItems = accordion.querySelectorAll(".accordion-item")
    this.accordionItemActiveClassName = "accordion-item--active"

    this.init()
  }

  init() {
    this.accordionItems.forEach(
      (item) => item.addEventListener(
        "click",
        this.clickHandler.bind(this, item)
      )
    )
  }

  clickHandler(item) {
    this.removeActiveItem()

    const itemContent = item.querySelector(".accordion-item__content")

    item.classList.add(this.accordionItemActiveClassName)
    itemContent.style.maxHeight = `${itemContent.scrollHeight / 16}rem`
  }

  removeActiveItem() {
    const activeItem = this.accordion.querySelector(".accordion-item--active")

    if (!activeItem) return

    const activeItemContent = activeItem.querySelector(".accordion-item__content")

    activeItem.classList.remove(this.accordionItemActiveClassName)
    activeItemContent.style.maxHeight = "0"
  }
}
