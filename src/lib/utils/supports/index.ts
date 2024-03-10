import { webp } from './webp.js'
import { xr } from './xr.js'
import { webgl } from './webgl.js'
import { webgl2 } from './webgl2.js'
import { avif } from './avif.js'
import { audio } from './audio.js'

// import { video } from './video.js'

export const supports = async () => {
  const [XR, WEBP, AVIF, WEBGL, WEBGL2, AUDIO] = await Promise.all([
    xr(),
    webp(),
    avif(),
    webgl(),
    webgl2(),
    audio(),
    // ...video(),
  ])

  return {
    XR,
    WEBP,
    AVIF,
    WEBGL,
    WEBGL2,
    ...AUDIO,
  }
}
