<script lang="ts">
	import facelets from '$lib/navigation'
	import { colorInfos } from '$lib/constants'

	const color = colorInfos.orange
</script>

<div class="grid grid-cols-3 grid-rows-3 w-screen h-[100vw]">
	{#each facelets as Facelet (Facelet)}
		<div
			class="
				facelet {color.txt} {color.bg} overflow-hidden relative
				before:absolute before:inset-0 before:pointer-events-none {Math.random() > 0.5
				? 'before:bg-white'
				: 'before:bg-black/70'}"
			style:--delay="{Math.random() * 3 + 5}s"
			style:--duration="{Math.random() * 5 + 5}s"
		>
			<div class="h-full relative">
				<Facelet />
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.facelet::before {
		opacity: 0;
		animation: shimmer var(--duration) linear var(--delay) infinite alternate;
	}
	@keyframes shimmer {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.1;
		}
	}
</style>
