<script lang="ts">
  import type { PictureProps } from '$lib/types'

  export let file: PictureProps['file']

  export let alt: PictureProps['alt'] = ''
  export let avif: PictureProps['avif'] = false
  export let imgClass: PictureProps['imgClass'] = null
  export let lazy: PictureProps['lazy'] = true
  export let loading: PictureProps['loading'] = !lazy ? 'eager' : 'lazy'
  export let pictureClass: PictureProps['pictureClass'] = null
  export let role: PictureProps['role'] = alt ? null : 'presentation'
  export let title: PictureProps['title'] = alt ? alt : null
  export let type: PictureProps['type'] = 'jpg'
  export let webp: PictureProps['webp'] = true

  export let width: PictureProps['width'] = null
  export let height: PictureProps['height'] = null

  const src: string = `${file}.${type}`
</script>

<picture class={pictureClass}>
  {#if avif && type !== 'svg'}
    <source type="image/avif" srcset="{file}.avif" />
  {/if}
  {#if webp && type !== 'svg'}
    <source type="image/webp" srcset="{file}.webp" />
  {/if}
  <img {...$$restProps} class={imgClass} {width} {height} {alt} {title} {role} {loading} {src} />
</picture>

<style lang="scss">
  img {
    max-width: var(--picture-max-width, 100%);
    max-height: var(--picture-max-height, 100%);
    width: var(--picture-width, auto);
    height: var(--picture-height, auto);
    border-radius: var(--picture-border-radius);
    margin: var(--picture-margin);
    padding: var(--picture-padding);
    float: var(--picture-float);
    position: var(--picture-position, initial);
    display: var(--picture-display);
    background: var(--picture-background);
    object-fit: var(--picture-object-fit);
  }
</style>
