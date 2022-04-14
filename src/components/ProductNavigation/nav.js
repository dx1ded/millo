const element = document.querySelector(".product-nav")
const tabs = [...element.querySelectorAll(".product-nav__item")]
const tabsHref = tabs.map((tab) => tab.getAttribute("href"))
const elementStuckedClassName = "product-nav--isSticky"
const tabActiveClassName = "product-nav__item--active"

new IntersectionObserver( 
  ([event]) => event.target.classList.toggle(
    elementStuckedClassName,
    event.intersectionRatio < 1
  ),
  { threshold: [1] }
).observe(element)

// Tabs Change

const options = {
  root: null,
  rootMargin: "-120px 0px 0px 0px",
  threshold: 0.3
}

const observer = new IntersectionObserver((entries) => {
  console.log(entries)

  entries.forEach((entry) => {
    const element = entry.target
    const activeTab = tabs.find((tab) => tab.hash === `#${element.id}`)

    if (entry.isIntersecting) {
      activeTab.classList.add(tabActiveClassName)
    } else if (!entry.isIntersecting) {
      activeTab.classList.remove(tabActiveClassName)
    }

  })
}, options)

tabsHref.forEach((href) => observer.observe(document.querySelector(href)))
