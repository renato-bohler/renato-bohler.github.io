import { useEffect } from 'react';

import { DialogStateReturn } from 'reakit';

type DialogHistory = (arg: {
  id: string;
  dialog: DialogStateReturn;
}) => { hide: () => void };

const useDialogHistory: DialogHistory = ({ id, dialog }) => {
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

export default useDialogHistory;
