<script lang="ts">
	import type { Snippet } from 'svelte'
	type Props = {
		classes: string
		children: Snippet
	}
	let { classes, children }: Props = $props()

	const getStyle = (index: number) => {
		const x = index % 3
		const y = Math.floor(index / 3)
		return `top: calc(100vw / -3 * ${y}); left: calc(100vw / -3 * ${x});`
	}
</script>

<div class="grid grid-cols-3 grid-rows-3 w-screen h-[100vw] {classes}">
	<div class="row-span-3 col-span-3">
		{@render children()}
	</div>
	<!-- {#each {length: 9} as _, index (index)}
    <div class="overflow-hidden relative">
      <div class="absolute w-vw h-vw" style={getStyle(index)}>
        <slot/>
      </div>
    </div>
  {/each} -->
</div>
