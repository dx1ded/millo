import osm from "osm"

const section = document.querySelector("section#shops")
const mapContainer = section.querySelector(".content__map")

const map = osm().position(
  50.49086958127457,
  30.406033669958415
).radius(0.008)

mapContainer.append(map.show())
