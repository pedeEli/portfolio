import puppeteer from 'puppeteer'
import {exec} from 'child_process'
import sharp from 'sharp'
import fs from 'fs/promises'

const FILE_SIZE = 512

const childProcess = exec('pnpm run dev')
await new Promise(resolve => setTimeout(resolve, 2000))

const browser = await puppeteer.launch()

/**
 * @param {string} pathname
 */
const createImage = async pathname => {
  const page = await browser.newPage()
  await page.setViewport({
    width: FILE_SIZE,
    height: FILE_SIZE,
    deviceScaleFactor: 1
  })
  await page.goto(`http://localhost:5173/${pathname}`)
  const fileName = `${pathname.replace('/', '_')}.png`
  await page.screenshot({path: fileName})
  await page.close()
  return fileName
}

/** @type {typeof import('../src/i18n/i18n-util').locales} */
const locales = [
	'de',
	'en'
]
const routes = [
	'',
	'navigation',
	'about-me',
	'about-this-page',
	'projects',
	'imprint'
]
/** @type {Record<string, {top: number, left: number}>} */
const positions = {
  '': {top: 0, left: 0},
  'navigation': {top: 0, left: FILE_SIZE},
  'about-me': {top: 0, left: FILE_SIZE * 2},
  'about-this-page': {top: FILE_SIZE, left: 0},
  'projects': {top: FILE_SIZE, left: FILE_SIZE},
  'imprint': {top: FILE_SIZE, left: FILE_SIZE * 2}
}

/**
 * @param {import('../src/i18n/i18n-types').Locales} lang
 */
const createAllImages = async lang => {
  const images = await Promise.all(
    routes.map(async route => {
      return {
        route,
        fileName: await createImage(`${lang}/${route}`)
      }
    }))

  await sharp({create: {
    width: FILE_SIZE * 3,
    height: FILE_SIZE * 2,
    channels: 3,
    background: '#000000'
  }})
    .composite(
      images.map(({route, fileName}) => {
        const {top, left} = positions[route]
        return {
          top,
          left,
          input: fileName
        }
      })
    )
    .toFile(`${lang}_output.png`)

  await Promise.all(
    images.map(({fileName}) => fs.unlink(fileName))
  )
}

await createAllImages('en')

await browser.close()
childProcess.kill()


sharp({
  create: {
    width: 1024,
    height: 512,
    channels: 3,
    background: '#000000'
  }
})
  .composite([
    {
      left: 0,
      top: 0,
      input: './de_navigation.png'
    },
    {
      left: 512,
      top: 0,
      input: './de.png'
    }
  ])
  .toFile('output.png')


process.exit(0)