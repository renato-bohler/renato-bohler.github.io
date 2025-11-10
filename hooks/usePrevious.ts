import { useState } from 'react';

export const usePrevious = <T>(value: T): T => {
  const [previous, setPrevious] = useState(value);
  const [current, setCurrent] = useState(value);

  let result = previous;
  if (value !== current) {
    setPrevious(current);
    setCurrent(value);
    result = current;
  }

  return result;
};
