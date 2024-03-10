import { browser } from '$app/environment'
import { shrinkMap, squeezeMap } from '$lib/stores'

/**
 *
 * @returns {void}
 */
export const mapHandler = () => {
  if (browser) {
    if (window.matchMedia('(orientation: landscape)').matches) {
      squeezeMap.set(true)
      shrinkMap.set(false)
      // console.log('landscape')
      return
    } else if (window.matchMedia('(orientation: portrait)').matches) {
      squeezeMap.set(false)
      shrinkMap.set(true)
      // console.log('portrait')
      return
    }
  }
}
