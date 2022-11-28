<script lang="ts">
  import Landing from './Landing.svelte'
  import Faces from '$lib/Faces.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colors} from '$lib/colors'

  const color = colors['landing']
</script>

<Faces classes="{color.bg} {color.txt}">
  <Landing/>
</Faces>
<Arrow bgColor={color.btn} side={0} text="Navigation" href="/navigation"/>