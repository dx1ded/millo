import "focus-visible"
import osm from "osm"

import { Tabs } from "@cmps/Tabs/tabs"

const sections = document.querySelectorAll("section[id]")

sections.forEach((section) => {
  const mapContainer = section.querySelector(".content__map")
  const map = osm().position(50.49086958127457, 30.406033669958415).radius(0.008);

  mapContainer.appendChild(map.show())
})

new Tabs(document.querySelector(".tabs__container"))
