import { browser } from '$app/environment'

import { hasStorage } from './hasStorage'

/**
 * Get the Storage engine.
 * If we are in the browser, we get localStorage, sessionStorage or a simple object back.
 *
 * @export
 * @returns {import('../Store').StorageEngine | {}}
 */
export const getStorageEngine = () => {
  if (browser) {
    /*
     * TODO: implement proper devalidation of storage,
     * then switch sessionstorage and localstorage below.
     */
    if (hasStorage(window.sessionStorage)) {
      return window.sessionStorage
    } else if (hasStorage(window.localStorage)) {
      return window.localStorage
    }
  }

  return {}
}
