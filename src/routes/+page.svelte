<script type="ts">
  import {
    years,
    ArtifactList,
    // ArtifactLive,
    DeviceWarning,
    Hero,
    HUD,
    // Picture,
    Link,
    Noscript,
    TimeoutWarning,
  } from '$lib'

  import { onMount } from 'svelte'

  $: interactiveYears = years

  const defaultArtifact = {
    name: 'Medienwerkstatt Wien',
    slug: 'medienwerkstatt',
    date: '2023-05-10',
    lat: 48.2016,
    lng: 16.3466,

    config: {
      sky: 'https://cdn.glitch.global/be631db3-54e6-4887-8d9b-d9f1e5207998/default_dark.jpg?v=1691842072552',
      file: 'https://cdn.glitch.global/96003d89-f316-4b9a-aa5d-198b24771a73/avatar_noRoot3.glb?v=1691864504578',

      type: 28,

      showVideoTime: true,
      frustumCulled: false,

      audio: 'https://live.artificialmuseum.com/data/medienwerkstatt.mp4',

      mirrors: [
        {
          type: 2,
          params: [0.3, 32],
          position: {
            // x: 1,
            z: 0,
            y: 0.01,
          },
          rotation: {
            x: 270,
          },
        },
      ],

      record3d: {
        parentName: 'parent',
        useBone: true,

        loopVideo: false,
        // hideModelsOnVideoEnded: ['Retopo_Cube003', 'mirror001', 'mirror002'],

        filterSize: '0',
        /* minimum distance of pixels in video that should be visible. */
        minDepth: '0.1',
        /* maximum depth of pixels in video that should be visible. */
        maxDepth: '5.0',
        /* in meters. Smaller values = more aggressive filtering */
        depthThresholdFilter: '2.5',
        /* scale of the artefact overall */
        scale: '1.0',
        /* the ptSize of single "pixels" of the artifact */
        ptSize: '1.2',
        /* defines the depth offset, multiplies depth texture hue */
        // depthHueMultiplier: '3.0',
        /* positive values move all pixels towards the camera */
        zOffset: '0.0',

        pixelDepth: '2.0',
        depthScale: '1',
        sizeAttenuation: '3.0',

        hueRedReducer: '0.9',
      },
    },
  }

  const tryRequest = async () => {
    const response = await fetch(
      'https://live.artificialmuseum.com/getExistingFiles?path=video&type=mp4',
    )

    const data = await response.json()

    const year = interactiveYears['2024'] || []

    if (Array.isArray(data) && data.length) {
      data.forEach((artifactName, i) => {
        const id = artifactName.replace('.mp4', '')
        const oscFile = `https://live.artificialmuseum.com/data/medienwerkstatt/${id}.txt`

        const num = year.length + 1

        const name = `Medienwerkstatt Wien ${num}`
        const exists = year.find(a => a.config.oscFile === oscFile)

        if (!exists) {
          const item = {
            ...defaultArtifact,
            name,
            title: name,
            config: {
              ...defaultArtifact.config,

              slug: name.toLowerCase(),

              oscFile,
              video: `https://live.artificialmuseum.com/data/video/${id}.mp4`,
            },
          }

          year.push(item)
        }
      })

      interactiveYears['2024'] = year
    }

    setTimeout(tryRequest, 1000)
  }

  onMount(() => {
    tryRequest()
  })
</script>

<Hero />

<div class="Announcement">
  <!-- <Picture imgClass="margin max-width" file="/img/branding" height="237" width="800" /> -->

  <p class="title">
    Augmented Reality Installations by
    <a target="_blank" href="https://litto.work/">Litto</a>
  </p>

  <div class="description">
    "Reterritorialized Spaces" are created using a specific documentation process of performances in
    public spaces. They are then "archived" as virtually walkable augmented reality sculptures. The
    focus is on repurposed places in public spaces that have been temporarily or permanently
    occupied by autonomously organized communities, finding a new purpose (e.g., factories,
    hospitals, military areas). In a specifically developed recording process, the surrounding space
    of a performer is captured by a mirror worn on her head and a LIDAR scanner. The performer is
    blind during this process. Three-dimensional deformations of the environment arise in connection
    with the movement of her body. The resulting visual material is translated into the virtual
    space. Exhibition visitors can explore and walk through the AR sculpture using a tablet or
    smartphone.
  </div>

  <ArtifactList years={interactiveYears} />

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
