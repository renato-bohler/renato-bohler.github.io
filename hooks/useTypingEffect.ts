import { useEffect, useState } from 'react';

import usePrevious from './usePrevious';

type Options = {
  animateDelete?: boolean;
  halt?: boolean;
  keyStrokeMaxVarianceMs?: number;
  keyStrokeMinTimeMs?: number;
  startDelayMs?: number;
  targetText: string;
};

type State = 'deleting' | 'stale' | 'typing';

const useTypingEffect = ({
  animateDelete = false,
  halt,
  keyStrokeMaxVarianceMs = 70,
  keyStrokeMinTimeMs = 50,
  startDelayMs = 0,
  targetText,
}: Options): string => {
  const [state, setState] = useState<State>('stale');

  const [currentText, setCurrentText] = useState('');
  const [currentTarget, setCurrentTarget] = useState('');
  const previousTarget = usePrevious(targetText);

  const [isTypingTimeout, setIsTypingTimeout] = useState(0);

  // Start delay
  useEffect(() => {
    if (state !== 'stale') return;
    if (currentText === currentTarget) {
      setState('stale');
      return;
    }

    const timeout = window.setTimeout(
      () => setState('typing'),
      startDelayMs,
    );

    setIsTypingTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [state, currentText, currentTarget, startDelayMs]);

  // Reset start delay if target text changes
  useEffect(() => {
    window.clearTimeout(isTypingTimeout);
    setCurrentTarget(targetText);

    if (targetText.startsWith(previousTarget || '')) {
      setState('stale');
    } else {
      setState('deleting');
    }
  }, [targetText]); // eslint-disable-line react-hooks/exhaustive-deps

  // Typing effect
  useEffect(() => {
    if (halt || state === 'stale' || state === 'deleting') return;

    if (currentText === currentTarget) {
      setState('stale');
      return;
    }

    const timeout = setTimeout(
      () =>
        setCurrentText(
          currentTarget.slice(0, currentText.length + 1),
        ),
      keyStrokeMinTimeMs + Math.random() * keyStrokeMaxVarianceMs,
    );

    return () => clearTimeout(timeout);
  }, [
    halt,
    state,
    currentTarget,
    currentText,
    keyStrokeMaxVarianceMs,
    keyStrokeMinTimeMs,
  ]);

  // Deleting effect
  useEffect(() => {
    if (halt || state !== 'deleting') return;

    if (currentText === '') {
      setState('stale');
      return;
    }

    if (!animateDelete) {
      setCurrentText('');
      return;
    }

    const timeout = setTimeout(
      () =>
        setCurrentText(currentText.slice(0, currentText.length - 1)),
      keyStrokeMinTimeMs + Math.random() * keyStrokeMaxVarianceMs,
    );

    return () => clearTimeout(timeout);
  }, [
    halt,
    state,
    currentText,
    animateDelete,
    keyStrokeMinTimeMs,
    keyStrokeMaxVarianceMs,
  ]);

  return currentText;
};

export default useTypingEffect;
