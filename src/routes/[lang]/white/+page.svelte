<script lang="ts">
	import Faces from '$lib/Faces.svelte'
	import Projects from './Projects.svelte'
	import { colorInfos } from '$lib/constants'

	const color = colorInfos.white
</script>

<Faces classes="{color.bg} {color.txt}">
	<Projects />
</Faces>
