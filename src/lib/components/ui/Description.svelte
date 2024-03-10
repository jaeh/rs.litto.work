<script lang="ts">
  import { is } from '$lib'

  export let description: string | string[]
</script>

{#if is.array(description)}
  {#each description as desc}
    <p>{desc}</p>
  {/each}
{:else}
  <p>{description}</p>
{/if}

<style lang="scss">
  p {
    display: var(--description-display, block);
    margin: var(--description-margin, 0);
    width: var(--description-width, auto);
    float: var(--description-float, none);
    font-size: var(--description-font-size);
  }
</style>
