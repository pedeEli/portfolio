<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { LayoutData } from './$types'

	import Transition from '$lib/Transition.svelte'
	import '../app.css'

	import i18n, { setLocale } from '$i18n/utils.svelte'
	import { locales } from '$i18n/utils'

	type Props = {
		data: LayoutData
		children: Snippet
	}
	let { children, data }: Props = $props()
</script>

<main class="h-screen grid place-items-center">
	<div class="relative w-screen h-[100vw] overflow-hidden">
		<Transition pathname={data.pathname}>
			<div class="w-full h-full">
				{@render children()}
			</div>
		</Transition>
	</div>

	<div class="fixed top-4 left-4 flex gap-2" id="locales">
		{#each locales as locale (locale)}
			<button
				class="w-14 h-14 rounded-full bg-white/20 uppercase {i18n.locale === locale &&
					'bg-white/40'}"
				onclick={() => setLocale(locale)}>{locale}</button
			>
		{/each}
	</div>
</main>
