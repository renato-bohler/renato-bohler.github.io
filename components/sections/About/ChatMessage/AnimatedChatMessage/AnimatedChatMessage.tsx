import React from 'react';

import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';

import ChatMessage from '../ChatMessage';

type Props = {
  children: React.ReactNode;
  progress: number;
};

const delayProgress = (progress: number, delay: number) =>
  Math.max(0, (progress - delay) / (1 - delay));

const transition = (from: number, to: number, progress: number) => {
  return from + (to - from) * progress;
};

const AnimatedChatMessage: React.FC<Props> = ({
  children,
  progress,
}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const progress75 = delayProgress(progress, 0.75);
  const progress80 = delayProgress(progress, 0.8);

  return (
    <ChatMessage
      ref={ref}
      style={{
        container: {
          position: 'relative',
          height: `${
            transition(15, 8, progress) -
            transition(0, 8 - 3.75, progress75)
          }em`,
          width: '100%',
          top: `${transition(50, 100, progress)}%`,
          left: `${transition(50, 0, progress)}%`,
          transform: `translate(${transition(
            -50,
            0,
            progress,
          )}%, ${transition(-50, -100, progress)}%)`,
          fontSize: `${transition(
            isMobile ? 1.5 : 2,
            1,
            progress,
          )}em`,
        },
        picture: {
          position: 'absolute',
          top: '0',
          left: `${transition(50, 0, progress)}%`,
          transform: `translateX(${transition(-50, 0, progress)}%)`,
          width: `${transition(10, 2.75, progress)}em`,
          height: `${transition(10, 2.75, progress)}em`,
          maxWidth: 'none',
        },
        pictureImage: {
          opacity: inView ? 1 : 0,
          transition: 'opacity 250ms ease-in-out',
        },
        pictureArcFill: {
          opacity: inView ? 1 : 0,
          transition: 'opacity 250ms 550ms ease-in-out',
        },
        pictureArcStroke: {
          strokeDashoffset: inView ? 0 : 304,
          strokeDasharray: 304,
          transition: 'stroke-dashoffset 500ms 200ms ease-in-out',
        },
        bubble: {
          position: 'absolute',
          bottom: inView ? 0 : '2em',
          left: `${transition(50, 0, progress)}%`,
          transform: `translateX(calc(${transition(
            -50,
            0,
            progress,
          )}% + ${transition(0, 3.75, progress)}em))`,
          opacity: inView ? 1 : 0,
          transition:
            'bottom 250ms 650ms ease-in-out, opacity 250ms 650ms ease-in-out',
          whiteSpace: 'nowrap',
        },
        bubblePointer: {
          top: `${transition(0.2, 1.7, progress80)}em`,
          left: `${transition(50, 0, progress)}%`,
          transform: `rotate(${transition(
            90,
            0,
            progress80,
          )}deg) translate(${transition(
            -50,
            0,
            progress80,
          )}%, ${transition(-50, 0, progress)}%)`,
        },
      }}
      message={{
        content: children,
        id: '0',
        direction: 'incoming',
        type: 'text',
        status: 'visible',
      }}
      onResponse={() => {}}
    />
  );
};

export default AnimatedChatMessage;
