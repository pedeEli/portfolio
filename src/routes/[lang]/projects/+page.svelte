<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Projects from './Projects.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colorInfos} from '$lib/constants'

  const color = colorInfos.white
</script>

<Faces classes="{color.bg} {color.txt}">
  <Projects/>
</Faces>
<Arrow bgColor={color.btn} side={1} href="navigation"/>
<Arrow bgColor={color.btn} side={3} href="imprint"/>