import {Studio as StudioComponent, type StudioProps} from 'sanity';
import {studioConfig} from '../../../sanity.studio';
import './Studio.css';

export function Studio(props: Omit<StudioProps, 'config'>) {
  return <StudioComponent {...props} config={studioConfig} />;
}

export {Studio as default};
