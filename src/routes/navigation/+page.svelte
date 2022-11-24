<script lang="ts">
  import {goto} from '$app/navigation'
  
  import Faces from '$lib/Faces.svelte'
  import Main from '../Main.svelte'
</script>

<Faces bgColor="bg-green-600">
  <Main/>
</Faces>