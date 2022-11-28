<script lang="ts">
	import {fly} from '$lib/transition'
	import type {Direction} from '$lib/transition'
	
	export let pathname: string
	export let direction: Direction

	const {flyIn, flyOut} = fly({duration: 450})
</script>

{#key pathname}
	<div
		out:flyOut={{direction}}
		in:flyIn={{direction}}
		class="absolute"
  >
		<slot />
	</div>
{/key}