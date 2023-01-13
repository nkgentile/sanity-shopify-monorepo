import {definePlugin} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {types} from './schema'

interface CoreConfig {
  /* nothing here yet */
}

/**
 * Usage in `sanity.config.ts` (or .js)
 *
 * ```ts
 * import {defineConfig} from 'sanity'
 * import {core} from 'sanity-plugin-core'
 *
 * export default defineConfig({
 *   // ...
 *   plugins: [core()],
 * })
 * ```
 */
export const core = definePlugin<CoreConfig | void>((config = {}) => {
  // eslint-disable-next-line no-console
  console.log('hello from sanity-plugin-core')
  return {
    name: 'sanity-plugin-core',
    plugins: [deskTool(), visionTool()],

    schema: {
      types,
    },
  }
})
