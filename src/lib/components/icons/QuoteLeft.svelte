<svg viewBox="0 0 64 50" width="64" height="50">
  <path
    d="M64 25.6 44 50l-14.5-7.5L43.578 25 29.5 7.5 44 0l20 24.4Zm-29.5 0L14.5 50 0 42.5 14 25 0 7.5 14.5 0l20 24.4z"
  />
</svg>

<style lang="scss">
  svg {
    width: var(--quoteleft-width, 40px);
    margin: var(--quoteleft-margin, 15px);
    fill: var(--accent-color-2);

    path {
      stroke-width: var(--quoteleft-stroke-width, 1);
    }
  }

  @media screen and (min-width: 800px) {
    svg {
      width: var(--quoteleft-width-big, 100px);
    }
  }
</style>
