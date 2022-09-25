import { Button, ButtonGroup } from '@mui/material';
import countHandler from '../hocs/count-handler';
import { AlbumsService } from '../services/data.services';
import styles from './product.module.scss';

/* eslint-disable-next-line */
export interface ProductProps {}

export function getProductName(): string {
  return 'tickets';
}

interface ProductFull {
  name: string;
  count: number;
  add: () => void;
  remove: () => void;
}

export function Product({ name, count, add, remove }: ProductFull) {
  const albumsService = AlbumsService.getInstance();
  const select = () => {
    albumsService.selected$.next(name);
  };
  return (
    <div className={styles['product']}>
      <ButtonGroup variant="outlined" size="small">
        <Button onClick={add}>+</Button>
        <Button disabled={count === 0} onClick={remove}>
          -
        </Button>
      </ButtonGroup>
      <label onClick={select}>
        {count} → {name}
      </label>
    </div>
  );
}

export default countHandler(Product);
