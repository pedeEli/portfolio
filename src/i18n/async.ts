import type { Async, Locale, Translation } from './types'

const delay = (n: number) => new Promise((resolve) => setTimeout(resolve, n))

const translations: Async = {
	en: () => import('$i18n/en'),
	de: () => import('$i18n/de')
}

export const loadedLocales: Partial<Record<Locale, Translation>> = {}

export const loadLocale = async (locale: Locale): Promise<Translation> => {
	if (loadedLocales[locale] != undefined) {
		return loadedLocales[locale]
	}

	const translation = await translations[locale]()
	loadedLocales[locale] = translation.default
	return translation.default
}
