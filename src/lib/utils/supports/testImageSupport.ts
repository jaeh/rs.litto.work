// import { W } from '../W.js'

/*
 * test if this browser supports a certain image type.
 * the source is a base64 string with the corresponding mimetype
 */

export const testImageSupport = async (src: string) => {
  if (!window.createImageBitmap) {
    return false
  }

  /*
   * this fetch actually "fetches" a base64 image,
   * it will just take care of buffer conversion
   * and return an object with the blob() function.
   */
  const img = await window.fetch(src)
  const blob = await img.blob()

  try {
    const imageBitmap = await window.createImageBitmap(blob)

    /*
     * if height and width are not set
     * we can be sure that this image type is not supported.
     */
    if (!imageBitmap.height && !imageBitmap.width) {
      return false
    }

    return true
  } catch (e) {
    return false
  }
}
