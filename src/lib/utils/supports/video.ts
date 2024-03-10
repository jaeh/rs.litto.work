// import { $ } from '../$.js'

export const video = () => {
  const vid = document.createElement('video')

  return {
    V_WEBM: vid.canPlayType('video/webm') === 'maybe',
    V_MP4: vid.canPlayType('video/mp4') === 'maybe',
  }
}
