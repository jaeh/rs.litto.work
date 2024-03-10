<script lang="ts">
  import { Spinner } from '$lib/icons'

  export let squeeze: boolean = false
</script>

<div id="timeout-warning" class="warning" class:squeeze>
  <div class="container">
    <div id="timeout-warning-cancel" class="cancel-button">x</div>

    <Spinner />

    <div id="timeout-warning-header">Loading artifacts for the first time might take a while.</div>

    <div id="timeout-warning-info">The artifact is loading, your connection seems to be slow.</div>

    <div id="timeout-warning-webgl-disabled">
      <h2>Webgl not supported.</h2>
      <p>Your device does not support webgl.</p>
      <button id="timeout-warning-webgl-disabled-ok-button" class="button styled margin inverse">
        Close
      </button>
    </div>

    <div id="timeout-warning-header-done">
      <p>Finished loading.</p>
      <p>:)</p>
    </div>

    <button id="timeout-warning-confirm" class="button styled margin inverse" disabled={true}>
      Enter Experience
    </button>
  </div>
</div>
