import { useEffect } from 'react';

import { init } from '@fullstory/browser';

const useFullStory = () => {
  useEffect(() => {
    init({ orgId: process.env.NEXT_PUBLIC_FULLSTORY_ORG_ID });
  }, []);
};

export default useFullStory;
