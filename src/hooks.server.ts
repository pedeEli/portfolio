import type { Handle } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'
import { getPrefferedLocale, isLocale } from '$i18n/utils'
import { translations } from '$i18n/sync'

export const handle: Handle = async ({ event, resolve }) => {
	const lang = event.url.pathname.split('/')[1]

	if (lang == undefined || !isLocale(lang)) {
		const locale = getPrefferedLocale(event.request)
		redirect(301, `/${locale}`)
	}

	event.locals.locale = lang
	event.locals.LL = translations[lang]

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%i18n.lang%', lang)
	})
}
