<script lang="ts">
  import type { Artifact } from '../artifacts'

  export let artifact: Artifact

  const loadArtifact = async evt => {
    const { sandbox } = await import('__ROOT_URL__/rs.js')

    const onLoadObjectButtonClick = await sandbox()

    onLoadObjectButtonClick({ artifact, button: evt.target })()
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
