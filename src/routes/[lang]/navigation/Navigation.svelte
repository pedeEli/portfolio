<script lang="ts">
  import {colors} from '$lib/colors'

  const entries = Object.entries(colors)
</script>

<div class="w-full h-full flex flex-col items-center">
  <div class="p-[5vw]"/>
  <h1 class="text-[15vw]">Navigation</h1>
  <div class="p-[3vw]"/>
  <div class="minimap grid w-[60vw]">
    <div class="text-[4vw] grid items-end p-[1.2vw]" style="grid-area: title">Minimap</div>
    {#each entries as [name, color] (name)}
      <div class="face {color.bg} {color.txt}" style="grid-area: {name}">{color.name}</div>
    {/each}
  </div>
</div>

<style>
  .minimap {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      ". landing title title"
      "about-me navigation projects imprint"
      ". about-this-page . .";
  }
  .face {
    @apply aspect-square grid place-items-center text-center text-[2.75vw];
  }
</style>