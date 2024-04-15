import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ locals, url }) => {
	return {
		locale: locals.locale,
		LL: locals.LL,
		pathname: url.pathname
	}
}
