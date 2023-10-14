import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify/functions'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  // TODO => site: 'https://stargazers.club',
  // integrations: [sitemap()],
})
