<script lang="ts">
  import type { FigureProps, PictureProps } from '$lib/types'

  import { Link, Picture } from '$lib'

  export let credits: FigureProps['credits'] = null

  export let file: PictureProps['file']
  export let alt: PictureProps['alt'] = ''
  export let avif: PictureProps['avif'] = false
  export let imgClass: PictureProps['imgClass'] = null
  export let lazy: PictureProps['lazy'] = true
  export let loading: PictureProps['loading'] = !lazy ? 'eager' : 'lazy'
  export let pictureClass: PictureProps['pictureClass'] = null
  export let role: PictureProps['role'] = alt ? null : 'presentation'
  export let title: PictureProps['title'] = alt
  export let type: PictureProps['type'] = 'jpg'

  export let width: PictureProps['width'] = null
  export let height: PictureProps['height'] = null

  let className: ClassName = null
  export { className as class }
</script>

<figure class={className}>
  <Picture
    {alt}
    {avif}
    {file}
    {height}
    {imgClass}
    {lazy}
    {loading}
    {pictureClass}
    {role}
    {title}
    {type}
    {width}
  />

  {#if credits}
    <figcaption>
      {#if typeof credits === 'string'}
        {credits}
      {:else}
        <Link href={credits.href}>{credits.text}</Link>
      {/if}
    </figcaption>
  {/if}
</figure>

<style lang="scss">
  figure {
    float: var(--figure-float);
    max-width: var(--figure-max-width);

    --picture-max-width: 100%;
    // --picture-border-radius: var(--figure-border-radius, var(--picture-border-radius, 0));
    // --picture-margin: var(--figure-margin, var(--picture-margin, 0));
    // --picture-max-width: var(--figure-max-width, var(--picture-max-width));
    // --picture-max-height: var(--figure-max-height, var(--picture-max-height));
    // --picture-width: var(--figure-width, var(--picture-width, auto));
    // --picture-height: var(--figure-height, var(--picture-height, auto));
    // --picture-float: var(--figure-float, var(--picture-float, none));

    figcaption {
      font-size: var(--figcaption-font-size, 0.8rem);
      color: var(--figcaption-color, var(--grey-777));
      padding: var(--figcaption-padding, 0 1rem);
    }
  }
</style>
