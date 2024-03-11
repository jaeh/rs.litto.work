<script lang="ts">
  import { ENGINE_URL } from '$lib/URLS'

  import type { Artifact } from '../artifacts'

  export let artifact: Artifact

  const loadArtifact = async (evt: MouseEvent) => {
    let init
    if (ENGINE_URL === 'http://localhost:8006') {
      const { sandbox } = await import('http://localhost:8006/rs.js')
      init = sandbox
    } else {
      const { sandbox } = await import('https://engine.artificialmuseum.com/rs.js')
      init = sandbox
    }

    const onLoadObjectButtonClick = await init()

    onLoadObjectButtonClick({ artifact: artifact.config, button: evt.target })()
  }
</script>

<button class="show-artifact" on:click|preventDefault={loadArtifact}>
  Enter 3D
  <br />
  Experience
</button>

<style lang="scss">
  .show-artifact {
    width: 0;
    max-width: 0;
    float: left;
    background: transparent;
    color: #000000;
    overflow: hidden;
    text-align: left;
    font-weight: bold;
    font-size: 1.3em;
    padding: 0;
    transition:
      max-width 0.5s,
      margin 0.5s;
    line-height: 1em;
  }
</style>
