import { Button, ButtonGroup } from '@mui/material';
import countHandler from '../hocs/count-handler';
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
  return (
    <div className={styles['product']}>
      <ButtonGroup variant="outlined" size="small">
        <Button onClick={add}>+</Button>
        <Button disabled={count === 0} onClick={remove}>
          -
        </Button>
      </ButtonGroup>
      <label>
        {count} → {name}
      </label>
    </div>
  );
}

export default countHandler(Product);
