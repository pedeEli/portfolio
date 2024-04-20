<script lang="ts">
	import Map from './Map.svelte'

	const colors: Color[] = ['blue', 'yellow', 'orange', 'white', 'red', 'green']
</script>

<Map {colors} title class="h-full" />
