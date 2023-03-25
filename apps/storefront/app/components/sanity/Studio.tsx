/**
 * To keep the worker bundle size small, lazy load the Studio in the client
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
 * @see https://remix.run/docs/en/1.14.3/guides/constraints#browser-only-code-on-the-server
 */
const _Studio =
  typeof document === 'undefined'
    ? StudioFallback
    : lazy<(props: Omit<StudioProps, 'config'>) => ReactElement>(
        () => import('./Studio.client'),
      );

export function Studio(props: Omit<StudioProps, 'config'>) {
  return (
    <Suspense fallback={<StudioFallback />}>
      <_Studio {...props} />
    </Suspense>
  );
}
