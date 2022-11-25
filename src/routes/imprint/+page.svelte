<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Imprint from './Imprint.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-red-600">
  <Imprint/>
</Faces>
<Arrow bgColor="bg-red-800" side={1} text="Projects" href="/projects"/>