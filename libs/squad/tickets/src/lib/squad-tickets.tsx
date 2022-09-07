import styles from './squad-tickets.module.scss';

/* eslint-disable-next-line */
export interface SquadTicketsProps {}

export function SquadTickets(props: SquadTicketsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SquadTickets!</h1>
    </div>
  );
}

export default SquadTickets;
