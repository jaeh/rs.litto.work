import is from './is'

/**
 * @typedef {object} BrowsersniffReturn
 * @property {number | undefined } [version]
 * @property {boolean} [chrome]
 * @property {boolean} [android]
 * @property {boolean} [webxrviewer]
 * @property {boolean} [hell]
 * @property {Function} [chromeVersion]
 * @property {boolean} [firefox]
 * @property {boolean} [macos]
 * @property {boolean} [safari]
 * @property {boolean} [ios13]
 * @property {boolean} [ios]
 * @property {boolean} [iDevice]
 */

/**
 *
 *
 * @param {string} ua
 * @returns {BrowsersniffReturn}
 */
const createBrowsersniff = ua => {
  if (!ua) {
    return {}
  }

  ua = ua.toLowerCase()

  /** @type {boolean} */
  const ios13 =
    ua.includes('mac') && is.num(navigator?.maxTouchPoints) && navigator.maxTouchPoints > 1
  /** @type {boolean} */
  const iDevice =
    ['ipad', 'iphone', 'ipod'].some(device => ua.includes(device)) || ua.includes('webxrviewer')

  /** @type {boolean} */
  const webxrviewer = ua.includes('webxrviewer')

  /** @type {boolean} */
  const ios = iDevice || ios13 || webxrviewer

  /** @type {boolean} */
  const hell = ios && !webxrviewer

  /** @type {boolean} */
  const macos = !ios && ua.includes('macintosh')

  /** @type {boolean} */
  const safari = ua.includes('applewebkit') && ua.includes('safari') && !ua.includes('crios')

  /** @type {boolean} */
  const firefox =
    ua.includes('firefox') &&
    ua.includes('gecko') &&
    ua.includes('mozilla') &&
    !ua.includes('seamonkey')

  /**
   * chrome returns it's major version instead of true false
   *
   *  @type {() => number | undefined}
   */
  const chromeVersion = () => {
    let version
    // also covers brave and might cover edge if it ever exists
    if (ua.includes('chrome/')) {
      version = ua.split('chrome/')[1]
    } else if (ua.includes('samsungbrowser/')) {
      version = ua.split('samsungbrowser/')[1]
      // } else {
      //   console.error({ ua })
    }

    if (version) {
      version = version.split('.')[0]

      const vNum = parseInt(version, 10)

      if (vNum === +vNum) {
        return vNum
      }
    }
  }

  /** @type {number | undefined} */
  const version = chromeVersion()
  /** @type {boolean} */
  const chrome = (!!version || version === 0) && version === +version
  /** @type {boolean} */
  const android = ua.includes('android')

  const xrbrowser = webxrviewer && ua.includes('safari')

  const sniffed = {
    version,
    chrome,
    android,
    webxrviewer,
    xrbrowser,
    hell,
    chromeVersion,
    firefox,
    macos,
    safari,
    ios13,
    ios,
    iDevice,
  }

  /*
   * ios browsersniff testing...
   */
  // alert(ua + '   ' + JSON.stringify(sniffed) + '    maxTouch: ' + navigator.maxTouchPoints + '    is num ' + is.num(navigator?.maxTouchPoints))

  return sniffed
}

/** @type {string} */
const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : ''

/** @type {BrowsersniffReturn} */
export const browsersniff = createBrowsersniff(userAgent)
