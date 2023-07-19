#!/bin/env node

import cli from '@magic/cli'
import log from '@magic/log'

import { startCluster } from './startCluster.js'

const cliConfig = {
  options: [
    ['--help', '-help', 'help', '--h', '-h'],
    ['--watch', '-w'],
    ['--port', '-p'],
    '--static-url',
    '--map-url',
    '--glb-url',
    '--media-url',
    '--root-url',
    '--sandbox-url',
    '--staging',
    ['--sandbox', '--box'],
  ],
  default: {
    '--port': 8000,
    '--glb-url': 'http://localhost:8001',
    '--static-url': 'http://localhost:8002',
    '--map-url': 'http://map{s}.localhost:8003',
    '--media-url': 'http://localhost:8004',
    '--sandbox-url': 'http://localhost:8000',
    '--root-url': 'http://localhost:8000',
  },
  env: [[['--production', '--prod'], 'NODE_ENV', 'production']],
  single: [
    '--port',
    '--glb-url',
    '--map-url',
    '--static-url',
    '--media-url',
    '--root-url',
    '--sandbox-url',
    '--staging',
    '--sandbox',
  ],
  help: {
    name: 'thesystem.at build tool',
    header: 'builds the map and threejs client applications for thesystem.at',
    options: {
      '--watch': 'serve and rebuild files on change',
      '--port': 'port to serve bundled files from',
      '--static-url': 'url of the static.artificialmuseum.com server',
      '--map-url': 'url of the map.artificialmuseum.com server',
      '--glb-url': 'url of the glb.artificialmuseum.com server',
      '--media-url': 'url of the media.artificialmuseum.com server',
      '--root-url': 'url of the artificialmuseum.com server, hosting the sandbox.js file',
      '--sandbox-url': 'url of the local sandbox environment',
      '--staging': 'sets distance of all artifacts to infinity',
      '--sandbox': 'create a sandbox build',
    },
  },
  example: `
production:
NODE_ENV=production ./build/bin.js

create development bundles && watch src directory:
./build/bin.js --watch
`,
}

const run = async () => {
  const res = cli(cliConfig)

  res.args.staging = res.args.hasOwnProperty('staging')

  await startCluster(res)
}

run()

process
  .on('unhandledRejection', error => {
    log.error('unhandled rejection', error)
    process.exit()
  })
  .on('uncaughtException', error => {
    log.error('uncaught exception', error)
    process.exit()
  })
