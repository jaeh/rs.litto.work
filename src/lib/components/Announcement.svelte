<script type="ts">
  import { years, ArtifactList, Picture } from '$lib'
</script>

<div class="Announcement">
  <Picture imgClass="margin max-width" src="/img/branding" height="237" width="800" />

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
    Made with support by the
    <a target="_blank" href="https://thesystem.at">SystemKollektiv</a>
  </footer>

  <div id="three-container"></div>
</div>

<style lang="scss">
  .Announcement {
    margin: 3em 1em;

    p {
      font-size: 1.5em;
      font-style: italic;
    }
    .description {
      margin: 5em 0 0;
      font-size: 1.2em;
    }
  }

</style>
