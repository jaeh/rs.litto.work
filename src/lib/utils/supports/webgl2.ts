// import { $ } from '../$.js'
// import { W } from '../W.js'

export const webgl2 = () => {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'))
  } catch (e) {
    return false
  }
}
