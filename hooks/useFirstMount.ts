import { useEffect, useState } from 'react';

export const useFirstMount = (): boolean => {
  const [firstMount, setFirstMount] = useState(true);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setFirstMount(false), []);

  return firstMount;
};
