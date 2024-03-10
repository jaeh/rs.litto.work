// import { browsersniff } from '../browsersniff.js'
import { testImageSupport } from './testImageSupport'

// test if this browser can load webp images
export const avif = () => {
  // const { firefox } = browsersniff(window.navigator.userAgent)
  /* firefox seems to support avif, but errors when assigning them as a texture */
  // if (firefox) {
  //   return false
  // }

  const src =
    'data:image/avif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAADElEQVQI12Pg4eEBAABMACV5R6hLAAAAAElFTkSuQmCC'
  return testImageSupport(src)
}
