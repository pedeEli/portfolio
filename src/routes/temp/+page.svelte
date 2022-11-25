<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Temp from './Temp.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-red-600">
  <Temp/>
</Faces>
<Arrow bgColor="bg-red-800" side={1} text="Projects" href="/projects"/>