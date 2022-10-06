import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames';
import { Button } from 'reakit/Button';
import { debounce } from 'throttle-debounce';

import ArrowDownIcon from '~/components/icons/ArrowDown';

import styles from './About.module.css';
import AnimatedChatMessage from './ChatMessage/AnimatedChatMessage/AnimatedChatMessage';
import ChatMessage from './ChatMessage/ChatMessage';
import useMessages from './ChatMessage/useMessages';
import useAboutProgress from './useAboutProgress';

const About: React.FC = () => {
  const { progress, scrollRef, setAboutRefs } = useAboutProgress();

  const [fullyScrolled, setFullyScrolled] = useState(true);
  const setFullyScrolledDebounce = debounce(
    500,
    (fullyScrolled: boolean) => {
      setFullyScrolled(fullyScrolled);
    },
  );

  const messagesRef = useRef<HTMLDivElement | null>(null);
  const scrollBottom = () => {
    setTimeout(() =>
      messagesRef.current?.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: 'smooth',
      }),
    );
  };
  const onMessage = useCallback(() => {
    if (!fullyScrolled) return;
    scrollBottom();
  }, [fullyScrolled]);

  const { messages, onResponse, messagesInViewRef } = useMessages({
    onMessage: onMessage,
  });
  const setMessagesRefs = useCallback(
    (node: HTMLDivElement) => {
      messagesRef.current = node;
      messagesInViewRef(node);
    },
    [messagesInViewRef],
  );

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, offsetHeight } =
      event.currentTarget;
    const scrollY = scrollTop + offsetHeight;

    setFullyScrolledDebounce(scrollY >= scrollHeight - 50);
  };

  return (
    <section>
      <div className={styles.scroll} ref={scrollRef}>
        <div
          className={classNames(
            styles.messages,
            styles['animated-message'],
          )}
          ref={setAboutRefs}
        >
          <AnimatedChatMessage progress={progress}>
            Hello there 👋
          </AnimatedChatMessage>
        </div>
      </div>

      <div id="about" aria-hidden className={styles.anchor} />
      <div
        ref={setMessagesRefs}
        onScroll={scrollHandler}
        className={classNames(
          styles.messages,
          styles['message-list'],
        )}
        role="region"
        aria-live="polite"
        aria-label="Message list"
      >
        {!fullyScrolled && (
          <Button
            onClick={scrollBottom}
            className={styles['scroll-button']}
          >
            <ArrowDownIcon />
            Scroll to bottom
            <ArrowDownIcon />
          </Button>
        )}

        {messages
          .filter((message) => message.status !== 'invisible')
          .map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onResponse={onResponse}
            />
          ))}
      </div>
    </section>
  );
};

export default About;
