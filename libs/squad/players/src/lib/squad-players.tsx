import styles from './squad-players.module.scss';

/* eslint-disable-next-line */
export interface SquadPlayersProps {}

interface Player {
  name: string;
  number: number;
  age: number;
  position: string;
}

const createPlayer = ({ name, number, age, position }: Player) => ({
  name,
  number,
  age,
  position,
  description() {
    return `${name} → ${position}`;
  },
});

const player1 = createPlayer({
  name: 'Sergio',
  number: 35,
  age: 40,
  position: 'Fullback',
});

player1.description(); //?

export function SquadPlayers(props: SquadPlayersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SquadPlayers!</h1>
    </div>
  );
}

export default SquadPlayers;
