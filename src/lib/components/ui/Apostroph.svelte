<script lang="ts">
  import type { BigText } from '$lib/types'

  export let content: BigText
</script>

<div>
  <span class="right-pointing">»</span>
  <h2>{content}</h2>
  <span class="left-pointing">«</span>
</div>

<style lang="scss">
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2em;
    margin-bottom: 3rem;
    font-weight: 900;
    max-width: 1000px;
  }
  h2 {
    font-size: 2.2rem;
    line-height: 2.4rem;
    text-align: center;
    font-weight: 900;
    width: 70%;
    margin: 0;
  }
  span {
    font-size: 4em;
    font-weight: 900;
    margin: 0 0.2em;

    &.right-pointing {
      color: var(--accent-color-2);
    }

    &.left-pointing {
      color: var(--accent-color-1);
    }
  }

  @media screen and (min-width: 800px) {
    div {
      width: 100%;
      align-self: center;
      justify-content: center;
      margin: 4rem auto 7rem auto;
    }
    h2 {
      font-size: 4rem;
      line-height: 4.1rem;

      max-width: 780px;
    }
  }
  @media screen and (orientation: portrait) and (min-width: 810px) {
    h2 {
      max-width: 780px;
    }
  }
  @media screen and (orientation: landscape) and (min-width: 810px) {
    h2 {
      max-width: 480px;
    }
  }

  @media screen and (min-width: 1200px) {
    h2 {
      max-width: 1300px;
      font-size: 4.5rem;
      line-height: 4.65rem;
      margin: 5rem 0 6rem 0;
    }
  }
  @media screen and (min-width: 1500px) {
    h2 {
      font-size: 5rem;
      line-height: 5.2rem;
    }
  }
</style>
