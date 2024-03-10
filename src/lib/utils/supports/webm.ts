// import { W } from '../W.js'
// import { $ } from '../$.js'

export const webm = () =>
  new Promise(resolve => {
    const vid = document.createElement('video')
    vid.autoplay = false
    vid.loop = false
    vid.style.display = 'none'

    const done = (condition: boolean) => {
      vid.parentNode?.removeChild(vid)

      resolve(condition)
    }

    vid.addEventListener(
      'loadeddata',
      () => {
        vid.parentNode?.removeChild(vid)

        // Create a canvas element, this is what user sees.
        const canvas = document.createElement('canvas')

        //If we don't support the canvas, we definitely don't support webm alpha video.
        if (!(canvas.getContext && canvas.getContext('2d'))) {
          resolve(false)
          return
        }

        // Get the drawing context for canvas.
        const ctx = canvas.getContext('2d')

        if (!ctx) {
          resolve(false)
          return
        }

        // Draw the current frame of video onto canvas.
        ctx.drawImage(vid, 0, 0)
        const imgData = ctx.getImageData(0, 0, 1, 1).data
        const canDisplay =
          imgData[0] === 210 && imgData[1] === 133 && imgData[2] === 135 && imgData[3] === 179

        done(canDisplay)
      },
      false,
    )

    vid.addEventListener('error', () => {
      done(false)
    })

    vid.addEventListener('stalled', () => {
      done(false)
    })

    //Just in case
    vid.addEventListener('abort', () => {
      done(false)
    })

    const source = document.createElement('source')
    source.src =
      'data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAANhEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHYTbuMU6uEElTDZ1OsggEjTbuMU6uEHFO7a1OsggNL7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmsirXsYMPQkBNgI1MYXZmNTguNDUuMTAwV0GNTGF2ZjU4LjQ1LjEwMESJiEBUAAAAAAAAFlSua8auAQAAAAAAAD3XgQFzxYitHlZloVBqE5yBACK1nINlbmeGhVZfVlA5g4EBI + ODhAJiWgDgAQAAAAAAAAqwgQG6gQFTwIEBElTDZ0Ffc3MBAAAAAAAAkWPAgGfIAQAAAAAAABVFo4tNQUpPUl9CUkFORESHhHF0ICBnyAEAAAAAAAAcRaONTUlOT1JfVkVSU0lPTkSHiTUzNzE5OTM2MGfIAQAAAAAAABtFo5FDT01QQVRJQkxFX0JSQU5EU0SHhHF0ICBnyAEAAAAAAAAaRaOHRU5DT0RFUkSHjUxhdmY1OC40NS4xMDBzcwEAAAAAAAC6Y8CLY8WIrR5WZaFQahNnyAEAAAAAAAArRaOMSEFORExFUl9OQU1FRIeZQXBwbGUgVmlkZW8gTWVkaWEgSGFuZGxlcmfIAQAAAAAAABlFo4hUSU1FQ09ERUSHizAwOjAwOjAwOjAwZ8gBAAAAAAAAJUWjh0VOQ09ERVJEh5hMYXZjNTguOTEuMTAwIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA4MDAwMDAwMAAAH0O2dUC954EAoAEAAAAAAABpoaaBAAAAgkmDQgAAAAAGADgkHBhKAAAgIAARv / 88B//2l///+XwAAHWhAQAAAAAAADemAQAAAAAAAC7ugQGlqYJJg0IAAAAABgA4JBwYCgAAICAAEb///8GEH/////08Xf/////TxcAAoAEAAAAAAAA/oZOBACgAhgBAkpwAUAAAAyAAAEtA+4HYdaEBAAAAAAAAHaYBAAAAAAAAFO6BAaWPhgBAkpwARQAAAyAAAEtAHFO7a5G7j7OBALeK94EB8YICiPCBAw=='

    source.addEventListener('error', () => {
      done(false)
    })

    vid.appendChild(source)

    //This is required for IE
    document.body.appendChild(vid)
  })
