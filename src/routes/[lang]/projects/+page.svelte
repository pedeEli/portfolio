<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Projects from './Projects.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colors} from '$lib/colors'

  const color = colors['projects']
</script>

<Faces classes="{color.bg} {color.txt}">
  <Projects/>
</Faces>
<Arrow bgColor={color.btn} side={1} text="Navigation" href="/navigation"/>
<Arrow bgColor={color.btn} side={3} text="Imprint" href="/imprint"/>