import {defineConfig, isDev} from 'sanity'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import Navbar from './src/components/studio/Navbar'
import {customDocumentActions} from './src/plugins/customDocumentActions'
import {schemaTypes} from './src/schemaTypes'
import {structure} from './src/structure'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {colorInput} from '@sanity/color-input'
import {visionTool} from '@sanity/vision'

const devOnlyPlugins = [visionTool()]

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  projectId,
  dataset,

  name: 'default',
  title: 'Hydrogen Sanity',

  plugins: [
    presentationTool({
      previewUrl: {
        initial: process.env.SANITY_STUDIO_PREVIEW_ORIGIN!,
        previewMode: {
          enable: 'api/preview',
          disable: 'api/preview',
        },
      },
      allowOrigins: [process.env.SANITY_STUDIO_PREVIEW_ORIGIN!],
    }),
    structureTool({structure}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },

  studio: {
    components: {
      navbar: Navbar,
    },
  },
})
