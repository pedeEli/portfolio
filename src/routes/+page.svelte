<script lang="ts">
  import {goto} from '$app/navigation'
  
  import Main from './Main.svelte'
  import Faces from '$lib/Faces.svelte'
  import Arrow from './Arrow.svelte'
</script>

<Faces bgColor="bg-blue-600">
  <Main/>
</Faces>
<Arrow on:click={() => goto('/navigation')} text="Navigation"/>