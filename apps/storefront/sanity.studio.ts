import {defineConfig} from 'sanity';
import {core} from 'sanity-plugin-core';
import {dataset, projectId} from './sanity.config';

export const studioConfig = defineConfig({
  name: 'default',
  title: "Noah's Sandbox",

  projectId,
  dataset,

  plugins: [core()],
});
