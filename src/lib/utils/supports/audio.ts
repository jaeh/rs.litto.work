// import { $ } from '../$.js'

export const audio = () => {
  const audio = document.createElement('audio')

  return {
    A_MP3: audio.canPlayType('audio/mpeg') === 'maybe',
    A_OGG: audio.canPlayType('audio/ogg') === 'maybe',
    A_MP4: audio.canPlayType('audio/mp4') === 'maybe',
  }
}
