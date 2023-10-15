<script lang="ts">
  import { Spinner } from '$lib'
</script>

<div class="warning" id="timeout-warning">
  <div class="container">
    <div class="cancel-button" id="timeout-warning-cancel">x</div>

    <Spinner />

    <div id="timeout-warning-header">Loading artifacts for the first time might take a while.</div>

    <div id="timeout-warning-info">The artifact is loading, your connection seems to be slow.</div>

    <div id="timeout-warning-webgl-disabled">
      <h2>Webgl not supported.</h2>
      <p>Your device does not support webgl.</p>
      <button class="styled margin inverse" id="timeout-warning-webgl-disabled-ok-button"></button>
    </div>

    <div id="timeout-warning-header-done">
      <p>Finished loading</p>
      <p>:)</p>
    </div>

    <button class="styled margin inverse" id="timeout-warning-confirm" disabled="true"
      >Enter Experience</button
    >
  </div>
</div>
