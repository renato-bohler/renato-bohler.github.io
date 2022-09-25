import { useCallback, useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { throttle } from 'throttle-debounce';

const useAboutProgress = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [aboutInViewRef, aboutInView] = useInView();
  const setAboutRefs = useCallback(
    (node: HTMLDivElement) => {
      aboutRef.current = node;
      aboutInViewRef(node);
    },
    [aboutInViewRef],
  );

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1475px)',
  });

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!aboutInView) return;

    const scrollHandler = throttle(10, () => {
      if (!scrollRef.current || !aboutRef.current) return;

      const PADDING_HEIGHT = isTabletOrMobile ? 150 : 300;

      const maxOffset =
        aboutRef.current.clientHeight / (isTabletOrMobile ? 2 : 1) +
        PADDING_HEIGHT;

      const offset = Math.max(
        0,
        Math.min(
          maxOffset,
          window.scrollY - aboutRef.current.clientHeight,
        ),
      );

      const percentage = offset / maxOffset;

      setProgress(percentage);
    });
    document.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () =>
      document.removeEventListener('scroll', scrollHandler);
  }, [aboutInView, isTabletOrMobile]);

  return { progress, scrollRef, setAboutRefs };
};

export default useAboutProgress;
