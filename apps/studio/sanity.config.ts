import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Demo Ecommerce',

  projectId: 'k4hg38xw',
  dataset: 'migrate-storefront',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
