/**
 * To keep the worker bundle size small, only load
 * the Studio and its configuration in the client
 */
import {Studio, type StudioProps} from 'sanity';
import {defineSanityConfig} from '@workspace/sanity';

export function SanityStudio(props: Omit<StudioProps, 'config'>) {
  const config = defineSanityConfig({
    projectId: 'k4hg38xw',
    dataset: 'migrate-storefront',
  });

  return <Studio {...props} config={config} />;
}
