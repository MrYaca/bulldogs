import styles from './squad-stats.module.scss';

/* eslint-disable-next-line */
export interface SquadStatsProps {}

export function SquadStats(props: SquadStatsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SquadStats!</h1>
    </div>
  );
}

export default SquadStats;
