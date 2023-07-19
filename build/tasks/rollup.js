import path from 'path'

import log from '@magic/log'
import is from '@magic/types'

import * as roll from 'rollup'

import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import { babel } from '@rollup/plugin-babel'

import rollupGlslify from 'rollup-plugin-glslify'

// import analyze from 'rollup-plugin-analyzer'

import { getCustomScenes, glslMinify } from '../lib/index.js'
// import is from '@magic/types'

const babelGlslMinify = ({ types }) => ({
  visitor: {
    StringLiteral(path) {
      const { value } = path.node
      if (!value || !is.string(value)) {
        return
      }

      // every webgl shader must include void main()
      const main = 'voidmain()'

      // shaders will either include gl_FragColor or gl_Position.
      // if not, they are shader fragments, those will be dealt with later
      const mayInclude = ['gl_FragColor', 'gl_Position']

      if (value.replace(/ /gim, '').includes(main)) {
        if (mayInclude.some(inc => value.includes(inc))) {
          const cleaned = glslMinify(path.node.value)
          // console.log('shader', path.node.value.length, cleaned.length)
          path.node.value = cleaned
        }
      }
    },
  },
})

const watchPromise = ({ inputOptions, outputOptions }) =>
  new Promise((resolve, reject) => {
    const watcher = roll.watch({ ...inputOptions, output: [outputOptions] })

    let startTime = log.hrtime()

    watcher.on('event', async e => {
      if (e.code === 'START') {
        startTime = log.hrtime()
        log.info('starting rollup build')
      }

      if (e.code === 'BUNDLE_END') {
        await e.result.write(outputOptions)
      }

      if (e.code === 'END') {
        log.timeTaken(startTime, 'rollup rebuild took')
        resolve()
      }

      if (e.code === 'ERROR') {
        reject(e)
      }
    })
  })

export const rollup = async args => {
  const startTime = log.hrtime()

  const { glbUrl, mapUrl, staticUrl, mediaUrl, rootUrl, sandboxUrl, sandbox, staging } = args

  let __DISTANCE__ = staging ? 5e12 : 20

  log.warn('DISTANCE is', __DISTANCE__)

  const { string: __CUSTOM_SCENES__, object: sceneObject } = await getCustomScenes(args)

  const plugins = [
    rollupGlslify({
      // Default
      include: ['.vs', '.fs', '.vert', '.frag', '.glsl', '.shader'],

      // Undefined by default
      exclude: 'node_modules/**',

      // Compress shader by default using logic from rollup-plugin-glsl
      compress: true,
    }),

    replace({
      preventAssignment: true,
      __GLB_URL__: glbUrl,
      __STATIC_URL__: staticUrl,
      __MEDIA_URL__: mediaUrl,
      __MAP_URL__: mapUrl,
      __ROOT_URL__: rootUrl,
      __SANDBOX_URL__: sandboxUrl,
      __DISTANCE__,
      __CUSTOM_SCENES__,
    }),
    nodeResolve(),

    babel({
      presets: [['@babel/preset-modules']],
      plugins: [babelGlslMinify],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ]

  const sceneInputs = Object.fromEntries(
    Object.entries(sceneObject).map(([_, name]) => [
      `scenes/${name}`,
      `src/js/three/scenes/${name}.js`,
    ]),
  )

  let { outputDir: dir } = args

  // if (sandbox) {
  //   dir = path.join(dir, 'src')
  // }

  const inputOptions = {
    input: {
      main: args.jsInput,
      ...sceneInputs,
    },
    preserveEntrySignatures: 'exports-only',
    plugins,
  }

  const outputOptions = {
    format: 'esm',
    sourcemap: !args.isProd,
    dir,
    manualChunks(id) {
      if (id.includes('src/js/lib')) {
        return 'vendor'
      }

      if (id.includes('node_modules/three/')) {
        return 'vendor'
      }

      if (id.includes('node_modules/leaflet/')) {
        return 'vendor'
      }
    },
    chunkFileNames: '[name].js',
  }

  if (!args.watch) {
    // create a bundle
    const bundle = await roll.rollup(inputOptions)

    // write the bundle to disk
    await bundle.write(outputOptions)

    log.timeTaken(startTime, 'rollup took')
  } else {
    try {
      await watchPromise({ inputOptions, outputOptions })
    } catch (e) {
      log.error('rollup build error', e)
    }
  }
}
