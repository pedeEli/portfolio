export type Locales = ['en', 'de']

export type Translation = {
	welcomeGreeting: string
	welcomeInstruction: string
	'': string
	navigation: string
	'about-me': string
	'about-this-page': string
	projects: string
	imprint: string
	minimap: string
	minimapFontSize: string
}

export type Locale = Locales[number]
export type Sync = Record<Locale, Translation>
export type Async = Record<Locale, () => Promise<{ default: Translation }>>
