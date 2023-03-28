/**
 * To keep the worker bundle size small, only load
 * the Studio and its configuration in the client
 */
import {Studio, type StudioProps, type SourceOptions} from 'sanity';
import {defineSanityConfig} from '@workspace/sanity';

type SanityStudioProps = Omit<StudioProps, 'config'> &
  Pick<SourceOptions, 'projectId' | 'dataset'>;

export function SanityStudio(props: SanityStudioProps) {
  const {projectId, dataset, ...rest} = props;

  const config = defineSanityConfig({
    projectId,
    dataset,
  });

  return <Studio {...rest} config={config} />;
}
