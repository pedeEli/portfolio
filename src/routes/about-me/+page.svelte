<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import About from './About.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-yellow-600">
  <About/>
</Faces>
<Arrow bgColor="bg-yellow-800" side={3} text="Navigation" href="/navigation"/>