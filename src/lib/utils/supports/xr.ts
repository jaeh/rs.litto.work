// import { W } from '../W.js'

export const xr = async () => {
  const { xr } = window.navigator

  if (!xr) {
    return false
  }

  try {
    const supported = await xr.isSessionSupported('immersive-ar')
    return supported
  } catch (e) {
    // we do not care, fallback is built in.
    // console.error('xrSupported error', e)
    return false
  }
}
