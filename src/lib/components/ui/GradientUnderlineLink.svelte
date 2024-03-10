<script lang="ts">
  import type { LinkProps } from '$lib/types'

  import Link from './Link.svelte'

  const props: LinkProps = $$props as LinkProps
</script>

<div>
  <Link {...props}><slot /></Link>
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    --link-font-size: 6vw;
    --link-text-decoration: none;
    --link-color: var(--black);
    --link-display: block;
    --link-text-align: center;
    --link-margin: auto;
    --link-font-weight: 900;

    &:after {
      background: linear-gradient(90deg, var(--accent-color-1) 50%, var(--accent-color-2) 100%);
      height: 10px;
      content: '';
      width: 90%;
      position: relative;
      display: block;
      margin: 0 auto;
      height: 2em;
    }
  }
</style>
