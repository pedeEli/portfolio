<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Main from '../Main.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-green-600">
  <Main/>
</Faces>
<Arrow bgColor="bg-green-800" side={2} text="Landing Page" href="/"/>