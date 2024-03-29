import { useEffect, type FC } from 'react';

import { useInView } from 'react-intersection-observer';

import { type SectionName } from '~/consts/sections.const';

import styles from './SectionAnchor.module.css';

type Props = {
  onChange: (sectionName: string, inView: boolean) => void;
  sectionName: SectionName;
};

export const SectionAnchor: FC<Props> = ({
  onChange,
  sectionName,
}) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    onChange(sectionName, inView);
  }, [onChange, sectionName, inView]);

  return <div aria-hidden className={styles.anchor} ref={ref} />;
};
