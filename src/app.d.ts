import type { Locale, Translation } from '$i18n/types'

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			locale: Locale
			LL: Translation
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	declare type Sides = {
		blue: ''
		orange: 'navigation'
		yellow: 'about-me'
		green: 'about-this-page'
		white: 'projects'
		red: 'imprint'
	}

	declare type Color = keyof Sides
	declare type SideUrl = Sides[Color]
	declare type Direction = 'up' | 'right' | 'down' | 'left'
}

export {}
