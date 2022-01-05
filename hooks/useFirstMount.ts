import { useEffect, useState } from 'react';

const useFirstMount = (): boolean => {
  const [firstMount, setFirstMount] = useState(true);

  useEffect(() => setFirstMount(false), []);

  return firstMount;
};

export default useFirstMount;
