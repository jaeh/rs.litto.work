<script lang="ts">
  import type { FriendListItemProps, PictureProps } from '$lib/types'

  import { STATIC_URL } from '$lib/URLS.js'
  import { Link, Picture } from '$lib'

  export let file: FriendListItemProps['file']
  export let type: FriendListItemProps['type'] = 'png'
  export let url: FriendListItemProps['url'] = null

  export let width: FriendListItemProps['width'] = 100
  export let height: FriendListItemProps['height'] = 100

  const restProps = $$restProps as PictureProps
</script>

<li>
  {#if url}
    <Link class="FriendListItem" href={url}>
      <Picture {...restProps} file="{STATIC_URL}/{file}" {type} {width} {height} />
    </Link>
  {:else}
    <Picture {...restProps} file="{STATIC_URL}/{file}" {type} {width} {height} />
  {/if}
</li>

<style lang="scss">
  li {
    list-style: none;
    width: var(--friendlist-item-width, auto);
    height: var(--friendlist-item-height, 100px);
    float: var(--friendlist-item-float, left);
    margin: var(--friendlist-item-margin, 0 0.5rem 1rem);
    max-width: var(--friendlist-item-max-width, calc(32.3% - 1rem));

    // --picture-width: auto;
    // --picture-height: 100%;
  }
</style>
