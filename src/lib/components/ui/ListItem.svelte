<script lang="ts">
  import type { ClassName, ListItemProps } from '$lib/types'

  import { Link } from '$lib'

  export let props: ListItemProps

  const { href, text } = props

  let className: ClassName = null
  export { className as class }
</script>

<li class={className}>
  {#if href}
    <Link {...$$restProps} {href}>
      {text}
    </Link>
  {:else}
    <span>{text}</span>
  {/if}
</li>

<style>
  li {
    float: var(--list-item-float, left);
    margin: var(--list-item-margin, 0 0.5em 0.5em 0);

    color: var(--list-item-color, inherit);

    --link-color: var(--list-item-color);
  }
</style>
