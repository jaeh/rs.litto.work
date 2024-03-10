import { testImageSupport } from './testImageSupport.js'

// test if this browser can load webp images
export const webp = () => {
  const src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAUAmJaQAA3AA/vzA8AA='
  return testImageSupport(src)
}
