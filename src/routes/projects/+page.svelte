<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Projects from './Projects.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-zinc-200">
  <Projects/>
</Faces>
<Arrow bgColor="bg-zinc-500" side={1} text="Navigation" href="/navigation"/>
<Arrow bgColor="bg-zinc-500" side={3} text="Imprint" href="/imprint"/>