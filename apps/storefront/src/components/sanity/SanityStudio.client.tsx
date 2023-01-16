/**
 * To keep the worker bundle size small, lazy load the Studio in the client
 * @see https://shopify.dev/custom-storefronts/hydrogen/best-practices/performance#server-bundle-size
 */
import {lazy, type ReactElement, Suspense} from 'react';
import type {StudioProps} from 'sanity';

/**
 * Provide a consistent fallback to prevent hydration mismatch errors.
 */
function StudioFallback(): ReactElement {
  return <></>;
}

/**
 * If server-side rendering, then return the fallback instead of the heavy dependency.
 */
const Studio = import.meta.env.SSR
  ? StudioFallback
  : lazy<(props: Omit<StudioProps, 'config'>) => ReactElement>(
      () =>
        // @ts-expect-error TypeScript won't resolve this correctly
        import('./Studio.client'),
    );

export function SanityStudio(props: Omit<StudioProps, 'config'>) {
  return (
    <Suspense fallback={<StudioFallback />}>
      <Studio {...props} />
    </Suspense>
  );
}
