import type { Handle } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'
import { getPrefferedLocale, isLocale } from '$i18n/utils'
import { translations } from '$i18n/sync'

export const handle: Handle = async ({ event, resolve }) => {
	const [, ...parts] = event.url.pathname.split('/')
	const lang = parts[0]

	if (lang == undefined || !isLocale(lang)) {
		const locale = getPrefferedLocale(event.request)
		redirect(301, `/${locale}/${parts.join('/')}`)
	}

	event.locals.locale = lang
	event.locals.LL = translations[lang]

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%i18n.lang%', lang)
	})
}
