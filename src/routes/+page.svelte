<script lang="ts">
  import Main from './Main.svelte'
  import Faces from '$lib/Faces.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-blue-600">
  <Main/>
</Faces>
<Arrow href="/navigation" text="Navigation" side={0} bgColor="bg-blue-800"/>