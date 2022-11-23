<script lang="ts">
  import Main from './Main.svelte'
  import Faces from '$lib/Faces.svelte'

  const getStyle = (index: number) => {
    const x = index % 3
    const y = Math.floor(index / 3)
    return `top: calc(100vw / -3 * ${y}); left: calc(100vw / -3 * ${x});`
  }
</script>

<Faces bgColor="bg-blue-600">
  <Main/>
</Faces>