<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import About from './About.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-green-600">
  <About/>
</Faces>
<Arrow bgColor="bg-green-800" side={2} text="Navigation" href="/navigation"/>