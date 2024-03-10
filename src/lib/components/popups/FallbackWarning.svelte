<script lang="ts">
  export let squeeze: boolean = false
</script>

<div id="fallback-warning" class="warning" class:squeeze>
  <div class="container">
    <div id="fallback-warning-cancel-button" class="cancel-button">x</div>

    <h3>Fallback Session</h3>

    <div>
      <p>Your device does not support augmented reality.</p>
      <p>We prepared a preview mode, do you want to start it?</p>
    </div>

    <button id="fallback-warning-load-preview-button" class="styled margin inverse button">
      Enter Preview
    </button>
  </div>
</div>
