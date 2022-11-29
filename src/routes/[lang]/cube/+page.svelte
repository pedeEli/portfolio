<script lang="ts">
  import {onMount} from 'svelte'
  import {init} from '$lib/cube'

  import {setLocale, locale} from '$i18n/i18n-svelte'
  import {locales} from '$i18n/i18n-util'

  let wrapper: HTMLElement

  onMount(() => {
    return init(wrapper)
  })
</script>

<div class="fixed inset-0" bind:this={wrapper}>
  <div class="absolute top-4 left-4 flex gap-2">
    {#each locales as l (l)}
      <button
        class="w-14 h-14 rounded-full bg-white/20 uppercase {$locale === l && 'bg-white/40'}"
        on:click={() => setLocale(l)}
      >{l}</button>
    {/each}
  </div>
</div>