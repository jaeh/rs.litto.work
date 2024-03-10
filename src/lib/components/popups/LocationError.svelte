<script lang="ts">
  export let squeeze: boolean = false
</script>

<div id="locationError" class="popup" class:squeeze>
  <div class="container">
    <p class="error">Your location could not be determined.</p>
    <p>Maybe you disabled GPS Services, or your device does not support gps.</p>

    <button class="button close styled margin inverse">Close</button>
  </div>
</div>
