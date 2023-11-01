import { useEffect, useMemo, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import useTypingEffect from '~/hooks/useTypingEffect';

type Options = {
  changeSubtitleDelayMs?: number;
  firstName: string;
  keyStrokeMaxVarianceMs?: number;
  keyStrokeMinTimeMs?: number;
  lastName: string;
  startDelayMs?: number;
  subtitles: string[];
};

type Result = {
  firstName: string;
  inView: boolean;
  isFirstNameTypingComplete: boolean;
  isFullNameTypingComplete: boolean;
  isLastNameTypingComplete: boolean;
  lastName: string;
  ref: (node?: Element | null | undefined) => void;
  subtitle: string;
};

const getNewSubtitle = (subtitles: string[], current?: string) => {
  const candidates = subtitles.filter(
    (candidate) => candidate !== current,
  );
  return candidates[Math.floor(Math.random() * candidates.length)];
};

const useHeaderTypingEffect = ({
  changeSubtitleDelayMs = 3000,
  keyStrokeMaxVarianceMs = 70,
  keyStrokeMinTimeMs = 50,
  startDelayMs = 1000,
  ...options
}: Options): Result => {
  const { inView, ref } = useInView({
    initialInView: true,
    threshold: 0.75,
  });

  const commonOptions = {
    keyStrokeMaxVarianceMs,
    keyStrokeMinTimeMs,
  };

  const firstName = useTypingEffect({
    startDelayMs,
    targetText: inView ? options.firstName : '',
    ...commonOptions,
  });
  const isFirstNameTypingComplete = useMemo(
    () => firstName === options.firstName,
    [firstName, options.firstName],
  );

  const lastName = useTypingEffect({
    halt: !isFirstNameTypingComplete,
    targetText: inView ? options.lastName : '',
    ...commonOptions,
  });
  const isLastNameTypingComplete = useMemo(
    () => lastName === options.lastName,
    [lastName, options.lastName],
  );

  const [targetSubtitle, setTargetSubtitle] = useState('');
  const subtitle = useTypingEffect({
    animateDelete: inView,
    halt: inView && !isLastNameTypingComplete,
    targetText: targetSubtitle,
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
    firstName: inView ? firstName : options.firstName,
    inView,
    isFirstNameTypingComplete,
    isFullNameTypingComplete,
    isLastNameTypingComplete,
    lastName: inView ? lastName : options.lastName,
    ref,
    subtitle: inView ? subtitle : '',
  };
};

export default useHeaderTypingEffect;
