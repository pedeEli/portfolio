<script lang="ts">
	import Faces from '$lib/Faces.svelte'
	import Navigation from './Navigation.svelte'
	import { colorInfos } from '$lib/constants'

	const color = colorInfos.orange
</script>

<Faces classes="{color.bg} {color.txt}">
	<Navigation />
</Faces>
