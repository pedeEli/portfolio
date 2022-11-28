<script lang="ts">
  import Welcome from './Welcome.svelte'
  import Faces from '$lib/Faces.svelte'
  import Arrow from '$lib/Arrow.svelte'
  import {colors} from '$lib/colors'

  const color = colors.welcome
</script>

<Faces classes="{color.bg} {color.txt}">
  <Welcome/>
</Faces>
<Arrow bgColor={color.btn} side={0} text="navigation" href="/navigation"/>