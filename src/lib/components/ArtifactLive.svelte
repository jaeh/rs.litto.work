<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  const tryRequest = async () => {
      const response = await fetch('https://live.artificialmuseum.com/data/medienwerkstatt/final.txt')

      if (response.status !== 200) {
        console.log('re requesting', response.status)
        setTimeout(tryRequest, 500)
      }

      const data = await response.json()

      console.log({ data })
    }

  onMount(() => {
    setTimeout(tryRequest, 500)
    // const events: EventSource = new EventSource('https://live.artificialmuseum.com/events?sub=artifact')

    // events.onmessage = (e) => {
    //   console.log('event', e)
    //   try {
    //     const name = JSON.parse(e.data)
    //     console.log({ name })

    //   } catch(e) {}
    // }

    // console.log('subscribed', events)
  })

  onDestroy(() => {

  })
</script>

<div>
  <h3>Live Artifact</h3>

  <p>As part of the exhibition in the medienwerkstatt wien on 2024-05-10, an artifact will appear here.</p>
</div>