import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames';
import { VisuallyHidden } from 'reakit';
import { Button } from 'reakit/Button';
import { debounce } from 'throttle-debounce';

import { ArrowDownIcon } from '~/components/icons/ArrowDown';

import { AnimatedChatMessage } from './ChatMessage/AnimatedChatMessage/AnimatedChatMessage';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { useMessages } from './ChatMessage/useMessages';
import { useAboutProgress } from './useAboutProgress';

import styles from './About.module.css';

export const About: React.FC = () => {
  const { scrollRef, setAboutRefs } = useAboutProgress();

  const [fullyScrolled, setFullyScrolled] = useState(true);

  const messagesRef = useRef<HTMLDivElement | null>(null);
  const scrollBottom = useCallback(
    () =>
      debounce(100, () =>
        messagesRef.current?.scrollTo({
          behavior: 'smooth',
          top: messagesRef.current.scrollHeight,
        }),
      )(),
    [],
  );

  const onMessage = useCallback(() => {
    if (!fullyScrolled) return;
    scrollBottom();
  }, [fullyScrolled, scrollBottom]);

  const { messages, messagesInViewRef, onResponse } = useMessages({
    onMessage,
  });
  const setMessagesRefs = useCallback(
    (node: HTMLDivElement) => {
      messagesRef.current = node;
      messagesInViewRef(node);
    },
    [messagesInViewRef],
  );

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const { offsetHeight, scrollHeight, scrollTop } =
      event.currentTarget;
    const scrollY = scrollTop + offsetHeight;

    setFullyScrolled(scrollY >= scrollHeight - 50);
  };

  return (
    <section>
      <VisuallyHidden as="div">
        <h2>About</h2>
      </VisuallyHidden>

      <div className={styles.scroll} ref={scrollRef}>
        <div
          className={classNames(
            styles.messages,
            styles.animatedMessage,
          )}
          ref={setAboutRefs}
        >
          <AnimatedChatMessage>Hello there 👋</AnimatedChatMessage>
        </div>
      </div>

      <div aria-hidden className={styles.anchor} id="about" />

      <div className={styles.messageListContainer}>
        <Button
          className={styles.scrollButton}
          disabled={fullyScrolled}
          onClick={scrollBottom}
        >
          <ArrowDownIcon />
          Scroll to bottom
          <ArrowDownIcon />
        </Button>

        <div
          aria-label="Message list"
          aria-live="polite"
          className={classNames(styles.messages, styles.messageList)}
          onScroll={scrollHandler}
          ref={setMessagesRefs}
          role="region"
        >
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
      </div>
    </section>
  );
};
