export class ScrollTabs {
  constructor() {
    this.container = document.querySelector(".scroll-tabs")
    this.tabs = Array.from(this.container.querySelectorAll(".tabs__item"))
    this.hrefs = this.tabs.map((tab) => tab.getAttribute("href"))

    this.elementStuckedClassName = "scroll-tabs--stucked"
    this.tabActiveClassName = "tabs__item--active"

    this.init()
  }

  init() {
    this.stuckHandler()
    this.tabsHandler()
  }

  stuckHandler() {
    new IntersectionObserver(
      ([ event ]) => event.target.classList.toggle(
        this.elementStuckedClassName,
        event.intersectionRatio < 1
      ),
      { threshold: 1 }
    ).observe(this.container)
  }

  tabsHandler() {
    const options = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = `#${entry.target.id}`
        const targetTab = this.tabs.find(({ hash }) => hash === id)
    
        if (entry.isIntersecting) {
          targetTab.classList.add(this.tabActiveClassName)
        } else if (!entry.isIntersecting) {
          targetTab.classList.remove(this.tabActiveClassName)
        }
      })
    }, options)

    this.hrefs.forEach(
      (href) => observer.observe(document.querySelector(href)
    ))
  }
}

export class Tabs {
  constructor(tabsContainer) {
    this.tabs = tabsContainer.querySelectorAll(".tabs__item")
    this.sections = [...this.tabs].map((tab) => {
      const href = tab.getAttribute("href")

      return document.querySelector(href)
    })

    this.tabActiveClassName = "tabs__item--active"

    this.init()
  }

  init() {
    this.tabs.forEach((tab) => {
      const targetSection = document.querySelector(tab.getAttribute("href"))

      tab.addEventListener("click", this.clickHandler.bind(this, targetSection))  
    })
  }

  clickHandler = (section, event) => {
    event.preventDefault()

    // Set all tabs / sections unactive

    this.tabs.forEach((tab) => tab.classList.remove(this.tabActiveClassName))
    this.sections.forEach((section) => section.removeAttribute("data-active"))

    // Set current tab / section active

    event.target.classList.add(this.tabActiveClassName)
    section.setAttribute("data-active", "true")
  }
}
