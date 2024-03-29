import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import styles from './FooterTransitionTrigger.module.css';

type Props = {
  onFooterTransitionTrigger: (transitioning: boolean) => void;
  onNavigationHeaderTrigger: (hide: boolean) => void;
};

export const FooterTransitionTrigger: React.FC<Props> = ({
  onFooterTransitionTrigger,
  onNavigationHeaderTrigger,
}) => {
  const [footerTransitionTriggerRef, footerTransitionTriggerInView] =
    useInView();
  useEffect(() => {
    onFooterTransitionTrigger(footerTransitionTriggerInView);
  }, [footerTransitionTriggerInView, onFooterTransitionTrigger]);

  const [
    navigationBarHideTriggerRef,
    navigationBarHideTriggerInView,
  ] = useInView();
  useEffect(() => {
    onNavigationHeaderTrigger(navigationBarHideTriggerInView);
  }, [navigationBarHideTriggerInView, onNavigationHeaderTrigger]);

  return (
    <>
      <div
        className={styles.navHeaderHideTrigger}
        ref={navigationBarHideTriggerRef}
      />
      <div
        className={styles.footerTransitionTrigger}
        ref={footerTransitionTriggerRef}
      />
    </>
  );
};
