import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
export const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: '404.html',
      precompress: true,
    }),

    alias: {
      // this will match a file
      $db: 'src/db/index',
    },

    paths: {
      base: '',
    },
  },
}

export default config
