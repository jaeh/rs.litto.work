import fs from '@magic/fs'
import log from '@magic/log'

export const copy = async ({ outputDir, staticDir }) => {
  const startTime = log.hrtime()

  const dirs = await fs.getDirectories(staticDir)

  await Promise.all(
    dirs.map(async dir => {
      const outDir = dir.replace(staticDir, outputDir)
      fs.mkdirp(outDir)
    }),
  )

  const files = await fs.getFiles(staticDir)

  await Promise.all(
    files.map(async file => {
      const fileContent = await fs.readFile(file)

      const outputPath = file.replace(staticDir, outputDir)

      await fs.writeFile(outputPath, fileContent)
    }),
  )

  log.timeTaken(startTime, 'copy task took')
}
