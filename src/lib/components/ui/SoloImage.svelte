<script lang="ts">
  import { Figure, Picture, type PictureProps } from '$lib'

  export let file: string
  export let height: string | number
  export let width: string | number
  export let type: PictureProps['type'] = 'jpg'
  export let credits: string | undefined | null = null
</script>

<div>
  {#if credits}
    <Figure {file} {height} {width} {type} {credits} />
  {:else}
    <Picture {file} {height} {width} {type} />
  {/if}
</div>

<style>
  div {
    width: max-content;
    height: 80vh;
    overflow: hidden;
    margin-bottom: 3rem;
    padding-right: 3rem;

    --picture-margin: 0 0 0 -30%;
    --picture-height: 100%;
  }

  @media screen and (min-width: 800px) {
    div {
      height: auto;
      width: 100%;

      --picture-margin: 0 8rem 0 0;
      --picture-width: 100%;
    }
  }
</style>
