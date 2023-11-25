import { useEffect, useRef } from 'react';

import {
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import { Button } from 'reakit/Button';
import {
  Dialog,
  DialogBackdrop,
  DialogStateReturn,
} from 'reakit/Dialog';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import AnimatedIcon from '~/components/icons/AnimatedIcon/AnimatedIcon';
import CloseIcon from '~/components/icons/Close';
import useDialogHistory from '~/hooks/useDialogHistory';
import useFirstMount from '~/hooks/useFirstMount';
import useTheme from '~/hooks/useTheme';

import styles from './SkillCardDialog.module.css';

export type Props = {
  backgroundColor: string;
  cardRect?: DOMRect;
  description: React.ReactElement;
  dialog: DialogStateReturn;
  icon: React.ReactNode;
  id: string;
  name: string;
  scrollBarTrackColor?: string;
  textColor: string;
  yearsExperience?: number;
};

const SkillCardDialog: React.FC<Props> = ({
  backgroundColor,
  description,
  dialog,
  icon,
  id,
  name,
  scrollBarTrackColor,
  textColor,
}) => {
  const isFirstMount = useFirstMount();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { hide } = useDialogHistory({ dialog, id: `skills-${id}` });

  const { colorScheme, isReducedMotion } = useTheme();

  useEffect(() => {
    if (!scrollRef.current) return;

    if (dialog.visible) {
      disableBodyScroll(scrollRef.current, {
        reserveScrollBarGap: true,
      });
    } else {
      enableBodyScroll(scrollRef.current);
    }
  }, [dialog.visible]);

  useEffect(() => {
    dialog.setAnimated(!isReducedMotion);
  }, [dialog, isReducedMotion]);

  if (isFirstMount) return <div aria-hidden id={dialog.baseId} />;

  return (
    <DialogBackdrop {...dialog} className={styles.backdrop}>
      <Dialog
        {...dialog}
        aria-label={`My experience with ${name}`}
        className={styles.dialog}
        hide={hide}
        preventBodyScroll={false}
        style={
          {
            '--theme-scrollbar-thumb-color': backgroundColor,
            boxShadow: `${backgroundColor}${
              colorScheme === 'dark' ? 30 : 60
            } 0 5px 100px`,
            ...(scrollBarTrackColor
              ? {
                  '--theme-scrollbar-track-color':
                    scrollBarTrackColor,
                }
              : {}),
          } as React.CSSProperties
        }
      >
        <header
          className={styles.header}
          style={{
            background: backgroundColor,
            color: textColor,
          }}
        >
          <div
            className={styles.headerRow}
            style={{ borderBottomColor: backgroundColor }}
          >
            <div className={styles.image}>{icon}</div>
            <h1 className={styles.title}>
              {name}
              <VisuallyHidden>.</VisuallyHidden>
            </h1>
            <Button
              className={styles.closeButton}
              onClick={hide}
              title="Close dialog"
            >
              {dialog.visible && (
                <AnimatedIcon>
                  <CloseIcon />
                </AnimatedIcon>
              )}
            </Button>
          </div>
        </header>

        <div className={styles.content} ref={scrollRef}>
          {description}
        </div>
      </Dialog>
    </DialogBackdrop>
  );
};

export default SkillCardDialog;
