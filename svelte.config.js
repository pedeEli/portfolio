import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

// TODO: no magic values
/** @type {typeof import('./src/i18n/i18n-util').locales} */
const locales = [
	'de',
	'en'
]
const routes = [
	'',
	'/navigation',
	'/about-me',
	'/about-this-page',
	'/projects',
	'/imprint'
]
const generatePrerender = () => {
	return locales.map(locale => {
		return routes.map(route => `/${locale}${route}`)
	}).flat()
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			edge: true
		}),
		files: {
			lib: 'src/lib'
		},
		alias: {
			'$i18n/*': 'src/i18n/*'
		},
		prerender: {
			entries: generatePrerender()
		}
	}
};

export default config;
