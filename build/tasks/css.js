import path from 'path'

import fs from '@magic/fs'
import log from '@magic/log'
import mCss from '@magic/css'

export const css = async ({ isProd, inputDir, outputDir, sandbox }) => {
  const startTime = log.hrtime()

  const cssFilePath = path.join(inputDir, 'css', 'index.js')

  const { theme, variables } = await import(cssFilePath)

  const result = await mCss(theme(variables))

  const staticUrl = isProd ? 'https://static.artificialmuseum.com' : 'http://localhost:8002'

  result.css = result.css.replace(/__STATIC_URL__/gim, staticUrl)
  result.minified = result.minified.replace(/__STATIC_URL__/gim, staticUrl)

  await fs.mkdirp(outputDir)

  const outputFile = path.join(outputDir, 'main.css')

  const out = isProd ? result.minified : result.css

  await fs.writeFile(outputFile, out)

  log.timeTaken(startTime, 'css took')
}
