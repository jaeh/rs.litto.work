<script lang="ts">
  export let file: string
  export let type: 'mp4' | 'ogg' | 'webm' = 'mp4'
  export let controls: boolean | null | undefined = true
  export let poster: string | null = null

  export let webm: boolean = true
  export let ogg: boolean = false

  export let width: string | number | null = null
  export let height: string | number | null = null
</script>

<video {controls} {poster} {width} {height}>
  <track kind="captions" />

  {#if webm && type !== 'webm'}
    <source src="{file}.webm" type="video/webm" />
  {/if}

  {#if ogg && type !== 'ogg'}
    <source src="{file}.ogg" type="video/ogg" />
  {/if}

  <source src="{file}.{type}" type="video/{type}" />
</video>

<style lang="scss">
  video {
    aspect-ratio: var(--video-aspect-ratio, 16 / 9);

    background: var(--video-background);

    float: var(--video-float);
    margin: var(--video-margin);
    padding: var(--video-padding);
    width: var(--video-width);
  }
</style>
