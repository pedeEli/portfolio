import type { Locale, Translation } from './types'
import { browser } from '$app/environment'
import { goto } from '$app/navigation'
import { loadLocale, loadedLocales } from './async'

export const setLocale = async (locale: Locale) => {
	if (loadedLocales[locale] != undefined) {
		info.LL = loadedLocales[locale]
	} else {
		info.LL = await loadLocale(locale)
	}
	if (browser) {
		document.querySelector('html')?.setAttribute('lang', locale)
		const [, , ...rest] = location.pathname.split('/')
		goto(`/${locale}/${rest.join('/')}`)
	}
}

const info = $state({
	locale: '' as Locale,
	LL: {} as Translation
})

export default info
