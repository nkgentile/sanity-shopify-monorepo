import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { types } from "./schema";

/**
 * Configuration options that will be passed in
 * from the environment or application
 */
type SanityConfig = {
  projectId: string;
  dataset: string;
  title?: string;
}

export function defineSanityConfig(config: SanityConfig){
  const {projectId, dataset, title = 'Sanity Studio'} = config;

    return defineConfig({
        name: 'default',
        title,
      
        projectId,
        dataset,
      
        plugins: [deskTool(), visionTool()],
      
        schema: {
          types,
        },
      })    
}