<script lang="ts">
	import type {Snippet} from 'svelte'
	import { beforeNavigate, afterNavigate } from '$app/navigation'
	import { fly } from '$lib/transition'

	import { directionMap, isFaceURL } from '$lib/constants'

	type Props = {
		children: Snippet,
		pathname: string
	}
	let {children, pathname}: Props = $props()

	let direction = $state<Direction>('down')
	let side = $derived<string>(pathname.split('/').at(2) ?? '')

	beforeNavigate(({ from, to }) => {
		if (from == null || to == null) {
			direction = 'down'
			return
		}

		const fromStr = from.url.pathname.split('/').at(2) ?? ''
		const toStr = to.url.pathname.split('/').at(2) ?? ''
		if (!isFaceURL(fromStr) || !isFaceURL(toStr)) {
			direction = 'down'
			return
		}

		const [x1, y1] = directionMap[fromStr]
		const [x2, y2] = directionMap[toStr]

		if (y1 !== y2) {
			direction = y1 < y2 ? 'down' : 'up'
			return
		}

		direction = x1 < x2 ? 'right' : 'left'
	})

	afterNavigate(({ to }) => {
		if (to == null) {
			return
		}
		// side = to.url.pathname
	})

	const { flyIn, flyOut } = fly({ duration: 450 })
</script>

{#key side}
	<div out:flyOut={{ direction }} in:flyIn={{ direction }}>
		{@render children()}
	</div>
{/key}
