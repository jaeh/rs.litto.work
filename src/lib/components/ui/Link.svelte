<script lang="ts">
  import type { LinkProps } from '$lib/types'

  import { browsersniff } from '$lib/utils/browsersniff.js'

  export let href: LinkProps['href']

  export let referrer: LinkProps['referrer'] = null
  export let follow: LinkProps['follow'] = null
  export let opener: LinkProps['opener'] = null
  export let rel: LinkProps['rel'] = ''
  export let target: LinkProps['target'] = null

  let className: LinkProps['class'] = null
  export { className as class }

  const local: boolean = href[0] === '/' || href[0] === '#'

  if (!local) {
    /*
     * if target is a string, it is used as name for the new tab to open
     * if target is not a string, _blank will be the name for the new tab.
     */
    target = typeof target === 'string' ? target : '_blank'

    /*
     * set noopener for external links, unless the props include opener = true
     */
    if (!opener && !rel?.includes('noopener')) {
      rel += ' noopener'
    }

    /*
     * set nofollow for external links, unless the props include follow = true
     */
    if (!follow && !rel?.includes('nofollow')) {
      rel += ' nofollow'
    }

    /*
     * set noreferrer for external links, unless the props include referrer = true
     */
    if (!referrer && !rel?.includes('noreferrer')) {
      rel += ' noreferrer'
    }

    if (rel) {
      rel = rel.trim()
    }
  }

  rel = rel || null

  if (browsersniff?.webxrviewer) {
    target = null
  }
</script>

<a class={className} {href} {target} {rel} {...$$restProps}>
  <slot name="before" /><slot /><slot name="after" />
</a>

<style lang="scss">
  a {
    background-color: var(--link-background-color, transparent);
    color: var(--link-color, var(--black));
    display: var(--link-display, inline);
    position: var(--link-position, relative);
    align-items: var(--link-align-items, normal);

    font-family: 'Noto Sans';
    font-size: var(--link-font-size, 1em);
    font-weight: var(--link-font-weight, 500);
    text-decoration: var(--link-text-decoration, none);
    text-transform: var(--link-text-transform, none);
    text-align: var(--link-text-align, left);
    line-height: var(--link-line-height, normal);

    padding: var(--link-padding, 0);
    margin: var(--link-margin, 0);
    top: var(--link-top, 0);

    border-width: var(--link-border-width);
    border-style: var(--link-border-style);
    border-radius: var(--link-border-radius);
    border-color: var(--link-border-color);
    width: var(--link-width);
    height: var(--link-height);

    &:hover {
      color: var(--link-color-hover, var(--accent-color-1));
    }

    &:global(.button) {
      display: var(--link-display, block);
      border-width: var(--link-border-width, 2px);
      border-style: var(--link-border-style, solid);
      border-radius: var(--link-border-radius, 50px);
      border-color: var(--link-border-color, var(--black));
      font-weight: var(--link-font-weight, 700);

      transition: var(--link-transition, filter var(--time) var(--motion));
      width: var(--link-width, fit-content);
      padding: var(--link-padding, 0.5em 1em 0.5em 1em);
      margin: var(--link-margin, 1rem);
      background-color: var(--link-background-color, var(--white));
      color: var(--link-color, var(--black));

      &:hover {
        filter: var(--link-filter-hover, drop-shadow(10px 10px 0px var(--accent-color-1)));
        background-color: var(--link-background-color-hover, var(--white));
        color: var(--link-color-hover);
        border-color: var(--link-border-color, var(--black));
      }

      &:global(.dark) {
        background-color: var(--link-background-color, var(--black));
        color: var(--link-color, var(--white));
        border-color: var(--link-border-color, var(--white));

        &:hover {
          background-color: var(--link-background-color-hover, var(--black));
        }
      }
    }

    &:global(.map) {
      text-decoration: none;
      text-transform: uppercase;
      border-color: var(--link-border-color, var(--grey-444));
      color: var(--map-content-control-color, var(--grey-444));
      filter: var(--drop-shadow);
      transition: all var(--time) var(--motion);

      &:hover {
        filter: none;
        border-color: var(--link-border-color, var(--accent-color-1));
        filter: var(--drop-shadow-accent);
      }
    }
  }
</style>
