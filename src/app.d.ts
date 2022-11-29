// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

type Locales = import('$i18n/i18n-types').Locales
type TranslationFunctions = import('$i18n/i18n-types').TranslationFunctions

declare namespace App {
	interface Locals {
		locale: Locales,
		LL: TranslationFunctions
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare type Color = 'red' | 'blue' | 'white' | 'green' | 'orange' | 'yellow'
export declare type FaceURL = '' | 'navigation' | 'about-me' | 'about-this-page' | 'projects' | 'imprint'
declare type FaceName = URLToName<FaceURL>

type URLToName<S extends String> = S extends `${infer Start extends string}-${infer Rest extends string}`
	?	`${Start}${URLToName<Capitalize<Rest>>}`
	: S

declare interface ColorInfo {
  bg: string,
  txt: string,
  btn: string
}


declare type Direction = 'up' | 'right' | 'down' | 'left'