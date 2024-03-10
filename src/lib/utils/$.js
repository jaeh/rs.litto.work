import { is } from './is'

/**
 * @typedef {object} Options
 * @property {Document | HTMLElement} [parent]
 * @property {boolean} [single]
 */

/**
 * @typedef {string | HTMLElement | HTMLElement[] | Document | null}  MaybeElement
 */

/**
 * @typedef {Partial<CSSStyleDeclaration> & Record<string, string | number | null>} StyleObject
 */

/**
 * @typedef {object} CreateOptions
 * @property {string} [className]
 * @property {string} [id]
 * @property {string} [innerText]
 * @property {string | HTMLElement[] | HTMLElement} [children]
 * @property {{ [k in keyof HTMLElementEventMap]: EventListenerOrEventListenerObject }[]} [on]
 * @property {HTMLElement} [parent]
 * @property {StyleObject} [style]
 * @property {HTMLImageElement['src']} [src]
 * @property {string} [type]
 * @property {string} [class]
 * @property {string | boolean} [loop]
 * @property {string | boolean} [playsinline]
 * @property {string} [preload]
 * @property {string} [crossorigin]
 * @property {string | number} [width]
 * @property {string | number} [height]
 */

/**
 *
 * @param {string} str
 * @param {Options} [opt={}]
 * @returns  {(HTMLElement | HTMLElement[] | null)}
 */
export const $ = (str, opt = {}) => {
  const { parent = document, single = false } = opt

  // find last selector
  const selectorArray = str.split(' ')
  const lastSelector = selectorArray[selectorArray.length - 1]

  if (single || lastSelector.startsWith('#')) {
    return /** @type {HTMLElement} */ (parent.querySelector(str))
  } else {
    return Array.from(parent.querySelectorAll(str))
  }
}

/**
 *
 * @param {MaybeElement} ele
 * @param {Options} opt
 * @returns
 */
$.show = (ele, opt = {}) => {
  // if ele is a string, use that string as a queryselector
  if (is.str(ele)) {
    ele = $(ele, opt)
  }

  // return early if ele is falsy
  if (!ele) {
    return
  }

  // if ele is an array of elements, show each element
  if (is.arr(ele)) {
    ele.forEach(e => $.show(e, opt))
    return
  }

  // finally a single element with a classList, show it by adding the .visible class
  if (ele instanceof HTMLElement) {
    ele.classList.add('visible')
  }
}

/**
 *
 * @param {MaybeElement} ele
 * @param {Options} opt
 * @returns
 */
$.hide = (ele, opt = {}) => {
  // if ele is a string, use it to select one or more elements
  if (is.str(ele)) {
    ele = $(ele, opt)
  }

  // return if ele is falsy
  if (!ele) {
    return
  }

  // if ele is an array, run hide for each of them
  if (is.arr(ele)) {
    ele.forEach(e => $.hide(e, opt))
    return
  }

  // hide element by removing the .visible class
  if (ele instanceof HTMLElement) {
    ele.classList.remove('visible')
  }
}

/**
 *
 * @param {MaybeElement} ele
 * @param {object} args
 * @returns
 */
$.prop = (ele, args = {}) => {
  if (is.str(ele)) {
    ele = $(ele)
  }

  if (!is.arr(ele) && ele instanceof Element) {
    ele = [ele]
  }

  if (is.arr(ele)) {
    ele?.forEach(e => {
      Object.entries(args).forEach(([k, v]) => {
        if (v === false) {
          e.removeAttribute(k)
        } else {
          e.setAttribute(k, v)
        }
      })
    })
  }
}

/**
 *
 * @param {keyof HTMLElementTagNameMap} tag
 * @param {CreateOptions} args
 * @returns
 */
$.create = (tag = 'div', args = {}) => {
  const { className, id, innerText, children, on, parent, style, ...htmlArgs } = args

  /** @type {HTMLElement} */
  const ele = document.createElement(tag)

  if (className) {
    ele.className = className
  }

  if (innerText) {
    ele.innerText = innerText
  }

  if (children) {
    if (is.str(children)) {
      ele.innerText += children
    } else if (is.arr(children)) {
      children.forEach(child => ele.appendChild(child))
    }
  }

  if (style) {
    Object.entries(style).forEach(([k, v]) => {
      const s = ele.style
      s[k] = v
    })
  }

  if (id) {
    ele.setAttribute('id', id)
  }

  if (on) {
    Object.entries(on).forEach(a => {
      $.on(ele, ...a)
    })
  }

  if (parent) {
    $.append(ele, parent)
  }

  const entries = Object.entries(htmlArgs)
  if (entries.length) {
    entries.map(([k, v]) => {
      ele.setAttribute(k, String(v))
    })
  }

  return ele
}

/**
 *
 * @param {string | Element | Element[] | Window | Document | null} ele
 * @param {keyof HTMLElementEventMap} event
 * @param {EventListenerOrEventListenerObject} fn
 * @param {EventListenerOptions} opts
 * @returns
 */
$.on = (ele, event, fn, opts = {}) => {
  if (is.str(ele)) {
    ele = $(ele)
  }

  if (!ele) {
    console.error(
      new Error(`tried to attach event listener to empty ele ${ele} ${event} ${fn} ${opts}`),
    )
    return
  }

  if (is.arr(ele)) {
    ele.forEach(e => e.addEventListener(event, fn, opts))
  } else if (ele) {
    ele?.addEventListener(event, fn, opts)
  }
}

/**
 *
 * @param {MaybeElement} ele
 * @param {keyof HTMLElementEventMap} event
 * @param {EventListenerOrEventListenerObject} fn
 * @param {EventListenerOptions} opts
 * @returns
 */
$.off = (ele, event, fn, opts = {}) => {
  if (is.str(ele)) {
    ele = $(ele)
  }

  if (!ele) {
    console.error(new Error('tried to remove event listener from empty ele'))
    return
  }

  if (is.arr(ele)) {
    ele.forEach(e => e.removeEventListener(event, fn, opts))
  } else if (ele instanceof Element) {
    ele.removeEventListener(event, fn, opts)
  }
}

/**
 *
 * @param {MaybeElement} ele
 * @param {string | HTMLElement | Document | Body | null} parent
 * @returns
 */
$.append = (ele, parent = document.body) => {
  if (is.str(ele)) {
    ele = $(ele)
  }

  if (is.str(parent)) {
    parent = /** @type {HTMLElement} */ ($(parent, { single: true }))
  }

  if (parent instanceof HTMLElement && ele) {
    /** @type {HTMLElement} */
    const p = parent
    if (is.arr(ele)) {
      ele.forEach(e => p?.appendChild(e))
    } else {
      p?.appendChild(ele)
    }
  }
}

/**
 *
 *
 * @param {(Element | Element[] | string | null)} s
 * @param {{ silent?: boolean }} [config={}]
 */
$.remove = (s, config = {}) => {
  const { silent = false } = config
  if (!s) {
    return
  }

  if (is.str(s)) {
    s = $(s)
  }

  if (!s && !silent) {
    console.error(new Error('tried to remove element that does not exist'))
    return
  }

  if (is.arr(s)) {
    s.forEach(s => $.remove(s))
  } else if (s instanceof Element && s.parentNode) {
    s.parentNode.removeChild(s)
  }
}
