<script lang="ts">
  import Welcome from './Welcome.svelte'
  import Faces from '$lib/Faces.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colorInfos} from '$lib/constants'

  const color = colorInfos.blue
</script>

<Faces classes="{color.bg} {color.txt}">
  <Welcome/>
</Faces>
<Arrow bgColor={color.btn} side={0} href="navigation"/>