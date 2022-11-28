<script lang="ts">
  import {beforeNavigate} from '$app/navigation'
  import Transition from '$lib/Transition.svelte'
  import {setLocale} from '$i18n/i18n-svelte'
  import '../app.css'

  import type {LayoutData} from './$types'
  import type {Direction} from '$lib/transition' 

  export let data: LayoutData

  setLocale(data.locale)

  const directionMap: Record<string, Record<string, Direction>> = {
    '': {
      'navigation': 'down'
    },
    'navigation': {
      '': 'up',
      'projects': 'right',
      'about-this-page': 'down',
      'about-me': 'left'
    },
    'about-me': {
      'navigation': 'right'
    },
    'about-this-page': {
      'navigation': 'up'
    },
    'projects': {
      'navigation': 'left',
      'imprint': 'right'
    },
    'imprint': {
      'projects': 'left'
    }
  }

  let direction: Direction = 'down'

  beforeNavigate(({from, to}) => {
    const fromStr = from?.url?.pathname?.split('/')?.[2] ?? ''
    const toStr = to?.url?.pathname?.split('/')?.[2] ?? ''

    direction = directionMap[fromStr]?.[toStr] ?? 'down'
  })
</script>

<main class="h-screen grid place-items-center">
  <div class="relative w-vw h-vw overflow-hidden">
    <Transition pathname={data.pathname} {direction}>
      <div class="w-full h-full">
        <slot/>
      </div>
    </Transition>
  </div>
</main>