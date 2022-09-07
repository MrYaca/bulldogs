import styles from './squad-players.module.scss';

/* eslint-disable-next-line */
export interface SquadPlayersProps {}

export function SquadPlayers(props: SquadPlayersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SquadPlayers!</h1>
    </div>
  );
}

export default SquadPlayers;
