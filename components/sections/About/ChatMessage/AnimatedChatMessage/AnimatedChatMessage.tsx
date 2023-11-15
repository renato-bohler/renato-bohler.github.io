import React from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import ChatMessage from '../ChatMessage';

import styles from './AnimatedChatMessage.module.css';

type Props = {
  children: React.ReactNode;
};

const AnimatedChatMessage: React.FC<Props> = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <ChatMessage
      animatedStyles={{
        bubble: styles.bubble,
        bubblePointer: styles.bubblePointer,
        container: classNames(styles.container, {
          [styles.inView]: inView,
        }),
        picture: styles.picture,
        pictureArcFill: styles.pictureArcFill,
        pictureArcStroke: styles.pictureArcStroke,
        pictureImage: styles.pictureImage,
      }}
      message={{
        content: children,
        direction: 'incoming',
        id: '0',
        status: 'visible',
        type: 'text',
      }}
      onResponse={() => {}}
      ref={ref}
    />
  );
};

export default AnimatedChatMessage;
