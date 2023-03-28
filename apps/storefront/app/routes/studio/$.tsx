import {useLoaderData} from '@remix-run/react';
import type {LinksFunction, LoaderArgs} from '@shopify/remix-oxygen';
import {lazy, type ReactElement, Suspense} from 'react';
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
    : lazy(() =>
        /**
         * `lazy` expects the component as the default export
         * @see https://react.dev/reference/react/lazy
         */
        import('~/components/SanityStudio.client').then((m) => ({
          default: m.SanityStudio,
        })),
      );

export function loader({context}: LoaderArgs) {
  return {
    projectId: context.env.PUBLIC_SANITY_PROJECT_ID!,
    dataset: context.env.PUBLIC_SANITY_DATASET!,
  };
}

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
  const {projectId, dataset} = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={<SanityStudioFallback />}>
      <SanityStudio
        basePath="/studio"
        projectId={projectId}
        dataset={dataset}
      />
    </Suspense>
  );
}
