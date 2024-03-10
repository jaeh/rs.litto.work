import { IS_STAGING } from '$lib/URLS'
import is from '../is'

import { getStorageEngine, filterParams, filterUndefined, promisedFetch } from './lib/index'

export const artifactStoragePrefix = 'a_'

/**
@typedef {
  | 'artifacts'
  | 'locations'
  | 'cities'
  | 'countries'
  | 'continents'
  | 'artists'
  | 'planets'
  | 'initial'
  | 'lastGeoLocation'
  | 'team'
  | 'version'
  | 'exhibitions'
} AllowedAccessors
*/

/**
@typedef {
  | (DB.PossibleTypes | DB.PossibleTypes[] | string)[]
  | Promise<(DB.PossibleTypes | string)[] | string | DB.PossibleTypes>
  | DB.PossibleTypes[]
  | DB.PossibleTypes
  | string
} StoreResult
 */

/** @typedef {Storage | {[k: string]: string}} StorageEngine */

/**
 * Helps us by unifying the interfaces of localStorage, sessionStorage or a simple object.
 *
 * @export
 * @class Store
 */
export class Store {
  /**
   * #data is the internal StorageEngine of this Store.
   *
   * @type {StorageEngine}
   */
  #data

  /**
   * Creates an instance of Store.
   *
   * @memberof Store
   */
  constructor() {
    this.#data = getStorageEngine()
  }

  /**
   * @typedef {'menuOpen' | 'lastGeoLocation' | 'version' } PossibleConfigKeys
   * add above: | 'deviceWarningSeen'
   */

  /**
   *
   * @param {PossibleConfigKeys} key
   * @memberof Store
   */
  getConfig(key) {
    if (!this.#data.hasOwnProperty(key)) {
      return undefined
    }

    const value = this.#data[key]
    if (value) {
      return JSON.parse(this.#data[key])
    } else {
      return value
    }
  }

  /**
   *
   * @param {PossibleConfigKeys} key
   * @param {*} value
   * @memberof Store
   */
  setConfig(key, value) {
    this.#data[key] = JSON.stringify(value)
  }

  /**
   * Get a value from the store
   *
   * @param {AllowedAccessors} table the table to load data from
   * @param {string} key if assigned, this value is a string or array of strings with slugs to retrieve
   * @param {string[]} cities
   * @returns {DB.PossibleTypes[] | DB.PossibleTypes | string | undefined}
   * @memberof Store
   */
  getItem(table, key = '', cities = []) {
    try {
      /** @type {string} */
      const response = this.#data[table]

      /** @type {DB.PossibleTypes[]} */
      const json = JSON.parse(response)

      if (is.arr(key)) {
        return json.filter(a => {
          const includes = key.includes(a.slug)

          let hasCity = true
          if (cities.length && a.hasOwnProperty('city')) {
            hasCity = cities.includes(a.city)
          }
          return includes && hasCity
        })
      } else if (key) {
        return json.find(a => {
          const includes = a.slug === key

          let hasCity = true
          if (cities.length && a.hasOwnProperty('city')) {
            hasCity = cities.includes(a.city)
          }

          return includes && hasCity
        })
      }

      return json
    } catch (e) {
      return undefined
    }
  }

  /**
   * Set a value in the Store.
   *
   * @param {string} key
   * @param {DB.PossibleTypes | string} value
   * @memberof Store
   */
  setItem(key, value) {
    try {
      this.#data[key] = JSON.stringify(value)
    } catch (e) {
      throw new Error(`E_DB can not set value. ${key} ${value}`)
    }
  }

  /**
   * remove an item from the data
   * @param {string} key
   * @memberof Store
   */
  removeItem(key) {
    delete this.#data[key]
  }

  /**
   *
   * @memberof Store
   * @returns {StorageEngine}
   */
  clear() {
    if (is.fn(this.#data.clear)) {
      this.#data.clear()
    } else {
      this.#data = {}
    }

    return this.#data
  }

  /**
   * Will return all values in this.#data that start with prefix.
   *
   * @param {string} prefix
   * @returns {DB.Artifact[]}
   * @memberof Store
   */
  getArtifacts(prefix = artifactStoragePrefix) {
    const artifacts = Object.entries(this.#data)
      .filter(([k]) => k.startsWith(prefix))
      .map(([_k, v]) => {
        const item = JSON.parse(v)

        return item
      })

    return artifacts
  }

  /**
   *
   * @param {string} [slug='']
   * @returns {DB.Artifact | undefined}
   * @memberof Store
   */
  getArtifact(slug = '') {
    const artifacts = this.getArtifacts()
    return artifacts.find(a => a.slug === slug)
  }

  /**
   *
   * @param {DB.PossiblePlanets} [planet]
   * @returns {DB.Artifact[]}
   * @memberof Store
   */
  getArtifactMarkers(planet) {
    const artifacts = this.getArtifacts(artifactStoragePrefix)

    if (!planet) {
      return artifacts.filter(a => !this.getItem('planets', a.city))
    }

    return artifacts.filter(a => a.city === planet)
  }

  /**
   *
   * @returns {DB.Location[]}
   */
  getLocationMarkers() {
    const locations = this.getItem('locations')

    if (is.undefined(locations) || !is.arr(locations)) {
      return []
    }

    return locations
  }

  /**
   *
   * @returns {DB.City[]}
   */
  getCityMarkers() {
    const cities = this.getItem('cities')

    if (is.undefined(cities) || !is.arr(cities)) {
      return []
    }

    return cities
  }

  /**
   *
   *
   * @param {AllowedAccessors} table
   * @param {[string, string][] | URLSearchParams | { [k: string]: string} | string | undefined} query
   * @memberof Store
   * @returns {StoreResult | undefined}
   */
  // getLocally(table, query = '') {
  //   return
  // }

  /**
   *
   *
   * @param {URLSearchParams} search
   * @returns {{ slugs: string[], cities: string[], featured: boolean}}
   * @memberof Store
   */
  resolveSearchParams(search) {
    const slugs = [...search.getAll('slug'), ...search.getAll('s')]
    const cities = search.getAll('city')
    const featured = search.has('featured')

    return {
      slugs,
      cities,
      featured,
    }
  }

  /**
   *
   * @param {typeof fetch} fetch
   * @param {DB.Artifact} artifact
   * @memberof Store
   * @returns {Promise<DB.Artifact | undefined>}
   */
  async getArtifactDetails(fetch, artifact) {
    // if (artifact.description) {
    //   return artifact
    // }

    if (!artifact.city) {
      console.error('artifact.city not found', artifact)
      return
    }

    const params = new URLSearchParams({
      slug: artifact.slug,
      city: artifact.city,
    })

    params.append('k', 'description')
    params.append('k', 'artists')
    params.append('k', 'artists3d')
    params.append('k', 'sound')
    params.append('k', 'photo')
    params.append('k', 'preview')

    const url = 'artifacts'
    const details = await promisedFetch(fetch, url, params)

    if (is.undefined(details)) {
      console.error('E_LOAD_ARTIFACT_DETAILS', 'error loading artifact details', url)
      return
    }

    const merged = {
      ...artifact,
      ...details,
    }

    this.setItem(`${artifactStoragePrefix}${merged.hash}_${merged.slug}`, merged)

    return merged
  }

  /**
   *
   * @param {DB.Artifact} artifact
   * @memberof Store
   * @returns {Promise<DB.Artifact | undefined>}
   */
  async getArtifactConfig(artifact) {
    // if (artifact.hasConfig) {
    //   return artifact
    // }

    if (!artifact.city) {
      console.error('artifact.city not found', artifact)
      return
    } else if (artifact?.city?.slug) {
      console.error('artifact got malformed city object instead of string', artifact.city)
    }

    const params = new URLSearchParams({
      slug: artifact.slug,
      city: artifact.city,
      config: '1',
    })

    if (IS_STAGING) {
      params.append('staging', '')
    }

    const url = `artifacts`
    const config = await promisedFetch(fetch, url, params)

    if (is.undefined(config)) {
      console.error('E_LOAD_ARTIFACT_DETAILS', 'error loading artifact config', url)
      return
    }

    // console.log('artifact city', artifact?.city)

    const merged = {
      ...artifact,
      ...config,
      // hasConfig: true,
    }

    // console.log({ url, config, merged })

    this.setItem(`${artifactStoragePrefix}${merged.hash}_${merged.slug}`, merged)

    return merged
  }

  /**
   *
   *
   * @param {typeof fetch} fetch
   * @param {AllowedAccessors} table
   * @param {[string, string][] | URLSearchParams | { [k: string]: string} | string | undefined} query
   *
   * @returns {StoreResult}
   * @memberof Store
   */
  get(fetch, table, query = '') {
    const search = new URLSearchParams(query)

    const { slugs, cities, featured } = this.resolveSearchParams(search)

    /** @type {(DB.PossibleTypes | string)[]} */
    let results = []

    /** @type {string[]} */
    const remainingSlugs = []

    if (slugs.length) {
      slugs.forEach(slug => {
        const item = this.getItem(table, slug, cities)
        if (item) {
          if (is.arr(item)) {
            results.push(...item)
          } else {
            results.push(item)
          }
        } else {
          remainingSlugs.push(slug)
        }
      })

      if (!remainingSlugs.length) {
        if (slugs.length === 1) {
          return results[0]
        } else {
          return results
        }
      }
    }

    if (table === 'artifacts') {
      let items = this.getArtifacts()

      if (is.arr(items)) {
        if (slugs.length) {
          items = items.filter(i => i.hasOwnProperty('slug') && slugs.includes(i.slug))
        }

        if (cities.length) {
          items = items.filter(i => i.hasOwnProperty('city') && cities.includes(i.city))
        }

        results.push(...items)

        if (featured) {
          results = results.filter(a => a.hasOwnProperty('featured'))
        }

        if ((results.length && !slugs.length) || items.length === slugs.length) {
          if (slugs.length === 1) {
            return results[0]
          } else {
            return results
          }
        }
      }
    } else {
      const items = this.getItem(table)
      if (is.arr(items)) {
        results.push(...items)
      }

      return results
    }

    /** @type {[string, string][]} */
    const params = Array.from(search.entries())
      .map(p => filterParams(p, remainingSlugs))
      .filter(filterUndefined)

    /** @type {URLSearchParams} */
    const cleanedSearch = new URLSearchParams(params)

    const url = table

    return new Promise(async resolve => {
      const json = await promisedFetch(fetch, url, cleanedSearch)

      if (json && !is.arr(json)) {
        resolve(json)
      } else if (json && slugs.length === 1) {
        resolve(json[0])
      } else if (json) {
        const isArtifactQuery = table === 'artifacts'

        /** @type {*[]} */
        const artifactResults = []
        json.forEach(item => {
          const key = isArtifactQuery
            ? `${artifactStoragePrefix}${item.hash}_${item.slug}`
            : `${table}_${item.hash}`

          if (results.length && isArtifactQuery) {
            const oldValue = results.find(a => is.objectNative(a) && a.hash === item.hash)
            if (is.objectNative(oldValue)) {
              artifactResults.push({
                ...oldValue,
                ...item,
              })
            }
          }

          this.setItem(key, item)
        })
        if (artifactResults.length) {
          resolve(artifactResults)
        } else {
          resolve([...results, ...json])
        }
      } else {
        console.error('broken json received in Store.js', json)
      }
    })
  }
}
