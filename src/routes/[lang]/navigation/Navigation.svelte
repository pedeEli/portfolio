<script lang="ts">
  import {colorInfos} from '$lib/constants'
  import LL from '$i18n/i18n-svelte'

  const entries = Object.entries(colorInfos) as [Color, ColorInfo][]
</script>

<div class="w-full h-full flex flex-col items-center">
  <div class="p-[5vw]"/>
  <h1 class="text-[15vw]">{$LL.orange()}</h1>
  <div class="p-[3vw]"/>
  <div class="minimap grid w-[60vw]">
    <div class="text-[4vw] grid items-end p-[1.2vw]" style="grid-area: title">{$LL.minimap()}</div>
    {#each entries as [name, color] (name)}
      <div class="face {color.bg} {color.txt}" style="grid-area: {name}; font-size: {$LL.minimapFontSize()}">{$LL[name]()}</div>
    {/each}
  </div>
</div>

<style>
  .minimap {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      ". blue title title"
      "yellow orange white red"
      ". green . .";
  }
  .face {
    @apply aspect-square grid place-items-center text-center;
  }
</style>