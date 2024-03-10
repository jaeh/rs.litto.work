import { API_URL, IS_STAGING } from '$lib/URLS'

/**
 *
 * @param {typeof fetch} fetch
 * @param {string} url
 * @param {URLSearchParams} [params]
 *
 * @returns {Promise<DB.PossibleTypes[] | undefined>}
 * @export
 */
export const promisedFetch = async (fetch, url, params = undefined) => {
  try {
    let fullUrl = `${API_URL}/v1/${url}`

    if (IS_STAGING) {
      if (!params) {
        params = new URLSearchParams()
      }

      params.append('staging', '1')
    }

    if (params) {
      fullUrl += `?${params.toString()}`
    }

    const data = await fetch(fullUrl)

    try {
      /** @type {DB.PossibleTypes[]} */
      const json = await data.json()
      return json
    } catch (e) {
      console.log('promisedFetch json.parse error', { fullUrl, e })
    }
  } catch (e) {
    console.error('invalid fetch response received', e)
    return undefined
  }
}
