/**
 * To keep the worker bundle size small, only load
 * the Studio and its configuration in the client
 */
import {Studio, type StudioProps} from 'sanity';

export function SanityStudio(props: Omit<StudioProps, 'config'>) {
  return <Studio {...props} config={{dataset: '', projectId: ''}} />;
}
