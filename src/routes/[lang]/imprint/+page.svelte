<script lang="ts">
  import Faces from '$lib/Faces.svelte'
  import Imprint from './Imprint.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colors} from '$lib/colors'

  const color = colors.imprint
</script>

<Faces classes="{color.bg} {color.txt}">
  <Imprint/>
</Faces>
<Arrow bgColor={color.btn} side={1} text="projects" href="/projects"/>