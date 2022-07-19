import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import styles from './AnimatedIcon.module.css';

type Props = {
  children: React.ReactNode;
  animationDelay?: number;
  className?: string;
  style?: React.CSSProperties;
};

const AnimatedIcon: React.FC<Props> = ({
  children,
  animationDelay = 0,
  className,
  style,
}) => {
  const [ref, inView] = useInView({ threshold: 0 });
  const [visible, setVisible] = useState(animationDelay === 0);

  useEffect(() => {
    if (!inView || visible) return;

    const timeout = setTimeout(() => {
      setVisible(true);
    }, animationDelay);

    return () => clearTimeout(timeout);
  }, [inView, visible, animationDelay]);

  return (
    <div
      ref={visible ? null : ref}
      className={classNames(
        { [styles.stub]: !visible },
        styles.container,
        className,
      )}
      style={style}
    >
      {visible && children}
    </div>
  );
};

export default AnimatedIcon;
