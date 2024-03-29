import { useEffect } from 'react';

import { init, isInitialized } from '@fullstory/browser';

const ORG_ID = process.env.NEXT_PUBLIC_FULLSTORY_ORG_ID;

export const useFullStory = () => {
  useEffect(() => {
    if (!ORG_ID) return;
    if (isInitialized()) return;
    init({ orgId: ORG_ID });
  }, []);
};
