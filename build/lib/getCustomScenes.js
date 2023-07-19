import path from 'path'

import error from '@magic/error'
import fs from '@magic/fs'
import is from '@magic/types'

import { SCENE_TYPES } from '../db.js'

import { stringifyObject } from '../lib/stringifyObject.js'

export const getCustomScenes = async args => {
  const { inputDir } = args

  const sceneDir = path.join(inputDir, 'js', 'three', 'scenes')

  const toSceneName = file => {
    const name = path.basename(file).replace('.js', '')
    const type = SCENE_TYPES[name]

    if (!is.number(type)) {
      throw error(
        'E_UNDEFINED_SCENE',
        `scene ${name} from ${file} is not defined as type in SCENE_TYPES`,
      )
    }

    return [type, name]
  }

  const findSceneFiles = async (dir, root) => {
    if (root !== dir) {
      const indexPath = path.join(dir, 'index.js')
      const indexExists = await fs.exists(indexPath)
      if (indexExists) {
        return toSceneName(root, indexPath)
      }
    }

    const files = await fs.getFiles(dir, { depth: 0 })

    return files
      .map(file => {
        const base = path.basename(file)
        if (!base.endsWith('.js')) {
          return
        }

        if (base === 'index.js') {
          if (root === dir) {
            return
          }
        }

        const sceneFile = toSceneName(file)
        return sceneFile
      })
      .filter(a => a)
  }

  const dirs = await fs.getDirectories(sceneDir, { depth: 1 })
  const files = await Promise.all(dirs.map(async dir => await findSceneFiles(dir, sceneDir)))

  const object = Object.fromEntries(files.flat(1))

  const string = stringifyObject(object, false).replace(/\n/gim, '')

  return {
    string,
    object,
  }
}
