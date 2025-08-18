// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: 'https://aeondesktop.github.io',

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Source Sans 3',
        cssVariable: '--font-source-sans',
        weights: [400, 700]
      },
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-inter',
        weights: [400, 700]
      }
    ]
  },

  integrations: [solidJs()]
})