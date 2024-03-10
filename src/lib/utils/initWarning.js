import { browsersniff } from '$lib/utils/browsersniff.js'

import { $ } from './$.js'
import { storage } from './db/index.js'

const { android, chrome, ios, macos, safari, version, webxrviewer } = browsersniff

/* this function shows or hides elements within html/screens/warnings.html */
export const initWarning = () =>
  new Promise(r => {
    // console.log('initwarning')
    if (!ios && !android && !macos) {
      return
    }

    // if (window.noWarn) {
    //   return
    // }

    // const deviceWarningSeen = storage.getConfig('deviceWarningSeen')
    // if (deviceWarningSeen === 'true') {
    //   return
    // }

    let show = false

    if (ios) {
      if (!webxrviewer) {
        show = true
        const warning = $('#warning')
        if (warning instanceof HTMLElement) {
          warning.classList.add('ios', 'full')
        }

        $.show('#warning .no-webxr')

        const copyLink = document.getElementById('copy-link')

        $.on(copyLink, 'click', e => {
          const { target } = e
          if (target instanceof HTMLElement) {
            target.innerText = 'copied...'
          }

          window.navigator.clipboard.writeText(window.location.href)
        })

        const openWebxrLink = $('#open-webxr-link')
        if (openWebxrLink instanceof HTMLLinkElement) {
          openWebxrLink.href = `xrviewer://${window.location.href}`
        }
      }

      if (show) {
        $.show('#warning .ios')
        $.show('#warning .ios .all')
      }
    }

    if (android) {
      if (chrome) {
        if (version && version < 86) {
          show = true
          $.show('#warning .chrome.old')
        }
      } else {
        show = true
        $.show('#warning .chrome.no')
      }

      if (show) {
        $.show('#warning .android')
        $.show('#warning .android .all')
      }
    }

    if (macos) {
      if (safari) {
        $.show('#warning .safari')
        $.show('#warning .macos')
      }
    }

    if (show) {
      $.show('#warning')

      const closeWarningButton = /** @type {HTMLElement} */ ($('.close-warning'))
      $.on(closeWarningButton, 'click', () => {
        // storage.setConfig('deviceWarningSeen', true)
        $.hide('#warning')

        let shouldContinue = true // !closeWarningButton?.classList?.contains('x')
        r({ shouldContinue })
      })
    }
  })
