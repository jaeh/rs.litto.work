<script lang="ts">
  import { Link, Picture } from '$lib'
  import { STATIC_URL } from '$lib/URLS'
  import { page } from '$app/stores'

  export let squeeze: boolean = false
</script>

<div id="warning" class="warning" class:squeeze>
  <div class="container">
    <div class="ios w full">
      <button class="close-warning x fixed button">
        <svg viewBox="0 0 12 12">
          <g>
            <path d="M0 1.24346L1.20241 0L12 10.7565L10.7976 12L0 1.24346Z" fill="#FFFFFF" />
            <path d="M1.20241 12L0 10.7565L10.7976 0L12 1.24346L1.20241 12Z" fill="#FFFFFF" />
          </g>
        </svg>
      </button>

      <section class="header small">
        <h2 class="all w">Safari on IOS does NOT support augmented reality</h2>
      </section>

      <section>
        <p>1. Click to copy the</p>
        <p>ArtificialMuseum link:</p>

        <button id="copy-link" class="styled margin turquoise inline button">copy link</button>

        <!-- <p>You can then copy this link into the url bar of the webxr viewer.</p> -->
      </section>

      <section>
        <p class="all w">2. Download the</p>
        <p class="all w">XR Browser</p>

        <Link
          target="_blank"
          href="itms-apps://apps.apple.com/vn/app/xr-browser/id1588029989"
          rel="nofollow noreferrer noopener"
        >
          <Picture
            imgClass="webxrviewerlogo"
            file="{STATIC_URL}/logo/xrbrowser"
            type="jpg"
            height="512px"
            width="512px"
          />
        </Link>

        <Link
          class="button styled margin turquoise inline"
          href="itms-apps://apps.apple.com/vn/app/xr-browser/id1588029989"
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          XR Browser
        </Link>
      </section>

      <section>
        <p class="all w">3. Copy the link into the url bar of the XR Browser.</p>
      </section>

      <!-- <section>
        <p class="all w">3. Click the button below:</p>

        <Link
          id="open-webxr-link"
          class="button styled margin turquoise inline"
          href="xrviewer://open-url/?url={$page.url.href}"
        >
          Open in WebXR Viewer
        </Link>
      </section> -->

      <!-- <section>
        <p>4. If you insist,</p>
        <p>just press the button below,</p>
        <p>to load the fallback version.</p>

        <button class="close-warning styled margin turquoise inline button">I understand.</button>
      </section> -->
    </div>

    <div class="android w">
      <p class="no chrome w">
        Currently, only Blink based browsers support augmented reality. This includes Brave Browser,
        Google Chrome, Samsung Browser and others.
      </p>

      <p class="old chrome w">
        Your version of chrome is too old and does not support augmented reality.
      </p>

      <div class="all w">
        To get access to ar, please update your browser.
        <Link
          class="button styled margin"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=en_US&gl=US"
          rel="nofollow noreferrer noopener"
        >
          Update Chrome.
        </Link>

        <Link
          class="button styled margin"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.brave.browser"
          rel="nofollow noreferrer noopener"
        >
          Update Brave.
        </Link>

        <p>If you insist on continuing, just press this button:</p>
        <button class="close-warning styled button">Understood</button>
      </div>
    </div>

    <div class="macos w">
      <p class="safari w">
        Please use a different browser for the artificial museum, this browser is missing some
        critical features and will not provide an optimal experience.
      </p>

      <p>If you insist on continuing, just press this button:</p>

      <button class="close-warning styled button">Understood</button>
    </div>
  </div>
</div>

<style lang="scss">
  .warning {
    --link-filter-hover: none;
    --link-color-hover: var(--accent-color-1);
    --link-background-color-hover: var(--white);
  }
</style>
