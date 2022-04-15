const element = document.querySelector(".tabs")
const tabs = Array.from(element.querySelectorAll(".tabs__item"))
const tabsHref = tabs.map((tab) => tab.getAttribute("href"))
const elementStuckedClassName = "tabs--stucked"
const tabActiveClassName = "tabs__item--active"

// <stuck> event handler

new IntersectionObserver( 
  ([event]) => event.target.classList.toggle(
    elementStuckedClassName,
    event.intersectionRatio < 1
  ),
  { threshold: [1] }
).observe(element)

// Tabs Condition Change

const options = {
  root: null,
  rootMargin: "-40% 0px -60% 0px",
  threshold: 0
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = `#${entry.target.id}`
    const targetTab = tabs.find(({ hash }) => hash === id)

    if (entry.isIntersecting) {
      targetTab.classList.add(tabActiveClassName)
    } else if (!entry.isIntersecting) {
      targetTab.classList.remove(tabActiveClassName)
    }
  })
}, options)

tabsHref.forEach((href) => observer.observe(document.querySelector(href)))
