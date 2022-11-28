<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Navigation from './Navigation.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colorInfos} from '$lib/constants'

  const color = colorInfos.orange
</script>

<Faces classes="{color.bg} {color.txt}">
  <Navigation/>
</Faces>
<Arrow bgColor={color.btn} side={0} href="about-this-page"/>
<Arrow bgColor={color.btn} side={1} href="about-me"/>
<Arrow bgColor={color.btn} side={2} href=""/>
<Arrow bgColor={color.btn} side={3} href="projects"/>