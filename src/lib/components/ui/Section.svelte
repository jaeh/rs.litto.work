<script lang="ts">
  import type { SectionProps } from '$lib/types'

  export let id: SectionProps['id'] = null

  let className: SectionProps['class'] = null
  export { className as class }
</script>

<section {id} class={className}>
  <slot />
</section>

<style lang="scss">
  section {
    clear: var(--section-clear);
    display: var(--section-display);
    margin: var(--section-margin);
    max-width: var(--section-max-width);
    padding: var(--section-padding);
    top: var(--section-top);
    width: var(--section-width);
    text-align: var(--section-text-align);
    border: var(--section-border);
    position: var(--section-position);
  }
</style>
