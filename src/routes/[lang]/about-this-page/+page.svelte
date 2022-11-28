<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import About from './About.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colors} from '$lib/colors'

  const color = colors.aboutThisPage
</script>

<Faces classes="{color.bg} {color.txt}">
  <About/>
</Faces>
<Arrow bgColor={color.btn} side={2} text="navigation" href="/navigation"/>