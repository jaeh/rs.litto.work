<script lang="ts">
  export let height: number | string | undefined
  export let width: number | string | undefined
  export let webp: boolean = true
  export let avif: boolean = false
  export let alt: string = ''
  export let role: string | null = null
  export let pictureClass: string = 'Picture'
  export let imgClass: string | undefined = ''
  export let src: string
  export let type: '.jpg' | '.png' | '.gif' = '.jpg'

  if ((alt === '' && !role) || typeof role !== 'string') {
    role = 'presentation'
  }

  const srcsets: string[] = []

  if (webp !== false) {
    srcsets.push(`${src}.webp`)
  }

  // avif is disabled by default
  if (avif !== false) {
    srcsets.push(`${src}.avif`)
  }

  if (!pictureClass.includes('Picture')) {
    pictureClass = `Picture ${pictureClass ? pictureClass : undefined}`.trim()
  }
</script>

<picture class={pictureClass}>
  {#each srcsets as srcset}
    <source {srcset} />
  {/each}

  <img class={imgClass} src="{src}{type}" {alt} {role} {height} {width} />
</picture>

<style lang="scss">
  img {
    max-width: 100%;
    max-height: 100%;
    height: auto;

    &.margin {
      margin: 0 0 2em;
    }
    &.block {
      display: block;
    }
    &.max-width {
      max-width: 800px;
    }
  }
</style>
