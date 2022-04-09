export class Counter {
  constructor(container) {
    this.counter = container.querySelector(".counter__display")
    this.decrementButton = container.querySelector(".counter__action--decrement")
    this.incrementButton = container.querySelector(".counter__action--increment")

    this.init()
  }

  init() {
    const actions = {
      "-": this.counter.stepDown.bind(this.counter),
      "+": this.counter.stepUp.bind(this.counter)
    }

    this.counter.addEventListener("input", this.setCurrentValue)

    ;[this.decrementButton, this.incrementButton].forEach(
      (button) => button.addEventListener("click", ({ target }) => {
        const action = target.value

        actions[action]()
        this.setCurrentValue()
      })
    )
  }

  setCurrentValue = () => {
    this.counter.setAttribute("value", this.counter.value)
  }
}
