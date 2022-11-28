<script lang="ts">
  import {beforeNavigate} from '$app/navigation'
  import Transition from '$lib/Transition.svelte'
  import {directionMap} from '$lib/constants'
  import {setLocale} from '$i18n/i18n-svelte'
  import '../app.css'

  import type {LayoutData} from './$types'

  export let data: LayoutData

  setLocale(data.locale)

  let direction: Direction = 'down'

  beforeNavigate(({from, to}) => {
    // TODO: proper typesafty
    const fromStr = (from?.url?.pathname?.split('/')?.[2] ?? '') as FaceURL
    const toStr = (to?.url?.pathname?.split('/')?.[2] ?? '') as FaceURL

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