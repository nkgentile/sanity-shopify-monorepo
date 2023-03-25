import {Studio as _Studio, type StudioProps} from 'sanity';

export default function Studio(props: Omit<StudioProps, 'config'>) {
  return <_Studio {...props} config={{dataset: '', projectId: ''}} />;
}
