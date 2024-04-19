<script lang="ts">
	import Welcome from './Welcome.svelte'
	import Faces from '$lib/Faces.svelte'
	import { colorInfos } from '$lib/constants'

	const color = colorInfos.blue
</script>

<Faces classes="{color.bg} {color.txt}">
	<Welcome />
</Faces>
