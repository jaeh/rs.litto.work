<script lang="ts">
  export let squeeze: boolean = false
</script>

<div id="toofar-warning" class="warning" class:squeeze>
  <div class="container">
    <div id="toofar-warning-cancel-button" class="cancel-button">x</div>

    <h3 id="toofar-warning-distance">You are too far away.</h3>

    <div>
      <p>This means you can not start the augmented reality of this artifact.</p>
      <p>We prepared a preview mode, do you want to start it?</p>
    </div>

    <button id="toofar-warning-load-preview-button" class="button styled margin inverse">
      Enter Preview
    </button>

    <div>If you plan to get closer before starting the experience, just click cancel.</div>

    <button id="toofar-warning-abort-button" class="button styled margin inverse">Cancel</button>
  </div>
</div>
