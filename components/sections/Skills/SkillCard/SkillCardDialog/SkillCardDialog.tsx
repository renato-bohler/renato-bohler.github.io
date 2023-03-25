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
import useTheme from '~/hooks/useTheme';

import styles from './SkillCardDialog.module.css';

type Props = {
  cardRect?: DOMRect;
  dialog: DialogStateReturn;
  id: string;
  name: string;
  description: React.ReactElement;
  icon: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  scrollBarTrackColor?: string;
  yearsExperience?: number;
};

const SkillCardDialog: React.FC<Props> = ({
  dialog,
  id,
  name,
  description,
  icon,
  backgroundColor,
  textColor,
  scrollBarTrackColor,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { isDarkMode, isReducedMotion } = useTheme();

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

  /**
   * This hack will not be needed when `dvh` gets supported by
   * browsers (dynamic viewport units).
   *
   * See: https://caniuse.com/viewport-unit-variants
   */
  useEffect(() => {
    if (!window) return;

    const setDvhValue = () =>
      document.documentElement.style.setProperty(
        '--dvh',
        `${window.innerHeight * 0.01}px`,
      );
    window.addEventListener('resize', setDvhValue);
    setDvhValue();

    return () => window.removeEventListener('resize', setDvhValue);
  }, []);

  useEffect(() => {
    dialog.setAnimated(!isReducedMotion);
  }, [dialog, isReducedMotion]);

  /**
   * Handles closing dialog on back button.
   */
  const handleDialogClose = () => {
    window.history.back();
    dialog.hide();
  };

  useEffect(() => {
    const popStateHandler = (event: PopStateEvent) => {
      if (!event.state) return;

      const { dialogId } = event.state;
      if (dialogId !== `skills-${id}`) dialog.hide();
    };

    window.addEventListener('popstate', popStateHandler);
    return () => {
      window.removeEventListener('popstate', popStateHandler);
    };
  }, [dialog, id]);

  useEffect(() => {
    if (!dialog.visible) return;
    window.history.pushState({ dialogId: `skills-${id}` }, '', '');
  }, [dialog.visible, id]);

  return (
    <DialogBackdrop {...dialog} className={styles.backdrop}>
      <Dialog
        {...dialog}
        aria-label={`My experience with ${name}`}
        hide={handleDialogClose}
        className={styles.dialog}
        preventBodyScroll={false}
        style={
          {
            boxShadow: `${backgroundColor}${
              isDarkMode ? 30 : 60
            } 0 5px 100px`,
            '--theme-scrollbar-thumb-color': backgroundColor,
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
              onClick={handleDialogClose}
              className={styles.closeButton}
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
