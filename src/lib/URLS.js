import { dev } from '$app/environment'

/** @type {boolean} */
export const IS_STAGING = import.meta.env.MODE === 'staging'

/** @type {boolean} */
export const IS_PROD = !dev

/** @type {string} */
export const API_VERSION = '1'

/** @type {200 | 200_000_000} */
export const DISTANCE = IS_PROD && !IS_STAGING ? 200 : 200_000_000

/** @type {'https' | 'http'} */
export const MAP_PROTOCOL = IS_PROD ? 'https' : 'http'
/** @type {string} */
export const MAP_TILE_URL = 'https://tiles.stadiamaps.com'

/** @type {string} */
export const ROOT_URL = IS_PROD ? 'https://artificialmuseum.com' : 'http://localhost:5173'
/** @type {string} */
export const GLB_URL = IS_PROD ? 'https://glb.artificialmuseum.com' : 'http://localhost:8001'
/** @type {string} */
export const STATIC_URL = IS_PROD ? 'https://static.artificialmuseum.com' : 'http://localhost:8002'
/** @type {string} */
export const MAP_URL = IS_PROD ? 'artificialmuseum.com' : 'localhost:8003'
/** @type {string} */
export const MEDIA_URL = IS_PROD ? 'https://media.artificialmuseum.com' : 'http://localhost:8004'
/** @type {string} */
export const API_URL = IS_PROD ? 'https://api.artificialmuseum.com' : 'http://localhost:8005'
/** @type {string} */
export const ENGINE_URL = IS_PROD ? 'https://engine.artificialmuseum.com' : 'http://localhost:8006'

export const URLS = {
  API_URL,
  API_VERSION,
  MAP_URL,
  MAP_PROTOCOL,
  MEDIA_URL,
  ROOT_URL,
  DISTANCE,
  // STAGING,
  MAP_TILE_URL,
  STATIC_URL,
  GLB_URL,
  ENGINE_URL,
}
