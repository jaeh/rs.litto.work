<script lang="ts">
  import type { ClassName, ListProps } from '$lib/types'

  export let items: ListProps['items']
  export let component: ListProps['component']

  export let passIndex: boolean = true
  export let passLast: boolean = true

  let className: ClassName = null
  export { className as class }
</script>

<slot name="header" />

<ul class={className}>
  {#each items as item, i}
    {@const index = passIndex ? i : null}
    {@const last = passLast ? i === items.length - 1 : null}
    {@const props = { ...item, index, last }}
    <svelte:component this={component} {props} />
  {/each}
</ul>

<slot name="footer" />

<style>
  ul {
    width: 100%;
    list-style: var(--list-style, none);
    margin: var(--list-margin, 0);
    padding: var(--list-padding, 0);
    display: var(--list-display, initial);
    flex-wrap: var(--list-flex-wrap, initial);
    flex-direction: var(--list-flex-direction, row);
    align-items: var(--list-align-items, start);
    background: var(--list-background);
  }
</style>
