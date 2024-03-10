<script lang="ts">
  import type { ClassName, LinkProps, ListItemProps, PictureProps } from '$lib/types'

  import { Picture, Link } from '$lib'

  export let href: LinkProps['href'] | null = null

  export let width: PictureProps['width'] = 100
  export let height: PictureProps['height'] = 100

  export let props: ListItemProps & { file: PictureProps['file'] }

  let className: ClassName = null
  export { className as class }

  export const pictureProps = $$restProps as PictureProps
</script>

<li class={className}>
  {#if href}
    <Link {href}>
      <Picture {width} {height} {...props} />
    </Link>
  {:else}
    <Picture {width} {height} {...props} />
  {/if}
</li>

<style lang="scss">
  li {
    float: var(--picture-list-item-float, var(--list-item-float, left));
    margin: var(--picture-list-item-margin, var(--list-item-margin, 0 0 0.5em));

    --picture-height: var(--picture-list-item-height, var(--list-item-height, 100%));
    --picture-width: var(--picture-list-item-width, var(--list-item-width, 100%));
  }
</style>
