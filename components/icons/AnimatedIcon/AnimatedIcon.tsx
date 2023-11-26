import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

import useTheme from '~/hooks/useTheme';

import styles from './AnimatedIcon.module.css';

type Props = {
  animationDelay?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const AnimatedIcon: React.FC<Props> = ({
  animationDelay = 0,
  children,
  className,
  style,
}) => {
  const { isReducedMotion } = useTheme();

  const [ref, inView] = useInView({ threshold: 0 });
  const [visible, setVisible] = useState(
    animationDelay === 0 || isReducedMotion,
  );

  useEffect(() => {
    if (isReducedMotion) setVisible(true);
    if (!inView || visible || isReducedMotion) return;

    const timeout = setTimeout(() => {
      setVisible(true);
    }, animationDelay);

    return () => clearTimeout(timeout);
  }, [inView, visible, animationDelay, isReducedMotion]);

  return (
    <span
      className={classNames(
        { [styles.stub]: !visible },
        styles.container,
        className,
      )}
      ref={visible ? null : ref}
      style={style}
    >
      {visible && children}
    </span>
  );
};

export default AnimatedIcon;
