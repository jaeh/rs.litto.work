<script lang="ts">
  import { ENGINE_URL } from '$lib/URLS'

  import type { Artifact } from '../artifacts'

  export let artifact: Artifact

  const loadArtifact = async evt => {
    const { sandbox } = await import(`${ENGINE_URL}/rs.js`)

    const onLoadObjectButtonClick = await sandbox()

    // console.log({ artifact, button: evt.target })

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
