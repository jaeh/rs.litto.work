import path from 'path'

import fs from '@magic/fs'
import log from '@magic/log'

export const watch = async args => {
  log.info(`watching ${args.watchDir} for changes`)

  const srcDirs = await fs.getDirectories(path.join(args.watchDir, 'src'))
  const dbDirs = await fs.getDirectories(path.join(args.watchDir, 'db'))

  const dirs = [...srcDirs, ...dbDirs]

  let lastTime = new Date().getTime()

  dirs.forEach(dir => {
    fs.watch(dir, (_, filename) => {
      const thisTime = new Date().getTime()

      const waitTime = thisTime - lastTime

      lastTime = thisTime

      // only accept changes every 10 milliseconds
      if (waitTime < 10) {
        return
      }

      if (filename) {
        process.send({ dir, filename })
      }
    })
  })
}
