import { type FC } from 'react';

import styles from './MessageWritingAnimation.module.css';

export const MessageWritingAnimation: FC = () => (
  <div className={styles.container}>
    &nbsp;
    <div className={styles.dot} />
    <div className={styles.dot} />
    <div className={styles.dot} />
    &nbsp;
  </div>
);
