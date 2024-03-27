import { useEffect } from 'react';

import { init, isInitialized } from '@fullstory/browser';

const useFullStory = () => {
  useEffect(() => {
    if (isInitialized()) return;
    init({ orgId: process.env.NEXT_PUBLIC_FULLSTORY_ORG_ID });
  }, []);
};

export default useFullStory;
