import type {LinksFunction} from '@shopify/remix-oxygen';
import {lazy, type ReactElement, Suspense} from 'react';
import type {StudioProps} from 'sanity';
import styles from '~/styles/studio.css';

/**
 * Provide a consistent fallback to prevent hydration mismatch errors.
 */
function SanityStudioFallback(): ReactElement {
  return <></>;
}

/**
 * If server-side rendering, then return the fallback instead of the heavy dependency.
 * @see https://remix.run/docs/en/1.14.3/guides/constraints#browser-only-code-on-the-server
 */
const SanityStudio =
  typeof document === 'undefined'
    ? SanityStudioFallback
    : lazy<(props: Omit<StudioProps, 'config'>) => ReactElement>(() =>
        /**
         * `lazy` expects the component as the default export
         * @see https://react.dev/reference/react/lazy
         */
        import('~/components/SanityStudio.client').then((m) => ({
          default: m.SanityStudio,
        })),
      );

/**
 * (Optional) Prevent Studio from being cached
 */
export function headers(): HeadersInit {
  return {
    'Cache-Control': 'no-store',
  };
}

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}];
};

export default function Studio() {
  return (
    <Suspense fallback={<SanityStudioFallback />}>
      <SanityStudio basePath="/studio" />
    </Suspense>
  );
}
