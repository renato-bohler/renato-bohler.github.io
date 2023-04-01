import React from 'react';

import styles from './MessageWritingAnimation.module.css';

const MessageWritingAnimation = () => (
  <div className={styles.container}>
    &nbsp;
    <div className={styles.dot} />
    <div className={styles.dot} />
    <div className={styles.dot} />
    &nbsp;
  </div>
);

export default MessageWritingAnimation;
