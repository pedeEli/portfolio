<script lang="ts">
  import Main from './Main.svelte'

  const getStyle = (index: number) => {
    const x = index % 3
    const y = Math.floor(index / 3)
    return `top: calc(100vw / -3 * ${y}); left: calc(100vw / -3 * ${x});`
  }
</script>

<div class="grid grid-cols-3 grid-rows-3 w-vw h-vw bg-blue-600">
  <!-- <div class="row-span-3 col-span-3">
    <Main/>
  </div> -->
  {#each {length: 9} as _, index (index)}
    <div class="overflow-hidden relative borde" style:rotate="z {index * 90}de">
      <div class="absolute w-vw h-vw" style={getStyle(index)}>
        <Main/>
      </div>
    </div>
  {/each}
</div>