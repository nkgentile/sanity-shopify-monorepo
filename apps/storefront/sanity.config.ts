import type {ClientConfig} from '@sanity/client';

export const apiVersion = '2023-01-14';
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;

export const clientConfig: ClientConfig = {
  apiVersion,
  dataset,
  projectId,
};
