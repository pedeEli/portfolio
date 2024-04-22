import type { LayoutLoad } from './$types'
import { loadedLocales } from '$i18n/async'
import i18n from '$i18n/utils.svelte'

export const load: LayoutLoad = ({ data }) => {
	loadedLocales[data.locale] = data.LL
	i18n.locale = data.locale
	i18n.LL = data.LL
}
