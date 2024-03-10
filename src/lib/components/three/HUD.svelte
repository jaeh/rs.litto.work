<script lang="ts">
  import { STATIC_URL } from '$lib/URLS'

  import { portal } from './Portal.svelte'
</script>

<div id="hud" use:portal={'body'} hidden>
  <img id="hud-exit-button" src="{STATIC_URL}/button/exit.svg" alt="Exit" title="Exit Experience" />

  <div id="hud-searching-hittest" class="w">
    <img src="{STATIC_URL}/three/search_floor.svg" alt="" role="presentation" />
    <p>searching for floor</p>
  </div>

  <!-- <div id="hud-swipe-to-remove" class="w">
    <img src="{STATIC_URL}/three/swipe.svg" alt="" role="presentation" />
    <p>swipe to reposition</p>
  </div> -->

  <div id="hud-spawn-artifact">
    <button class="styled">Tap to show Artifact</button>
  </div>

  <div id="toggle-animation-button">
    <svg class="play" viewBox="0 0 116 175">
      <path d="M10 155v-136l90 68z" fill="#fafafa" stroke="#0c0c0c" stroke-width="20" />
    </svg>

    <svg class="pause" viewBox="0 0 128 176">
      <g fill="#fafafa" stroke="#0c0c0c" stroke-width="18.975" />
      <path d="M45.512 166.512H9.488V9.488h36.024zM119.512 166.512H83.488V9.488h36.024z" />
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

<style lang="scss">
  #hud {
    color: #fafafa;
    display: none;
    position: relative;
    top: 0;
    left: 0;
    text-align: center;

    // #hud-menu {
    //   display: none;
    // }
    // #hud-menu-sub {
    //   display: none;
    // }
    // #hud-menu-record-video {
    //   display: none;
    // }

    #hud-spawn-artifact {
      display: none;
      position: absolute;
      top: auto;
      bottom: 60px;
      width: 100%;
      text-align: center;
    }

    .w {
      background-color: rgba(0, 0, 0, 0.4);
      height: auto;
      left: 50vw;
      max-width: 90vw;
      opacity: 0;
      padding: 20px 70px;
      position: fixed;
      top: 50vh;
      transform: translate(-50%, -50%);
      transition: opacity 500ms;
      display: none;

      &.visible {
        display: block;
        opacity: 1;
        transition: opacity 500ms;
      }
    }
  }

  #hud-exit-button {
    border: 0 none;
    background: transparent;
    cursor: pointer;
    left: auto;
    margin: 0;
    padding: 0;
    position: fixed;
    right: 10px;
    top: 10px;
    user-select: none;
    width: 40px;

    &:focus {
      background: transparent;
    }
  }

  #toggle-animation-button {
    width: 66px;
    height: 48px;
    position: fixed;
    left: 1em;
    bottom: 1em;
    display: none;

    .visible {
      display: block;
    }

    svg {
      position: absolute;
      max-height: 100%;
      max-width: 100%;
    }

    .pause {
      display: none;
    }

    &.play {
      .play {
        display: none;
      }

      .pause {
        display: block;
      }
    }
  }
</style>
