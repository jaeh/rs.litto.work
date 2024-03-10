<script lang="ts">
  import { is, type BigText } from '$lib'

  export let content: BigText
</script>

<h2>
  {#if is.array(content)}
    {#each content as paragraph}
      {#if is.string(paragraph)}
        {paragraph}
      {:else if is.array(paragraph)}
        {@const [tag, props, children] = paragraph}
        <svelte:element this={tag} {...props}>{children}</svelte:element>
      {/if}
    {/each}
  {:else}
    {content}
  {/if}
</h2>

<style lang="scss">
  h2 {
    max-width: 100%;
    font-size: 2.2rem;
    line-height: 2.4rem;
    font-weight: 900;
    text-align: center;

    margin: 0 auto 3rem;
    padding: 0 1rem;

    span {
      background-image: linear-gradient(
        120deg,
        var(--accent-color-1) 0%,
        var(--accent-color-2) 100%
      );
      background-repeat: no-repeat;
      background-size: 100% 0.5em;
      background-position: 0 88%;
      transition: background-size 0.25s ease-in;
    }
  }

  @media screen and (min-width: 800px) {
    h2 {
      font-size: 4rem;
      line-height: 4.1rem;
    }
  }

  @media screen and (orientation: portrait) and (min-width: 810px) {
    h2 {
      margin: 0rem auto 4rem auto;
      padding: 3rem;
    }
  }

  @media screen and (orientation: landscape) and (min-width: 810px) {
    h2 {
      max-width: 750px;
      margin-bottom: 7rem;
    }
  }

  @media screen and (min-width: 1200px) {
    h2 {
      width: 100%;
      max-width: 1300px;
      font-size: 4.5rem;
      line-height: 4.65rem;
      margin: 5rem auto 6rem auto;
    }
  }

  @media screen and (min-width: 1500px) {
    h2 {
      font-size: 5rem;
      line-height: 5.2rem;
    }
  }
</style>
