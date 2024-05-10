<script type="ts">
  import {
    years,
    ArtifactList,
    ArtifactLive,
    DeviceWarning,
    Hero,
    HUD,
    // Picture,
    Link,
    Noscript,
    TimeoutWarning,
  } from '$lib'
</script>

<Hero />

<div class="Announcement">
  <!-- <Picture imgClass="margin max-width" file="/img/branding" height="237" width="800" /> -->

  <p class="title">
    Augmented Reality Installations by
    <a target="_blank" href="https://litto.work/">Litto</a>
  </p>

  <div class="description">
    "Reterritorialized Spaces" are created using a specific documentation process of performances in public spaces. They are then "archived" as virtually walkable augmented reality sculptures.
    The focus is on repurposed places in public spaces that have been temporarily or permanently occupied by autonomously organized communities,
    finding a new purpose (e.g., factories, hospitals, military areas).


    In a specifically developed recording process, the surrounding space of a performer is captured by a mirror worn on her head and a LIDAR scanner.


    The performer is blind during this process.
    Three-dimensional deformations of the environment arise in connection with the movement of her body.


    The resulting visual material is translated into the virtual space. Exhibition visitors can explore and walk through the AR sculpture using a tablet or smartphone.

  </div>

  <!-- <ArtifactLive /> -->

  <ArtifactList {years} />

  <footer class="main">
    <p>
      © 2024
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

<style lang="scss">
  footer {
    --link-color: rgb(92, 92, 92);
    font-size: 0.7em;

  }

  .title {
    margin: 2em 0 1em;
  }

  @media (max-width: 600px) {
    .title {
      margin: 2em 0 0 1em;
    }
    .description {
      margin: 0 0 0 1em;
    }
  }
</style>