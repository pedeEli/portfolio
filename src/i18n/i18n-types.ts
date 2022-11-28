// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * P​o​r​t​f​o​l​i​o​ ​o​f
	 */
	landingGreeting: string
	/**
	 * T​o​ ​n​a​v​i​g​a​t​e​ ​t​h​i​s​ ​w​e​b​s​i​t​e​ ​y​o​u​ ​c​a​n​ ​u​s​e​ ​t​h​o​s​e​ ​a​r​r​o​w​s​ ​b​e​l​o​w​.​ ​Y​o​u​ ​c​a​n​ ​a​l​s​o​ ​a​t​ ​a​n​y​ ​t​i​m​e​ ​p​r​e​s​s​ ​t​h​e​ ​b​u​t​t​o​n​ ​i​n​ ​t​h​e​ ​b​o​t​t​o​m​ ​r​i​g​h​t​ ​c​o​r​n​e​r​ ​a​n​d​ ​s​e​e​ ​w​h​a​t​ ​h​a​p​p​e​n​s​.
	 */
	landingInstruction: string
	/**
	 * L​a​n​d​i​n​g
	 */
	landing: string
	/**
	 * N​a​v​i​g​a​t​i​o​n
	 */
	navigation: string
}

export type TranslationFunctions = {
	/**
	 * Portfolio of
	 */
	landingGreeting: () => LocalizedString
	/**
	 * To navigate this website you can use those arrows below. You can also at any time press the button in the bottom right corner and see what happens.
	 */
	landingInstruction: () => LocalizedString
	/**
	 * Landing
	 */
	landing: () => LocalizedString
	/**
	 * Navigation
	 */
	navigation: () => LocalizedString
}

export type Formatters = {}