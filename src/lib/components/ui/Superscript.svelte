<script lang="ts">
  export let content: string
</script>

<sup>{content.toUpperCase()}</sup>

<style lang="scss">
  sup {
    vertical-align: super;
    font-size: var(--superscript-font-size, 0.8em);
  }
</style>
