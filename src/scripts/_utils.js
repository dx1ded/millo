import Swiper from "swiper"

let sliderInstance

export function doesTheQueryMatch(slider, options) {
  if (this.matches) {
    sliderInstance = new Swiper(slider, options)
  } else if (sliderInstance) {
    sliderInstance.destroy()
  }
}
