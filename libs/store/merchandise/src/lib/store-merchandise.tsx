import styles from './store-merchandise.module.scss';

/* eslint-disable-next-line */
export interface StoreMerchandiseProps {}

export function StoreMerchandise(props: StoreMerchandiseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StoreMerchandise!</h1>
    </div>
  );
}

export default StoreMerchandise;
