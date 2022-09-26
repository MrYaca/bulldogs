// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StoreMerchandise } from '@store/merchandise';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <StoreMerchandise
      title={''}
      avatar={''}
      name={''}
      active={false}
    ></StoreMerchandise>
  );
}

export default App;
