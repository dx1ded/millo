import Swiper from "swiper"

export function doesTheQueryMatch(slider, options) {
  if (this.matches) {
    this.sliderInstance = new Swiper(slider, options)
  } else if (this.sliderInstance) {
    this.sliderInstance.destroy()
  }
}
