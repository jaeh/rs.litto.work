<div id="hud">
  <img
    id="hud-exit-button"
    src="__STATIC_URL__/button/exit.svg"
    alt="Exit"
    title="Exit Experience"
  />

  <div class="w" id="hud-searching-hittest">
    <img src="__STATIC_URL__/three/search_floor.svg" alt="" role="presentation" />
    <p>searching for floor</p>
  </div>

  <!-- <div class="w" id="hud-swipe-to-remove">
    <img src="__STATIC_URL__/three/swipe.svg" alt="" role="presentation" />
    <p>swipe to reposition</p>
  </div> -->

  <div id="toggle-animation-button">
    <svg class="play" viewbox="0 0 116 175">
      <path d="M10 155v-136l90 68z" fill="#fafafa" stroke="#0c0c0c" stroke-width="20" />
    </svg>

    <svg class="pause" viewbox="0 0 128 176">
      <g fill="#fafafa" stroke="#0c0c0c" stroke-width="18.975">
        <path d="M45.512 166.512H9.488V9.488h36.024zM119.512 166.512H83.488V9.488h36.024z" />
      </g>
    </svg>
  </div>

  <!-- <div id="hud-menu">
    <button id="hud-menu-toggle">toggle menu</button>

    <div id="hud-menu-sub">
      <button id="hud-menu-reposition">reposition model</button>
      <button id="hud-menu-record-video">record video</button>
    </div>
  </div> -->
</div>

<style lang="sass">
#hud
  color: #fafafa
  display: none
  position: relative
  top: 0
  left: 0
  text-align: center

  // #hud-menu
  //   display: none

  // #hud-menu-sub
  //   display: none

  // #hud-menu-record-video
  //   display: none

  .w
    background-color: rgba(0,0,0,0.4)
    height: auto
    left: 50vw
    max-width: 90vw
    opacity: 0
    padding: 20px 70px
    position: fixed
    top: 50vh
    transform: translate(-50%,-50%)
    transition: opacity 500ms,visibility 500ms
    visibility: hidden

    &.visible
      opacity: 1
      transition: opacity 500ms,visibility 500ms
      visibility: visible

  #hud-exit-button
    border: 0 none
    background: transparent
    cursor: pointer
    left: auto
    margin: 0
    padding: 0
    position: fixed
    right: 10px
    top: 10px
    -webkit-user-select: none
    -moz-user-select: none
    user-select: none
    width: 40px

    &:focus
      background: transparent

</style>
