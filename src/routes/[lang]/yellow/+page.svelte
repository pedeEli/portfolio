<script lang="ts">
	import Faces from '$lib/Faces.svelte'
	import About from './About.svelte'
	import { colorInfos } from '$lib/constants'

	const color = colorInfos.yellow
</script>

<Faces classes="{color.bg} {color.txt}">
	<About />
</Faces>
