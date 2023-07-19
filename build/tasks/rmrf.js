import fs from '@magic/fs'
import log from '@magic/log'

export const rmrf = async ({ outputDir }) => {
  const startTime = log.hrtime()

  await fs.rmrf(outputDir)

  await fs.mkdirp(outputDir)

  log.timeTaken(startTime, 'rmrf task took')
}
