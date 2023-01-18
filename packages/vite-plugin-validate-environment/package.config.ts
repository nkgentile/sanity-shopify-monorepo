// package.config.ts

import {defineConfig} from '@sanity/pkg-utils'

export default defineConfig({
  minify: true,
  dist: './lib',
  runtime: 'node',
  extract: { rules: { 
    'ae-missing-release-tag': 'warn',
  } }
})