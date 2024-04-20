<script lang="ts">
	import { colorInfos } from '$lib/constants'
	import i18n from '$i18n/utils.svelte'

	type Props = {
		colors: Color[]
		title?: boolean,
		class?: string
	}
	let { colors, title = false, class: class_ = '' }: Props = $props()
</script>

<div class="grid justify-center content-center {class_}">
	<div class="minimap grid w-[60vw]">
		{#if title}
			<div class="text-[4vw] grid items-end p-[1.2vw]" style="grid-area: title">
				{i18n.LL.minimap}
			</div>
		{/if}
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
