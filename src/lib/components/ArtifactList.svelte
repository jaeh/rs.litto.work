<script lang="ts">
  import type { Years } from '../artifacts'

  import { ArtifactListItem, Picture } from '$lib'
  import { base } from '$app/paths'

  export let years: Years

  $: yearArray = Object.entries(years).sort((a, b) => (a > b ? -1 : 1))
</script>

{#each yearArray as [year, items]}
  <div class="Year">
    <img class="Lines" src="{base}/img/lines.png" alt="" height="4" width="300" />
    <h2>{year}</h2>

    <Picture imgClass="margin block" file="/img/graphic_{year}" height="1180" width="1920" />

    <div>
      {#each items as artifact}
        <ArtifactListItem {artifact} />
      {/each}
    </div>
  </div>
{/each}

<style lang="scss">
  .Year {
    h2 {
      font-style: bold;
      font-weight: 600;
      font-size: 3em;
      padding: 0.2em 0;
      margin: 0;
    }

    .Lines {
      margin: 3em 0 0;
      max-width: 40%;
    }
  }
</style>
