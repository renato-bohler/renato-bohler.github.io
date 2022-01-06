import { useEffect, useMemo, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import useTypingEffect from '~/hooks/useTypingEffect';

type Options = {
  firstName: string;
  lastName: string;
  subtitles: string[];
  startDelayMs?: number;
  changeSubtitleDelayMs?: number;
  keyStrokeMinTimeMs?: number;
  keyStrokeMaxVarianceMs?: number;
};

type Result = {
  ref: (node?: Element | null | undefined) => void;
  inView: boolean;
  firstName: string;
  lastName: string;
  subtitle: string;
  isFirstNameTypingComplete: boolean;
  isLastNameTypingComplete: boolean;
  isFullNameTypingComplete: boolean;
};

const getNewSubtitle = (subtitles: string[], current?: string) => {
  const candidates = subtitles.filter(
    (candidate) => candidate !== current,
  );
  return candidates[Math.floor(Math.random() * candidates.length)];
};

const useHeaderTypingEffect = ({
  startDelayMs = 1000,
  changeSubtitleDelayMs = 3000,
  keyStrokeMinTimeMs = 50,
  keyStrokeMaxVarianceMs = 70,
  ...options
}: Options): Result => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    initialInView: true,
  });

  const commonOptions = {
    animateDelete: inView,
    keyStrokeMinTimeMs,
    keyStrokeMaxVarianceMs,
  };

  const firstName = useTypingEffect({
    targetText: inView ? options.firstName : '',
    startDelayMs,
    ...commonOptions,
  });
  const isFirstNameTypingComplete = useMemo(
    () => firstName === options.firstName,
    [firstName, options.firstName],
  );

  const lastName = useTypingEffect({
    targetText: inView ? options.lastName : '',
    halt: !isFirstNameTypingComplete,
    ...commonOptions,
  });
  const isLastNameTypingComplete = useMemo(
    () => lastName === options.lastName,
    [lastName, options.lastName],
  );

  const [targetSubtitle, setTargetSubtitle] = useState('');
  const subtitle = useTypingEffect({
    targetText: targetSubtitle,
    halt: inView && !isLastNameTypingComplete,
    ...commonOptions,
  });
  const isSubtitleTypingComplete = useMemo(
    () => subtitle === targetSubtitle,
    [subtitle, targetSubtitle],
  );

  // Header folding/unfolding
  useEffect(() => {
    if (!inView) {
      setTargetSubtitle('');
      return;
    }

    setTargetSubtitle(
      getNewSubtitle(options.subtitles, targetSubtitle),
    );
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  // Subtitle recycling
  useEffect(() => {
    if (!isSubtitleTypingComplete || !inView) return;

    const timeout = window.setTimeout(
      () =>
        setTargetSubtitle(
          getNewSubtitle(options.subtitles, targetSubtitle),
        ),
      changeSubtitleDelayMs,
    );

    return () => window.clearTimeout(timeout);
  }, [
    isSubtitleTypingComplete,
    inView,
    targetSubtitle,
    options.subtitles,
    changeSubtitleDelayMs,
  ]);

  const [isFullNameTypingComplete, setFullNameTypingComplete] =
    useState(false);

  useEffect(() => {
    if (!inView) {
      // Waits a while for folding animation to complete
      setTimeout(() => setFullNameTypingComplete(false), 1000);
      return;
    }

    if (isFullNameTypingComplete) return;

    setFullNameTypingComplete(
      isFirstNameTypingComplete && isLastNameTypingComplete,
    );
  }, [
    inView,
    isFullNameTypingComplete,
    isFirstNameTypingComplete,
    isLastNameTypingComplete,
  ]);

  return {
    ref,
    inView,
    firstName: inView ? firstName : options.firstName,
    lastName: inView ? lastName : options.lastName,
    subtitle: inView ? subtitle : '',
    isFirstNameTypingComplete,
    isLastNameTypingComplete,
    isFullNameTypingComplete,
  };
};

export default useHeaderTypingEffect;
