import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: 'https://www.copuslaw.com/',
  integrations: [sitemap()],
})
