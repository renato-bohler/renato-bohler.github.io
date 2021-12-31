import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { SectionName } from '~/consts/sections.const';

import styles from './SectionAnchor.module.css';

type Props = {
  sectionName: SectionName;
  onChange: (sectionName: string, inView: boolean) => void;
};

const SectionAnchor: React.VFC<Props> = ({
  sectionName,
  onChange,
}) => {
  const [ref, inView] = useInView({ threshold: 0 });

  useEffect(() => {
    onChange(sectionName, inView);
  }, [onChange, sectionName, inView]);

  return <div ref={ref} className={styles.anchor} aria-hidden />;
};

export default SectionAnchor;
