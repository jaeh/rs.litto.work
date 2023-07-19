import path from 'path'

import fs from '@magic/fs'
import log from '@magic/log'

import pug from 'pug'

import { deepClean, replaceSlashSlash } from '../lib/index.js'

import { SCENE_TYPES, MESH_TYPES } from '../db.js'

import { artifacts } from '../../src/artifacts.js'

const cityTemplate = city =>
  `
extends /layout.pug

block logo
  +PageLogo('Artificial Museum', '${city.name}')

block lists
  +City('${city.slug}')
`.trim()

export const html = async args => {
  const { inputDir, outputDir, locals, sandbox } = args

  const startTime = log.hrtime()

  const htmlDir = path.join(inputDir, 'html')
  const htmlPageDir = path.join(htmlDir, 'pages')

  const APP_DB = {
    // types of scenes
    // number indexes can change freely,
    // they are never referenced directly.
    // changing these should still be carefully considered,
    // some cache problems could arise when replacing existing indexes
    SCENE_TYPES,
    // Mesh types with primitive Meshes
    // used to tell Mirroring and other functionality what primitive to use.
    MESH_TYPES,
    artifacts,
  }

  const cleanedDb = deepClean(APP_DB)

  const appDbString = JSON.stringify(cleanedDb, null, 2)

  const script = `
window.APP_DB = ${appDbString};
window.MAP_URL = '${locals.pageMeta.mapUrl}';
window.GLB_URL = '${locals.pageMeta.glbUrl}';
window.STATIC_URL = '${locals.pageMeta.staticUrl}';
window.MEDIA_URL = '${locals.pageMeta.mediaUrl}';
window.ROOT_URL = '${locals.pageMeta.rootUrl}';
`
    .trim()
    .replace(/\n/gim, '')

  const htmlFiles = await fs.getFiles(htmlPageDir)

  await Promise.all(
    htmlFiles.map(async htmlFile => {
      const fileName = path.basename(htmlFile, path.extname(htmlFile))

      const html = await fs.readFile(htmlFile, 'utf8')

      const basedir = path.join(process.cwd(), 'src', 'html')
      const pugRenderArgs = {
        ...locals,
        pageMeta: {
          script,
          artifacts,
          ...locals.pageMeta,
        },
        i18n: a => a,
        replaceSlashSlash,
        APP_DB: appDbString,
        filename: htmlFile,
        basedir,
      }

      const result = pug
        .render(html, pugRenderArgs)
        // replace newlines by whitespace
        .replace(/\n/gim, ' ')
        // collapse multiple whitespaces
        .replace(/\s+/gim, ' ')

      let outDir = path.join(outputDir)

      await fs.mkdirp(outDir)

      if (!htmlFile.includes('index.pug')) {
        const dir = path.join(outDir, fileName)

        await fs.mkdirp(dir)

        const outputPath = path.join(dir, 'index.html')
        await fs.writeFile(outputPath, result)
      } else {
        const outputPath = path.join(outDir, 'index.html')

        await fs.mkdirp(outDir)
        await fs.writeFile(outputPath, result)
      }
    }),
  )

  // Object.entries(languages).map(([name, values]) => {
  //   const unusedLanguageStrings = Object.keys(values).filter(
  //     val => !languageStatistics[name].includes(val),
  //   )

  //   console.log(
  //     `language ${name} has unused translation strings:\n`,
  //     unusedLanguageStrings.join('\n'),
  //   )
  // })

  log.timeTaken(startTime, 'html took')
}
