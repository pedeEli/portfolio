import chromium from 'chrome-aws-lambda'
import {exec} from 'child_process'
import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'

const FILE_SIZE = 512

const childProcess = exec('pnpm run dev')
await new Promise(resolve => setTimeout(resolve, 2000))

const browser = await chromium.puppeteer.launch({
  executablePath: await chromium.executablePath
})

/**
 * @param {string} pathname
 * @return {Buffer}
 */
const createImage = async pathname => {
  const page = await browser.newPage()
  await page.setViewport({
    width: FILE_SIZE,
    height: FILE_SIZE,
    deviceScaleFactor: 1
  })
  await page.goto(`http://localhost:5173/${pathname}`)
  
  await page.addStyleTag({content: '#locales {display: none;}'})

  const buffer = await page.screenshot({type: 'png'})
  await page.close()
  return buffer
}

/** @type {import('../src/i18n/i18n-types').Locales[]} */
const locales = [
	'de',
	'en'
]
/** @type {string[]} */
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
        buffer: await createImage(`${lang}/${route}`)
      }
    })
  )

  await sharp({create: {
    width: FILE_SIZE * 3,
    height: FILE_SIZE * 2,
    channels: 3,
    background: '#000000'
  }})
    .composite(
      images.map(({route, buffer}) => {
        const {top, left} = positions[route]
        return {
          top,
          left,
          input: buffer
        }
      })
    )
    .toFile(`static/cube/${lang}.png`)
}

const filePath = path.resolve('static/cube')
try {
  const stats = await fs.stat(filePath)
  if (!stats.isDirectory())
    throw new Error()
} catch (e) {
  await fs.mkdir(filePath)
}

await Promise.all(
  locales.map(createAllImages)
)

await browser.close()
childProcess.kill()


process.exit(0)