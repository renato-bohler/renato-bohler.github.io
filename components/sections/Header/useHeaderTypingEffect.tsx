import { useEffect, useMemo, useState } from 'react';

import { useInView } from 'react-intersection-observer';

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
  isNameTypingComplete: boolean;
  isLastNameTypingComplete: boolean;
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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [targetSubtitle, setTargetSubtitle] = useState(
    options.subtitles[
      Math.floor(Math.random() * options.subtitles.length)
    ],
  );

  const [isTyping, setTyping] = useState(false);
  const [isDeletingSubtitle, setDeletingSubtitle] = useState(false);

  const isNameTypingComplete = useMemo(
    () => firstName === options.firstName,
    [firstName, options],
  );
  const isLastNameTypingComplete = useMemo(
    () => lastName === options.lastName,
    [lastName, options],
  );
  const isTypingComplete = useMemo(
    () => isNameTypingComplete && isLastNameTypingComplete,
    [isNameTypingComplete, isLastNameTypingComplete],
  );

  // Typing effect
  useEffect(() => {
    if (!isTyping) return;

    let deleteSubtitleTimeout: number;
    const timeout = setTimeout(() => {
      // Typing name
      if (!isNameTypingComplete) {
        setFirstName(
          options.firstName.slice(0, firstName.length + 1),
        );
        return;
      }

      // Typing last name
      if (!isLastNameTypingComplete) {
        setLastName(options.lastName.slice(0, lastName.length + 1));
        return;
      }

      // Typing subtitle finished. Marking for deletion
      if (!isDeletingSubtitle && subtitle === targetSubtitle) {
        deleteSubtitleTimeout = window.setTimeout(() => {
          setDeletingSubtitle(true);

          // Picks new subtitle
          const candidates = options.subtitles.filter(
            (s) => s !== targetSubtitle,
          );
          setTargetSubtitle(
            candidates[Math.floor(Math.random() * candidates.length)],
          );
        }, changeSubtitleDelayMs);
        return;
      }

      // Deleting subtitle
      if (isDeletingSubtitle) {
        if (subtitle.length === 1) setDeletingSubtitle(false);
        setSubtitle(subtitle.slice(0, -1));
        return;
      }

      // Typing subtitle
      setSubtitle(targetSubtitle.slice(0, subtitle.length + 1));
    }, keyStrokeMinTimeMs + Math.random() * keyStrokeMaxVarianceMs);

    return () => {
      clearTimeout(timeout);
      clearTimeout(deleteSubtitleTimeout);
    };
  }, [
    isTyping,
    firstName,
    lastName,
    subtitle,
    targetSubtitle,
    isNameTypingComplete,
    isLastNameTypingComplete,
    isDeletingSubtitle,
    keyStrokeMinTimeMs,
    keyStrokeMaxVarianceMs,
    changeSubtitleDelayMs,
    options,
  ]);

  // Resets typing effect when user reaches header
  useEffect(() => {
    if (!inView) {
      setTyping(false);
      if (!isTypingComplete) {
        setFirstName(options.firstName[0]);
        setLastName(options.lastName[0]);
      }
      return;
    }

    setFirstName('');
    setLastName('');
    setSubtitle('');

    const timeout = setTimeout(() => {
      setTyping(true);
      setDeletingSubtitle(false);
    }, startDelayMs);

    return () => clearTimeout(timeout);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    ref,
    inView,
    firstName,
    lastName,
    subtitle,
    isNameTypingComplete,
    isLastNameTypingComplete,
  };
};

export default useHeaderTypingEffect;
