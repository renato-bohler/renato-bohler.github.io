import { useCallback, useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import { throttle } from 'throttle-debounce';

import styles from './About.module.css';
import AnimatedChatMessage from './ChatMessage/AnimatedChatMessage';
import ChatMessage from './ChatMessage/ChatMessage';

const About: React.FC = () => {
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
    query: '(max-width: 1224px)',
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!aboutInView) return;

    const scrollHandler = throttle(10, () => {
      if (!scrollRef.current || !aboutRef.current) return;

      const percentage =
        aboutRef.current.offsetTop /
        (scrollRef.current.clientHeight -
          aboutRef.current.clientHeight);

      setProgress(percentage);
    });
    document.addEventListener('scroll', scrollHandler);
    scrollHandler();

    return () =>
      document.removeEventListener('scroll', scrollHandler);
  }, [aboutInView]);

  return (
    <section>
      <div className={styles.scroll} ref={scrollRef}>
        <div className={styles.messages} ref={setAboutRefs}>
          <AnimatedChatMessage progress={progress}>
            Hello there 👋
          </AnimatedChatMessage>
        </div>
      </div>

      <div id="about" aria-hidden className={styles.anchor} />
      <div className={styles.messages}>
        <ChatMessage>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sem lorem, viverra vitae aliquam sed, ultricies et tellus.
          Quisque in iaculis nibh. In ut eros libero. Nulla ac sem ac
          ante blandit faucibus a ac tellus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Aenean posuere erat nec cursus rutrum.
          Praesent gravida nisl eu leo finibus condimentum. Cras augue
          quam, sodales vel malesuada eget, tincidunt eget mi. In eget
          fringilla nulla. Donec laoreet, mi at convallis malesuada,
          mauris magna facilisis neque, eget convallis urna nisi a
          velit. Nunc semper aliquam tortor eget lobortis. Proin eu
          massa nec elit finibus aliquet. Phasellus mollis ultricies
          diam, vitae tempus mauris posuere eget. Integer et nunc
          gravida, pretium tellus quis, viverra tortor. Integer
          tincidunt dapibus erat, a varius metus aliquet quis.
        </ChatMessage>
        <ChatMessage>Test 123</ChatMessage>
      </div>
    </section>
  );
};

export default About;
