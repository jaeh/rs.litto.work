// import path from 'path'

import gss from '@grundstein/gss'

export const serve = args => {
  const { port, outputDir, sandbox } = args

  let dir = outputDir
  // if (sandbox) {
  //   dir = path.join(dir, 'src')
  // }

  gss({
    corsOrigin: '*',
    port,
    dir,
    noCache: true,
  })
}
