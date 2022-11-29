<script lang="ts">
  import {beforeNavigate} from '$app/navigation'
  import {browser} from '$app/environment'
  import {page} from '$app/stores'

  import Transition from '$lib/Transition.svelte'
  import {directionMap} from '$lib/constants'
  import '../app.css'
  
  import {setLocale, locale} from '$i18n/i18n-svelte'
  import {loadLocaleAsync} from '$i18n/i18n-util.async'
  import {locales} from '$i18n/i18n-util'
  
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


  const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if ($locale === newLocale)
      return

		await loadLocaleAsync(newLocale)
		setLocale(newLocale)
		document.querySelector('html')!.setAttribute('lang', newLocale)

    if (updateHistoryState) {
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl(location.pathname, newLocale))
		}
	}

  const replaceLocaleInUrl = (path: string, locale: string): string => {
    const [, , ...rest] = path.split('/')
    return `/${[locale, ...rest].join('/')}`
  }

	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false)

  $: if (browser) {
		const lang = $page.params.lang as Locales
		switchLocale(lang, false)
		history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl(location.pathname, lang))
	}
</script>

<svelte:window on:popstate={handlePopStateEvent}/>

<main class="h-screen grid place-items-center">
  <div class="relative w-vw h-vw overflow-hidden">
    <Transition pathname={data.pathname} {direction}>
      <div class="w-full h-full">
        <slot/>
      </div>
    </Transition>
  </div>

  <div class="fixed top-4 left-4 flex gap-2" id="locales">
    {#each locales as l (l)}
      <button
        class="w-14 h-14 rounded-full bg-white/20 uppercase {$locale === l && 'bg-white/40'}"
        on:click={() => switchLocale(l)}
      >{l}</button>
    {/each}
  </div>
</main>