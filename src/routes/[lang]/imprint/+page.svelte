<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Imprint from './Imprint.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colorInfos} from '$lib/constants'

  const color = colorInfos.red
</script>

<Faces classes="{color.bg} {color.txt}">
  <Imprint/>
</Faces>
<Arrow bgColor={color.btn} side={1} href="projects"/>