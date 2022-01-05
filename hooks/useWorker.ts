import { useEffect, useState } from 'react';

const useWorker = (work: () => void): Worker | undefined => {
  const [worker, setWorker] = useState<Worker>();

  useEffect(() => {
    const code = work.toString();
    const blob = new Blob([`(${code})()`]);
    const workerInstance = new Worker(URL.createObjectURL(blob));

    setWorker(workerInstance);
  }, [work]);

  return worker;
};

export default useWorker;
