<svg viewBox="0 0 600 600">
  <g fill="#fafafa">
    <path d="M181 600H0V0h181v98H98v400h83zm238 0h181V0H419v98h79v400h-79z" />
    <path
      class="rotate"
      d="M211 313c4 0 12-22 8-26l-61 4-7 22c15 0 49 8 60 0zm34 68l-15-26-38 49 12 19c11-12 38-31 41-42zm-19-139c4 3 23-12 23-19l-53-27c-7 0-15 8-19 12 12 11 34 34 49 34zm65-42h30l-19-57-27-3c4 15 8 49 16 60zm67 19l16 26c3 4 37-34 41-41 0-12-7-15-11-23zm31 68l-8 30 61-11 7-23c-19 0-53-4-60 4zm-12 75l-26 15 49 38 23-11c-15-12-34-38-46-42zm-60 38l-30-8c-4 4 7 53 11 61l23 7z"
    />
  </g>
</svg>

<style lang="scss">
  .rotate {
    animation: rotation 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transform-origin: 50% 50%;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
</style>
