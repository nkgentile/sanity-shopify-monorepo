import {defineSanityConfig} from '@workspace/sanity'

export default defineSanityConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
})
