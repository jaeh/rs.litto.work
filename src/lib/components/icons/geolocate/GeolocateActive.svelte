<svg viewBox="0 0 140 140">
  <path
    d="M70 46.19c-13.15 0-23.82 10.66-23.82 23.82S56.84 93.83 70 93.83s23.82-10.66 23.82-23.82S83.16 46.19 70 46.19Z"
    style="fill:#0c0c0c"
  />
  <path
    d="M70 0C31.4 0 0 31.4 0 70s31.4 70 70 70 70-31.4 70-70S108.6 0 70 0Z"
    style="fill:#0c0c0c"
  />
  <path
    class="animate"
    d="M70 96c-14.34 0-26-11.66-26-26s11.66-26 26-26 26 11.66 26 26-11.66 26-26 26Z"
    fill="#07fff5"
  />
</svg>

<style lang="scss">
  .animate {
    animation: glow 2s infinite;
    border-color: green;
    border-style: solid;
  }

  @keyframes glow {
    0% {
      border-width: 0px;
    }
    100% {
      border-width: 5px;
    }
  }
</style>
