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
      ref={ref}
      animatedStyles={{
        container: classNames(styles.container, {
          [styles.inView]: inView,
        }),
        picture: styles.picture,
        pictureImage: styles.pictureImage,
        pictureArcFill: styles.pictureArcFill,
        pictureArcStroke: styles.pictureArcStroke,
        bubble: styles.bubble,
        bubblePointer: styles.bubblePointer,
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