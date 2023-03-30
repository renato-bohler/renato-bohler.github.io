import { useEffect, useRef } from 'react';

import { Button } from 'reakit/Button';
import {
  Dialog,
  DialogBackdrop,
  DialogStateReturn,
} from 'reakit/Dialog';

import useTheme from '~/hooks/useTheme';

import EmailForm from '../EmailForm/EmailForm';
import AnimatedIcon from '../icons/AnimatedIcon/AnimatedIcon';
import CloseIcon from '../icons/Close';
import styles from './EmailDialog.module.css';

type Props = {
  dialog: DialogStateReturn;
};

const EmailDialog: React.FC<Props> = ({ dialog }) => {
  const focusRef = useRef<HTMLInputElement | null>(null);

  const { isReducedMotion } = useTheme();

  useEffect(() => {
    if (dialog.visible) focusRef.current?.focus();
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
        preventBodyScroll
      >
        <header className={styles.header}>
          <h1 className={styles.title}>Let&apos;s talk</h1>

          <Button
            onClick={dialog.hide}
            className={styles.closeButton}
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
              Want to get in touch? I&apos;m looking forward to
              hearing from you!
            </strong>
            Fill this form and I&apos;ll reach out as soon as possible
            😊
          </div>

          <EmailForm />
        </div>
      </Dialog>
    </DialogBackdrop>
  );
};

export default EmailDialog;
