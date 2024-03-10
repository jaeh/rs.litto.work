<script context="module">
  import { tick } from 'svelte'

  /**
   * Usage: <div use:portal={'css selector'}> or <div use:portal={document.body}>
   *
   * @param {HTMLElement} el
   * @param {HTMLElement|string} target DOM Element or CSS Selector
   */
  export function portal(el, target = 'body') {
    let targetEl

    /**
     * @param {HTMLElement | string} newTarget
     * @returns {Promise<void>}
     */
    async function update(newTarget) {
      target = newTarget
      if (typeof target === 'string') {
        targetEl = document.querySelector(target)
        if (targetEl === null) {
          await tick()
          targetEl = document.querySelector(target)
        }
        if (targetEl === null) {
          throw new Error(`No element found matching css selector: "${target}"`)
        }
      } else if (target instanceof HTMLElement) {
        targetEl = target
      } else {
        const targetType = target === null ? 'null' : typeof target
        throw new TypeError(
          `Unknown portal target type: ${targetType}. Allowed types: CSS selector string or HTMLElement.`,
        )
      }

      targetEl.appendChild(el)
      el.hidden = false
    }

    function destroy() {
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
    }

    update(target)

    return {
      update,
      destroy,
    }
  }
</script>

<script>
  /**
   * DOM Element or CSS Selector
   * @type { HTMLElement|string}
   */
  export let target = 'body'
</script>

<div use:portal={target} hidden>
  <slot />
</div>
