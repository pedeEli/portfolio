<script lang="ts">
	import type {Snippet} from 'svelte'
	import { beforeNavigate, afterNavigate } from '$app/navigation'

	import { directionMap, isFaceURL } from '$lib/constants'

	type Props = {
		children: Snippet
	}
	let {children}: Props = $props()
	let ref = $state<HTMLElement>()

	type DeltaPosition = {
		x1?: number
		y1?: number
		x2?: number
		y2?: number
	}
	type TransitionInfo = {
		type: 'slide'
		scrollY: number
		ref: HTMLElement
		refClone: HTMLElement
		inAnim: DeltaPosition
		outAnim: DeltaPosition
	} | {
		type: 'preserveScroll',
		scrollY: number
	}
	let info: TransitionInfo | null = null
	
	const animate = (element: HTMLElement, anim: DeltaPosition): Animation => {
		const {x1 = 0, y1 = 0, x2 = 0, y2 = 0} = anim
		
		return element.animate([
			{ position: 'absolute', left: `${x1}px`, top: `${y1}px` },
			{ position: 'absolute', left: `${x2}px`, top: `${y2}px` }
		], { duration: 400 })
	}

	beforeNavigate(({ from, to }) => {
		if (ref == undefined || from == null || to == null) {
			info = null
			return
		}

		const [,,fromStr = ''] = from.url.pathname.split('/')
		const [,,toStr = ''] = to.url.pathname.split('/')
		if (!isFaceURL(fromStr) || !isFaceURL(toStr) || fromStr === toStr) {
			info = {
				type: 'preserveScroll',
				scrollY: window.scrollY
			}
			return
		}

		const [x1, y1] = directionMap[fromStr]
		const [x2, y2] = directionMap[toStr]

		if (y1 === y2) {
			info = {
				type: 'slide',
				scrollY: window.scrollY,
				ref,
				refClone: ref.cloneNode(true) as HTMLElement,
				inAnim: {
					x1: Math.sign(x2 - x1) * window.innerWidth
				},
				outAnim: {
					x2: Math.sign(x1 - x2) * window.innerWidth
				}
			}
			return
		}

		if (y1 < y2) {
			info = {
				type: 'slide',
				scrollY: 0,
				ref,
				refClone: ref.cloneNode(true) as HTMLElement,
				inAnim: {
					y1: window.innerWidth - window.scrollY
				},
				outAnim: {
					y1: -window.scrollY,
					y2: -window.innerWidth
				}
			}
			return
		}

		info = {
			type: 'slide',
			scrollY: window.innerWidth - window.innerHeight,
			ref,
			refClone: ref.cloneNode(true) as HTMLElement,
			inAnim: {
				y1: -window.innerHeight - window.scrollY
			},
			outAnim: {
				y1: window.innerWidth - window.innerHeight - window.scrollY,
				y2: window.innerWidth
			}
		}
	})

	afterNavigate(() => {
		if (info == null) {
			return
		}

		if (info.type === 'preserveScroll') {
			window.scrollTo(0, info.scrollY)
			return
		}

		const {ref, refClone, scrollY, inAnim, outAnim} = info
		window.scrollTo(0, scrollY)

		animate(ref, inAnim)
		ref.before(refClone)

		const anim = animate(refClone, outAnim)
		anim.addEventListener('finish', () => refClone.remove())
	})
</script>

<div bind:this={ref}>
	{@render children()}
</div>
