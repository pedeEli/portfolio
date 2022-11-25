<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Navigation from './Navigation.svelte'
  import Arrow from '$lib/Arrow.svelte'
</script>

<Faces bgColor="bg-orange-600">
  <Navigation/>
</Faces>
<Arrow bgColor="bg-orange-800" side={0} text="About This Page" href="/about-this-page"/>
<Arrow bgColor="bg-orange-800" side={1} text="About Me" href="/about-me"/>
<Arrow bgColor="bg-orange-800" side={2} text="Landing Page" href="/"/>
<Arrow bgColor="bg-orange-800" side={3} text="Projects" href="/projects"/>