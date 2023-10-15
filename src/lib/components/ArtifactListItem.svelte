<script lang="ts">
  import type { Artifact } from '../artifacts'

  export let artifact: Artifact

  const loadArtifact = async evt => {
    const { sandbox } = await import('__ROOT_URL__/rs.js')

    const onLoadObjectButtonClick = await sandbox()

    onLoadObjectButtonClick({ artifact, button: evt.target })()
  }
</script>

<div class="ArtifactListItem">
  {#if artifact.config}
    <button class="show-artifact" on:click|preventDefault={loadArtifact}>
      Enter 3D
      <br />
      Experience
    </button>
  {/if}

  <img class="Arrow" src="/img/arrow.png" height="60" width="30" alt="" />

  <h3>{artifact.title}</h3>
  <div class="date">{artifact.date}</div>
  <div class="latlng">{artifact.lat}, {artifact.lng}</div>
</div>

<style lang="sass">
*
  clear: both
  margin: 0 0 2em

  &:hover,
  &:focus
    button.show-artifact
      width: auto
      max-width: 500px
      margin: 0 0.5em 0 1.9em

  h3
    font-weight: bold
    font-style: italic
    padding: 0
    font-size: 1.1em
    line-height: 1.1em
    margin: 1em 0 0

  .date
    color: #4D4D4D

  .latlng
    color: #4D4D4D

button.show-artifact
  width: 0
  max-width: 0
  float: left
  background: transparent
  color: #000000
  overflow: hidden
  text-align: left
  font-weight: bold
  font-size: 1.3em
  padding: 0
  transition: max-width 0.5s, margin 0.5s
  line-height: 1em

</style>
