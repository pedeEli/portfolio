<script lang="ts">
	import {fly} from '$lib/transition'
	
	export let pathname: string

	const {flyIn, flyOut} = fly({duration: 600})
</script>

{#key pathname}
	<div
		out:flyOut
		in:flyIn
		class="absolute"
  >
		<slot />
	</div>
{/key}