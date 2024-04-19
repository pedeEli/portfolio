export type Locales = ['en', 'de']

export type Translation = {
	welcomeGreeting: string
	welcomeInstruction: string
	blue: string
	orange: string
	yellow: string
	green: string
	white: string
	red: string
	minimap: string
	minimapFontSize: string
}

export type Locale = Locales[number]
export type Sync = Record<Locale, Translation>
export type Async = Record<Locale, () => Promise<{ default: Translation }>>
