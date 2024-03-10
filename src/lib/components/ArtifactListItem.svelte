<script lang="ts">
  import type { Artifact } from '../artifacts'

  import { ArtifactLoadButton } from '$lib'

  export let artifact: Artifact
</script>

<div class="ArtifactListItem">
  {#if artifact.config}
    <ArtifactLoadButton {artifact} />
  {/if}

  <img class="Arrow" src="/img/arrow.png" height="60" width="30" alt="" />

  <h3>{artifact.title}</h3>
  <div class="date">{artifact.date}</div>
  <div class="latlng">{artifact.lat}, {artifact.lng}</div>
</div>

<style lang="scss">
  .ArtifactListItem {
    clear: both;
    margin: 0 0 2em;

    &:hover,
    &:focus {
      :global(button.show-artifact) {
        width: auto;
        max-width: 500px;
        // transition: max-width 0.5s, margin 0.5s;
        margin: 0 0.5em 0 1.9em;
      }
    }

    h3 {
      font-weight: bold;
      font-style: italic;
      padding: 0;
      font-size: 1.1em;
      line-height: 1.1em;
      margin: 1em 0 0;
    }

    .date {
      color: var(--text-grey);
    }
    .latlng {
      color: var(--text-grey);
    }

    .Arrow {
      float: left;
      height: 3.8em;
      width: auto;
      margin: 0 0.5em 0 0;
    }
  }
</style>
