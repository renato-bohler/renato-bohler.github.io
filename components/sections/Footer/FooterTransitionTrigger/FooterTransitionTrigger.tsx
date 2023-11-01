import { useCallback, useEffect, useRef } from 'react';

import { useInView } from 'react-intersection-observer';

import styles from './FooterTransitionTrigger.module.css';

type Props = {
  onNavigationHeaderTrigger: (hide: boolean) => void;
  onProgressChange: (progress: number) => void;
};

const FooterTransitionTrigger: React.FC<Props> = ({
  onNavigationHeaderTrigger,
  onProgressChange,
}) => {
  const [navigationBarHideRef, navigationBarHideInView] = useInView();

  useEffect(() => {
    onNavigationHeaderTrigger(navigationBarHideInView);
  }, [navigationBarHideInView, onNavigationHeaderTrigger]);

  const progressRef = useRef<HTMLDivElement | null>(null);
  const [progressInViewRef, progressInView] = useInView();
  const setProgressRefs = useCallback(
    (node: HTMLDivElement) => {
      progressRef.current = node;
      progressInViewRef(node);
    },
    [progressInViewRef],
  );

  useEffect(() => {
    if (!progressInView) {
      onProgressChange(0);
      return;
    }

    const scrollHandler = () => {
      if (!progressRef.current) return;
      const windowBottomY =
        document.documentElement.scrollTop + window.innerHeight;
      const targetHeight = progressRef.current.clientHeight;
      const targetY = progressRef.current.offsetTop;

      const percentage = Math.min(
        1,
        (windowBottomY - targetY) / targetHeight,
      );

      onProgressChange(Math.max(0, percentage));
    };
    document.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () =>
      document.removeEventListener('scroll', scrollHandler);
  }, [progressInView, onProgressChange]);

  return (
    <>
      <div
        className={styles.navHeaderHideTrigger}
        ref={navigationBarHideRef}
      />
      <div className={styles.progressTrigger} ref={setProgressRefs} />
    </>
  );
};

export default FooterTransitionTrigger;
