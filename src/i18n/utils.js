/**
 * @typedef {import('./types').Locale} Locale
 * @typedef {import('./types').Locales} Locales
 */

/** @type {Locales} */
export const locales = ['en', 'de']

/** @type {Locale} */
export const defaultLocale = 'en'

/**
 * @param {string} locale
 * @returns {locale is Locale}
 */
export const isLocale = (locale) => {
	return locales.includes(/** @type {Locale} */ (locale))
}

/**
 * @param {Request} request
 * @returns {Locale}
 */
export const getPrefferedLocale = (request) => {
	let accepted = request.headers.get('accept-language')
	if (accepted == null || accepted === '*') {
		return defaultLocale
	}

	/** @type {Array<{q: number, locale: string}>} */
	const languages = []

	for (const part of accepted.split(',')) {
		const [locale, q] = part.split(';')
		if (q == undefined) {
			languages.push({ locale, q: 1 })
			continue
		}

		languages.push({
			locale,
			q: Number(q.split('=')[1])
		})
	}

	languages.sort((a, b) => b.q - b.q)

	for (const language of languages) {
		if (isLocale(language.locale)) {
			return language.locale
		}
	}

	return defaultLocale
}
