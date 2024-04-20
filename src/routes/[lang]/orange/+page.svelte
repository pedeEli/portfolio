<script lang="ts">
	import { beforeNavigate } from '$app/navigation'
	import facelets from '$lib/navigation'
	import { colorInfos } from '$lib/constants'

	const color = colorInfos.orange
	let ref = $state<HTMLElement>()

	beforeNavigate(() => {
		if (ref == undefined) {
			return
		}

		for (const child of ref.children) {
			if (child instanceof HTMLElement) {
				const style = getComputedStyle(child, ':before')
				child.style.setProperty('--opacity', style.opacity.toString())
				child.classList.remove('animate')
			}
		}
	})
</script>

<div class="grid grid-cols-3 grid-rows-3 w-screen h-[100vw]" bind:this={ref}>
	{#each facelets as Facelet (Facelet)}
		<div
			class="
				facelet animate {color.txt} {color.bg} overflow-hidden relative
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
		opacity: var(--opacity, 0);
	}
	.animate::before {
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
