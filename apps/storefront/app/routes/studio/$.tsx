import {Studio as SanityStudio} from '~/components/sanity';

export function headers(): HeadersInit {
  return {
    'Cache-Control': 'no-store',
  };
}

export default function Studio() {
  return <SanityStudio basePath="/studio" />;
}
