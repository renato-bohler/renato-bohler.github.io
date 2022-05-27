import { useEffect, useState } from 'react';

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
  name: string;
  description: React.ReactElement;
  icon: React.ReactNode;
  backgroundColor: string;
  textColor: string;
  scrollBarTrackColor?: string;
  yearsExperience?: number;
  wavePath: string;
};

const SkillCardDialog: React.VFC<Props> = ({
  cardRect,
  dialog,
  name,
  description,
  icon,
  backgroundColor,
  textColor,
  scrollBarTrackColor,
  wavePath,
}) => {
  const { isReducedMotion } = useTheme();
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const scrollBarColors = {
    '--theme-scrollbar-thumb-color': backgroundColor,
    ...(scrollBarTrackColor
      ? {
          '--theme-scrollbar-track-color': scrollBarTrackColor,
        }
      : {}),
  } as React.CSSProperties;

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

  useEffect(() => {
    if (isReducedMotion || !cardRect) return;

    const cardCenterX = cardRect.x + cardRect.width / 2;
    const cardCenterY = cardRect.y + cardRect.height / 2;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setTranslate({
      x: cardCenterX - centerX,
      y: cardCenterY - centerY,
    });
  }, [isReducedMotion, cardRect]);

  return (
    <DialogBackdrop {...dialog} className={styles.backdrop}>
      <Dialog
        {...dialog}
        aria-label={`My experience with ${name}`}
        className={styles.dialog}
        style={
          dialog.animating && !isReducedMotion
            ? {
                width: cardRect?.width,
                height: cardRect?.height,
                transform: `translate(${translate.x}px, ${translate.y}px)`,
                ...scrollBarColors,
              }
            : { ...scrollBarColors, opacity: 1 }
        }
      >
        <header
          className={styles.header}
          style={{
            background: backgroundColor,
            color: textColor,
          }}
        >
          <div className={styles['header-row']}>
            <div className={styles.image}>{icon}</div>
            <h1 className={styles.title}>
              {name}
              <VisuallyHidden>.</VisuallyHidden>
            </h1>
            <Button
              onClick={dialog.hide}
              className={styles['close-button']}
              title="Close dialog"
            >
              {dialog.visible && (
                <AnimatedIcon>
                  <CloseIcon />
                </AnimatedIcon>
              )}
            </Button>
          </div>

          <svg
            viewBox="10 0 1400 320"
            className={styles.wave}
            aria-hidden
          >
            <path d={wavePath} />
          </svg>
        </header>

        <div className={styles.content}>{description}</div>
      </Dialog>
    </DialogBackdrop>
  );
};

export default SkillCardDialog;
