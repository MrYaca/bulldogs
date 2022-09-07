import styles from './store-tickets.module.scss';

/* eslint-disable-next-line */
export interface StoreTicketsProps {}

export function StoreTickets(props: StoreTicketsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StoreTickets!</h1>
    </div>
  );
}

export default StoreTickets;
