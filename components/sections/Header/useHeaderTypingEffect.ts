import { useState } from 'react';

import { useInView } from 'react-intersection-observer';

import { useTheme } from '~/hooks/useTheme';
import { useTypingEffect } from '~/hooks/useTypingEffect';

type Options = {
  changeSubtitleDelayMs?: number;
  firstName: string;
  keyStrokeMaxVarianceMs?: number;
  keyStrokeMinTimeMs?: number;
  lastName: string;
  onInViewChange?: (inView: boolean) => void;
  startDelayMs?: number;
  subtitles: string[];
};

type Result = {
  firstName: string;
  inView: boolean;
  isFirstNameTypingComplete: boolean;
  isFullNameTypingComplete: boolean;
  isLastNameTypingComplete: boolean;
  isSubtitleTypingComplete: boolean;
  lastName: string;
  ref: (node?: Element | null) => void;
  subtitle: string;
};

const getNewSubtitle = (subtitles: string[], current?: string) => {
  const candidates = subtitles.filter(
    (candidate) => candidate !== current,
  );
  return candidates[Math.floor(Math.random() * candidates.length)];
};

export const useHeaderTypingEffect = ({
  changeSubtitleDelayMs = 3000,
  keyStrokeMaxVarianceMs = 70,
  keyStrokeMinTimeMs = 50,
  startDelayMs = 1000,
  ...options
}: Options): Result => {
  const { isReducedMotion } = useTheme();

  const [subtitleTimeout, setSubtitleTimeout] = useState(0);

  const { inView, ref } = useInView({
    initialInView: true,
    onChange: (inView) => {
      options.onInViewChange?.(inView);

      if (inView) {
        firstName.type(options.firstName);
      } else {
        clearTimeout(subtitleTimeout);
        firstName.reset();
        lastName.reset();
        subtitle.reset();
      }
    },
    threshold: 0.75,
  });

  const commonOptions = {
    keyStrokeMaxVarianceMs,
    keyStrokeMinTimeMs,
  };

  const firstName = useTypingEffect({
    onEnd: () => lastName.type(options.lastName),
    startDelayMs,
    ...commonOptions,
  });

  const lastName = useTypingEffect({
    onEnd: () => {
      subtitle.type(options.subtitles[0]);
    },
    ...commonOptions,
  });

  const subtitle = useTypingEffect({
    onEnd: (currentSubtitle) => {
      clearTimeout(subtitleTimeout);

      setSubtitleTimeout(
        window.setTimeout(() => {
          subtitle.type(
            getNewSubtitle(options.subtitles, currentSubtitle),
          );
        }, changeSubtitleDelayMs),
      );
    },
    ...commonOptions,
  });

  const isFirstNameTypingComplete =
    firstName.text === options.firstName;
  const isLastNameTypingComplete = lastName.text === options.lastName;
  const isFullNameTypingComplete =
    isFirstNameTypingComplete && isLastNameTypingComplete;
  const isSubtitleTypingComplete = options.subtitles.includes(
    subtitle.text,
  );

  return {
    firstName:
      inView && !isReducedMotion ? firstName.text : options.firstName,
    inView,
    isFirstNameTypingComplete:
      isFirstNameTypingComplete || isReducedMotion,
    isFullNameTypingComplete:
      isFullNameTypingComplete || isReducedMotion,
    isLastNameTypingComplete:
      isLastNameTypingComplete || isReducedMotion,
    isSubtitleTypingComplete:
      isSubtitleTypingComplete || isReducedMotion,
    lastName:
      inView && !isReducedMotion ? lastName.text : options.lastName,
    ref,
    subtitle: inView
      ? isReducedMotion
        ? options.subtitles[0]
        : subtitle.text
      : '',
  };
};
