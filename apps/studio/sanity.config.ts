import {defineConfig} from 'sanity'
import {core} from 'sanity-plugin-core'

export default defineConfig({
  name: 'default',
  title: 'Noah\'s Sandbox',

  projectId: 'odh6ii6d',
  dataset: 'production',

  plugins: [core()],
})
