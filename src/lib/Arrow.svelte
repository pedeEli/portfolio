<script lang="ts">
  import {goto} from '$app/navigation'

  import {direction} from '$lib/Transition.svelte'
  import type {Direction} from '$lib/transition'

  import LL, {locale} from '$i18n/i18n-svelte'

  import type {Faces} from '$lib/colors'
  
  export let text: Faces
  export let side: 0 | 1 | 2 | 3
  export let bgColor: string
  export let href: string

  const getPosition = (s: typeof side) => {
    if (s === 0)
      return 'bottom-3 top-auto'
    if (s === 1)
      return 'left-3 right-auto'
    if (s === 2)
      return 'top-3 bottom-auto'
    return 'right-3 left-auto'
  }

  const sideToDirection = (s: typeof side): Direction => {
    return s === 0
      ? 'down'
      : s === 1
      ? 'left'
      : s === 2
      ? 'up'
      : 'right'
  }
</script>

<div class="absolute text-xl inset-0 {getPosition(side)} group flex justify-center {side % 2 === 0 ? 'flex-row' : 'flex-col'}">
  <button
    on:click={() => {
      direction.set(sideToDirection(side))
      goto(`/${$locale}${href}`, {noScroll: side % 2 === 1})
    }}
    class="
      group flex justify-center items-center relative {bgColor} shadow-2xl rounded-full w-fit h-fit p-[min(0.75rem,1vw)]
      {side % 2 === 0 ? 'pr-5 flex-row' : 'pb-5 flex-col'}
    "
  >
    <div class="icon rounded-full bg-white/30 group-hover:bg-white/40 grid place-items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 1 26 30" style="rotate: z {side * 90}deg">
        <path
          d="M 15 4 v 22 l-10 -10 l10 10 l10 -10"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
    </div>
    <div
      class="text"
      style:rotate="z {(side % 2) * 180}deg"
      style:translate="{(side % 2) * -0.28}vw 0"
      style:writing-mode={side % 2 === 0 ? 'horizontal-tb' : 'vertical-rl'}
    >{$LL[text]()}</div>
  </button>
</div>

<style>
  .icon {
    --size: max(5vw, 2rem);
    width: var(--size);
    height: var(--size);
    padding: clamp(0.2em, 1vw, 1rem);
  }
  .text {
    font-size: clamp(1rem, 1.4vw, 3rem);
  }
  button {
    gap: min(1rem, 1.4vw);
  }
</style>