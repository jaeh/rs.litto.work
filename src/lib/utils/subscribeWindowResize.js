import { mapHandler } from './mapHandler'
import { squeezeMap, shrinkMap } from '$lib/stores'
import { browser } from '$app/environment'
import { goto } from '$app/navigation'

/** @param {import("@sveltejs/kit").Page<Record<string, string>, string | null>} page */
export const windowResizeHandler = page => {
  if (page.url.pathname.length > 1) {
    mapHandler()
  } else if (window.innerWidth > 810) {
    if (page.url.pathname === '/') {
      const hash = page.url.hash ? page.url.hash : ''
      const url = `/list/${hash}`
      goto(url)
    } else {
      squeezeMap.set(true)
      shrinkMap.set(false)
    }
  } else if (page.url.pathname.length === 1) {
    squeezeMap.set(false)
    shrinkMap.set(false)
  }
}

/**
 *
 * @param {import('@sveltejs/kit').Page} page
 * @returns {() => void}
 */
export const subscribeWindowResize = page => {
  const wrappedHandler = () => windowResizeHandler(page)

  if (browser) {
    window.addEventListener('resize', wrappedHandler)
  }

  return () => {
    if (browser) {
      window.removeEventListener('resize', wrappedHandler)
    }
  }
}
