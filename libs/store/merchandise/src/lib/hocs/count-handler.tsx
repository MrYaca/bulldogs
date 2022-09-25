import { ComponentType, useState } from 'react';

export function countHandler<T>(Component: ComponentType<T>) {
  return (hocProps: Omit<T, 'count' | 'add' | 'remove'>) => {
    const [count, setCount] = useState(0);

    const add = () => {
      setCount(count + 1);
    };

    const remove = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    return (
      <Component {...(hocProps as T)} count={count} add={add} remove={remove} />
    );
  };
}

export default countHandler;
