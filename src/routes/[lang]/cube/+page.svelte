<script lang="ts">
  import {onMount} from 'svelte'
  import {init} from '$lib/cube'

  let wrapper: HTMLElement

  onMount(() => {
    return init(wrapper)
  })
</script>

<div class="fixed inset-0" bind:this={wrapper}></div>