import { useEffect } from 'react';

import { DialogStateReturn } from 'reakit';

type DialogHistory = (arg: {
  dialog: DialogStateReturn;
  id: string;
}) => { hide: () => void };

export const useDialogHistory: DialogHistory = ({ dialog, id }) => {
  const hide = () => {
    window.history.back();
    dialog.hide();
  };

  useEffect(() => {
    const popStateHandler = (event: PopStateEvent) => {
      if (!event.state) return;

      const { dialogId } = event.state;
      if (dialogId !== id) dialog.hide();
    };

    window.addEventListener('popstate', popStateHandler);
    return () => {
      window.removeEventListener('popstate', popStateHandler);
    };
  }, [dialog, id]);

  useEffect(() => {
    if (!dialog.visible) return;
    window.history.pushState({ dialogId: id }, '', '');
  }, [dialog.visible, id]);

  return { hide };
};
