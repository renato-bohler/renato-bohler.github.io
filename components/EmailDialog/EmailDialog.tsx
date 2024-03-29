import { useEffect, useRef } from 'react';

import { Button } from 'reakit/Button';
import {
  Dialog,
  DialogBackdrop,
  type DialogStateReturn,
} from 'reakit/Dialog';

import { useDialogHistory } from '~/hooks/useDialogHistory';
import { useTheme } from '~/hooks/useTheme';

import { EmailForm } from '../EmailForm/EmailForm';
import { AnimatedIcon } from '../icons/AnimatedIcon/AnimatedIcon';
import { CloseIcon } from '../icons/CloseIcon';

import styles from './EmailDialog.module.css';

type Props = {
  dialog: DialogStateReturn;
};

export const EmailDialog: React.FC<Props> = ({ dialog }) => {
  const { hide } = useDialogHistory({ dialog, id: 'email' });
  const formRef = useRef<HTMLFormElement | null>(null);

  const { isReducedMotion } = useTheme();

  useEffect(() => {
    if (!dialog.visible) return;
    formRef.current?.getElementsByTagName('input')[0]?.focus();
  }, [dialog.visible]);

  useEffect(() => {
    dialog.setAnimated(!isReducedMotion);
  }, [dialog, isReducedMotion]);

  return (
    <DialogBackdrop {...dialog} className={styles.backdrop}>
      <Dialog
        {...dialog}
        aria-label="E-mail contact dialog form"
        className={styles.dialog}
        hide={hide}
        preventBodyScroll
      >
        <header className={styles.header}>
          <h1 className={styles.title}>Let&apos;s talk</h1>

          <Button
            className={styles.closeButton}
            onClick={dialog.hide}
            title="Close dialog"
          >
            {dialog.visible && (
              <AnimatedIcon>
                <CloseIcon />
              </AnimatedIcon>
            )}
          </Button>
        </header>

        <div className={styles.content}>
          <div className={styles.intro}>
            <strong>
              I&apos;m looking forward to hearing from you!
            </strong>
            Fill this form and I&apos;ll reach out as soon as possible
            😊
          </div>

          <EmailForm ref={formRef} />
        </div>
      </Dialog>
    </DialogBackdrop>
  );
};
