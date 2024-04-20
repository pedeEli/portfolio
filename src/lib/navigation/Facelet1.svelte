<script lang="ts">
	import i18n from '$i18n/utils.svelte'
	import { colorInfos } from '$lib/constants'
</script>

<div class="p-[1vw]" />
<div class="grid justify-center">
	<h1 class="text-[15vw]">{i18n.LL.orange}</h1>
</div>

<div class="absolute grid justify-center content-center inset-0 translate-y-[33.33vw]">
	<div class="minimap grid w-[60vw]">
		{@render tile('blue', colorInfos.blue.bg, colorInfos.blue.txt, 'blue')}
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
