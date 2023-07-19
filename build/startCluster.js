import path from 'path'
import cluster from 'cluster'

import log from '@magic/log'

import { copy, css, html, rmrf, rollup, watch, serve, prepareData } from './tasks/index.js'

export const startCluster = async res => {
  const t = new Date().getTime()

  const cwd = process.cwd()

  const locals = await prepareData(res.args)

  const isProd = process.env.NODE_ENV === 'production'
  const outputDir = isProd ? 'docs' : 'dev-bundle'

  const args = {
    ...res.args,
    cwd,
    inputDir: path.join(cwd, 'src'),
    watchDir: cwd,
    outputDir: path.join(cwd, outputDir),
    isProd: process.env.NODE_ENV === 'production',
    staticDir: path.join(cwd, 'src', 'static'),
    jsInput: 'src/js/main.js',
    locals,
  }

  if (cluster.isMaster) {
    log.warn('starting build')

    const buildWorker = cluster.fork()

    // only fork serveWorker if we are watching
    let serveWorker
    if (args.watch) {
      serveWorker = cluster.fork()
    }

    cluster.on('message', (_, msg) => {
      if (msg.filename) {
        buildWorker.send(msg)
      }

      if (msg === 'build done' && serveWorker && !serveWorker.started) {
        serveWorker.started = true
        serveWorker.send('serve')
      }
    })
  } else if (cluster.isWorker) {
    const { worker } = cluster

    if (worker.id === 1) {
      process.on('message', async msg => {
        if (!msg.filename) {
          throw new Error('buildWorker: msg did not contain .filename')
        }

        args.locals = await prepareData({
          ...res.args,
          filename: msg.filename,
        })

        const globalFileList = ['config.js', 'data.js']

        const buildAll = globalFileList.includes(msg.filename) || msg.dir.includes('db')

        const extension = path.extname(msg.filename)
        // js files get watched by rollup
        if (!buildAll && extension === '.js' && !msg.dir.endsWith('css')) {
          return
        }

        const tasks = []

        // handle staticdir first, there might be css and html files there
        if (buildAll || msg.filename.startsWith(args.staticDir)) {
          tasks.push(copy({ ...args }))
        }

        if (buildAll || extension === '.css' || msg.dir.endsWith('css')) {
          tasks.push(css({ ...args }))
        }

        if (buildAll || extension === '.html' || extension === '.svg' || extension === '.pug') {
          tasks.push(html({ ...args }))
        }

        await Promise.all(tasks)
      })

      const startTime = log.hrtime()

      // make sure this task finishes first
      await rmrf({ ...args })

      await Promise.all([
        rollup({ ...args }),
        html({ ...args }),
        copy({ ...args }),
        css({ ...args }),
      ])

      log.timeTaken(startTime, log.color('green', 'build took'))

      if (!args.watch) {
        process.exit()
      }

      process.send('build done')
    } else if (worker.id === 2) {
      process.on('message', msg => {
        if (msg === 'serve') {
          serve({ ...args })
        }
      })

      await watch({ ...args })
    }
  }
}
