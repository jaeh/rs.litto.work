<script lang="ts">
  import type { FliessText, Image } from '$lib'
  import { is, Figure, Picture } from '$lib'

  export let image: Image
  export let fliesstext: FliessText = null

  let className: ClassName = null
  export { className as class }
</script>

<div class={className}>
  {#if image.credits}
    <Figure {...image} />
  {:else}
    <Picture {...image} />
  {/if}

  {#if fliesstext}
    {#if is.array(fliesstext)}
      <div class="fliesstext">
        {#each fliesstext as text}
          {#if is.array(text)}
            {@const [ele, props, children] = text}
            <svelte:element this={ele} {...props}>{children}</svelte:element>
          {:else}
            <p>{text}</p>
          {/if}
        {/each}
      </div>
    {:else}
      <p class="fliesstext">
        {@html fliesstext}
      </p>
    {/if}
  {/if}
</div>

<style lang="scss">
  .left {
    padding-right: 2rem;
    p {
      padding-left: 1rem;
    }
  }

  .right {
    padding-left: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    --figure-width: 50%;

    .fliesstext {
      margin-top: 2rem;
      box-sizing: border-box;
      padding-right: 1em;

      h2 {
        margin: 2rem 0;
        font-size: 1.3;
        line-height: 1.2em;
      }
    }
  }
  @media screen and (orientation: portrait) and (min-width: 810px) {
    .left {
      .fliesstext {
        font-size: 1.2em;
      }
    }
    .right {
      --figure-width: 10px;
      .fliesstext {
        width: 75vw;
      }
    }
  }
  @media screen and (orientation: landscape) and (min-width: 800px) {
    .left {
      padding-right: 0;
      flex-direction: row;
      --figure-width: 50%;

      .fliesstext {
        margin-left: 2rem;
      }
    }
    .right {
      flex-direction: row-reverse;
      --figure-width: 50%;
    }
    div {
      #imgWrap {
        width: 40%;
      }

      .fliesstext {
        width: 80%;
        font-size: 1.4rem;
        line-height: 1.9rem;
        margin-top: 0;
        padding: 0 2rem;

        p {
          margin-bottom: 2rem;
        }

        h2 {
          font-size: 1.8rem;
          line-height: 2.4rem;
          margin-top: 0;
        }
      }
      &.right {
        padding: 0 0 0 2rem;
        --picture-float: right;
      }
    }
  }

  // @media screen and (min-width: 800px){
  //   .fliesstext{
  //     font-size: 1.8rem;
  //   }
  // }
</style>
