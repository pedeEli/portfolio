<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import About from './About.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colors} from '$lib/colors'

  const color = colors['about-me']
</script>

<Faces classes="{color.bg} {color.txt}">
  <About/>
</Faces>
<Arrow bgColor={color.btn} side={3} text="Navigation" href="/navigation"/>