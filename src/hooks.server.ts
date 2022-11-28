import {initAcceptLanguageHeaderDetector} from 'typesafe-i18n/detectors'
import {detectLocale, i18n, isLocale} from '$i18n/i18n-util'
import {loadAllLocales} from '$i18n/i18n-util.sync'

import type {Handle, RequestEvent} from '@sveltejs/kit'

loadAllLocales()
const L = i18n()

export const handle: Handle = async ({event, resolve}) => {
  const [,lang] = event.url.pathname.split('/')

  if (!lang || !isLocale(lang)) {
    const locale = getPreferredLocale(event)
    return new Response(null, {
      status: 302,
      headers: {
        Location: `/${locale}`
      }
    })
  }

  const LL = L[lang]
  event.locals.locale = lang
  event.locals.LL = LL

  return resolve(event, {
    transformPageChunk: ({html}) => html.replace('%i18n.lang%', lang)
  })
}

const getPreferredLocale = ({ request }: RequestEvent) => {
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)
	return detectLocale(acceptLanguageDetector)
}