<script lang="ts">
	import { colorInfos, colorToUrl } from '$lib/constants'
	import i18n from '$i18n/utils.svelte'

	const colors: Color[] = [
		'blue',
		'yellow',
		'orange',
		'white',
		'red',
		'green'
	]
</script>

<div class="w-full h-full flex flex-col items-center">
	<div class="p-[5vw]" />
	<h1 class="text-[15vw]">{i18n.LL.orange}</h1>
	<div class="p-[3vw]" />
	<div class="minimap grid w-[60vw]">
		<div class="text-[4vw] grid items-end p-[1.2vw]" style="grid-area: title">
			{i18n.LL.minimap}
		</div>
		{#each colors as color (color)}
			{@render tile(color, colorInfos[color].bg, colorInfos[color].txt, color)}
		{/each}
	</div>
</div>

{#snippet tile(url: Color, bg: string, color: string, name: Color)}
	<a
		class="{bg} {color} aspect-square grid place-items-center text-center select-none outline-4 -outline-offset-2 outline-zinc-900 outline"
		style="grid-area: {name}; font-size: {i18n.LL.minimapFontSize}"
		href="/{i18n.locale}/{url}"
	>
		{i18n.LL[url]}
	</a>
{/snippet}

<style lang="postcss">
	.minimap {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-areas:
			'. blue title title'
			'yellow orange white red'
			'. green . .';
	}
</style>
