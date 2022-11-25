<script lang="ts">
  import Landing from './Landing.svelte'
  import Faces from '$lib/Faces.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-blue-600">
  <Landing/>
</Faces>
<Arrow href="/navigation" text="Navigation" side={0} bgColor="bg-blue-800"/>