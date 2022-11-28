import {loadLocaleAsync} from '$i18n/i18n-util.async'

import type {LayoutLoad} from './$types'

export const load: LayoutLoad = async ({url, data}) => {
  await loadLocaleAsync(data.locale)

  return {
    pathname: url.pathname,
    locale: data.locale
  }
}