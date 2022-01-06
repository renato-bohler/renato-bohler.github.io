import { CSSProperties, useEffect, useState } from 'react';

import { Icon as Iconify } from '@iconify/react';
import classNames from 'classnames';

import styles from './Icon.module.css';

type Props = {
  set?: string;
  name: string;
  animationDelay?: number;
  className?: string;
  style?: CSSProperties;
};

const Icon: React.VFC<Props> = ({
  set = 'line-md',
  name,
  animationDelay = 0,
  className,
  style,
}) => {
  const [animate, setAnimate] = useState(animationDelay === 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, animationDelay);

    return () => clearTimeout(timeout);
  }, [animationDelay]);

  if (!animate)
    return <div className={classNames(styles.stub, className)} />;

  return (
    <Iconify
      icon={`${set}:${name}`}
      className={className}
      style={style}
    />
  );
};

export default Icon;
