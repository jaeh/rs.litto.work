<script lang="ts">
  import type { FriendListItemProps } from '$lib/types'

  import { FriendListItem } from '$lib'

  export let friends: FriendListItemProps[]
</script>

<ul>
  {#each friends as friend}
    <FriendListItem {...friend} />
  {/each}
</ul>

<style lang="scss">
  ul {
    list-style: var(--friendlist-list-style, none);
    margin: var(--friendlist-margin, 0);
    padding: var(--friendlist-padding, 0);
    margin: var(--friendlist-margin, 0 0.5rem);
  }
</style>
