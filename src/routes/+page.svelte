<script type="ts">
  import {
    years,
    ArtifactList,
    DeviceWarning,
    Hero,
    HUD,
    Picture,
    Link,
    Noscript,
    TimeoutWarning,
  } from '$lib'
</script>

<Hero />

<div class="Announcement">
  <Picture imgClass="margin max-width" file="/img/branding" height="237" width="800" />

  <p>
    Augmented Reality Installations by
    <a target="_blank" href="https://litto.work/">Litto</a>
  </p>

  <div class="description">
    Reterritorialized Spaces is a hybrid performance in public space entailing one performer
    projecting real space into virtual space by scanning with a LIDAR scanner through a mirror. The
    mirror breaks the geometric and perspective properties of space, resulting in experimental forms
    of spatial perception. In addition, the movement of the performer and the interaction with the
    audience influence the course of the performance. A virtual monument accessible with augmented
    reality on the
    <a target="_blank" href="https://artificialmuseum.com/">artificialmuseum.com</a>
    will remain.
  </div>

  <ArtifactList {years} />

  <footer class="main">
    <p>
      Made with support by the
      <Link href="https://thesystem.at">SystemKollektiv</Link>
    </p>
    <p>
      Hosted on the
      <Link href="https://artificialmuseum.com/">Artificial Museum</Link>
    </p>
  </footer>

  <div id="three-container"></div>

  <Noscript />
  <TimeoutWarning />
  <DeviceWarning />

  <HUD />
</div>
