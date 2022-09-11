import { Avatar, Button, Chip, Divider } from '@mui/material';
import styles from './store-merchandise.module.scss';

/* eslint-disable-next-line */
export interface StoreMerchandiseProps {
  title: string;
  avatar: string;
  name: string;
}

export function StoreMerchandise(props: StoreMerchandiseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StoreMerchandise!</h1>
      <Chip
        avatar={<Avatar alt={props.name} src={props.avatar} />}
        label={props.name}
      />

      <Avatar alt={props.name} src={props.avatar} />
      <Chip label={props.name} />
      <Divider textAlign="left">ACTIONS</Divider>
      <Button variant="contained">Save</Button>
    </div>
  );
}

export default StoreMerchandise;
