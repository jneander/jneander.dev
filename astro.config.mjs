import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import {defineConfig} from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],

  markdown: {
    syntaxHighlight: 'prism',
  },

  devToolbar: {
    enabled: false,
  },

  redirects: {
    '/resume': '/experience',
  },

  site: 'https://jneander.dev',
})
