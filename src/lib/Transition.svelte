<script lang="ts" context="module">
  import {writable} from 'svelte/store'

  import type {Direction} from '$lib/transition' 

  export const direction = writable<Direction>('down')
</script>

<script lang="ts">
	import {fly} from '$lib/transition'
	
	export let pathname: string

	const {flyIn, flyOut} = fly({duration: 450})
</script>

{#key pathname}
	<div
		out:flyOut={{direction: $direction}}
		in:flyIn={{direction: $direction}}
		class="absolute"
  >
		<slot />
	</div>
{/key}