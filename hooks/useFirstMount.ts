import { useEffect, useState } from 'react';

export const useFirstMount = (): boolean => {
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => setFirstMount(false), []);

  return firstMount;
};
