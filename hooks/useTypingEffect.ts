import { useRef, useState } from 'react';

import { TypingService } from './typingService';

type Options = {
  keyStrokeMaxVarianceMs?: number;
  keyStrokeMinTimeMs?: number;
  onEnd?: (value: string) => void;
  startDelayMs?: number;
};

type Return = {
  delete: () => void;
  reset: () => void;
  text: string;
  type: (text: string) => void;
};

export const useTypingEffect = ({
  keyStrokeMaxVarianceMs = 70,
  keyStrokeMinTimeMs = 50,
  onEnd,
  startDelayMs = 0,
}: Options): Return => {
  const [currentText, setCurrentText] = useState<string>('');

  const typingService = useRef(
    new TypingService({
      keyStrokeMaxVarianceMs,
      keyStrokeMinTimeMs,
      onChange: setCurrentText,
      onEnd,
    }),
  );

  return {
    delete: () => {
      typingService.current.delete({
        startDelayMs,
      });
    },
    reset: () => {
      typingService.current.reset();
    },
    text: currentText,
    type: (text: string) =>
      typingService.current.type({
        startDelayMs,
        text,
      }),
  };
};
