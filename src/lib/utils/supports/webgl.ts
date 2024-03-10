// import { $ } from '../$.js'
// import { W } from '../W.js'

export const webgl = () => {
  try {
    const canvas = document.createElement('canvas')

    const ctxs = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d']

    return window.WebGLRenderingContext && ctxs.some(ctx => canvas.getContext(ctx))
  } catch (e) {
    return false
  }
}
