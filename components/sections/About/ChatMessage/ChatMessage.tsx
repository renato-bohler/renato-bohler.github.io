import React from 'react';

import styles from './ChatMessage.module.css';

type Props = {
  children: React.ReactNode;
  style?: {
    container: React.CSSProperties;
    picture: React.CSSProperties;
    bubble: React.CSSProperties;
    bubblePointer: React.CSSProperties;
  };
};

const ChatMessage: React.FC<Props> = ({ children, style }) => (
  <div className={styles.container} style={style?.container}>
    <div className={styles.picture} style={style?.picture} />
    <div className={styles.bubble} style={style?.bubble}>
      <div
        className={styles['bubble-pointer']}
        style={style?.bubblePointer}
      />
      {children}
    </div>
  </div>
);

export default ChatMessage;
