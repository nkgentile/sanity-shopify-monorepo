import {CacheNone, type HydrogenRouteProps} from '@shopify/hydrogen';
import {SanityStudio} from './SanityStudio.client';

export function Studio({response}: HydrogenRouteProps) {
  response.cache(CacheNone());

  return <SanityStudio />;
}
