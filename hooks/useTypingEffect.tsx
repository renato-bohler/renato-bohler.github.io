import { useEffect, useState } from 'react';

type Options = {
  targetText: string;
  startDelayMs?: number;
  keyStrokeMinTimeMs?: number;
  keyStrokeMaxVarianceMs?: number;
};

const useTypingEffect = ({
  targetText,
  startDelayMs = 0,
  keyStrokeMinTimeMs = 50,
  keyStrokeMaxVarianceMs = 70,
}: Options): string => {
  const [currentText, setCurrentText] = useState('');

  const [isTyping, setIsTyping] = useState(false);
  const [isTypingTimeout, setIsTypingTimeout] = useState(0);

  // Start delay
  useEffect(() => {
    if (isTyping) return;

    const timeout = window.setTimeout(
      () => setIsTyping(true),
      startDelayMs,
    );

    setIsTypingTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [isTyping, targetText, startDelayMs]);

  // Reset start delay if target text changes
  useEffect(() => {
    window.clearTimeout(isTypingTimeout);
    setIsTyping(false);
  }, [targetText]); // eslint-disable-line react-hooks/exhaustive-deps

  // Typing effect
  useEffect(() => {
    if (!isTyping) return;
    if (currentText === targetText) return;

    const timeout = setTimeout(() => {
      console.log(targetText.slice(0, currentText.length + 1));
      setCurrentText(targetText.slice(0, currentText.length + 1));
    }, keyStrokeMinTimeMs + Math.random() * keyStrokeMaxVarianceMs);

    return () => clearTimeout(timeout);
  }, [
    isTyping,
    targetText,
    currentText,
    keyStrokeMaxVarianceMs,
    keyStrokeMinTimeMs,
  ]);

  return currentText;
};

export default useTypingEffect;
