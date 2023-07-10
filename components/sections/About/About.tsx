import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames';
import { VisuallyHidden } from 'reakit';
import { Button } from 'reakit/Button';
import { debounce } from 'throttle-debounce';

import ArrowDownIcon from '~/components/icons/ArrowDown';

import styles from './About.module.css';
import AnimatedChatMessage from './ChatMessage/AnimatedChatMessage/AnimatedChatMessage';
import ChatMessage from './ChatMessage/ChatMessage';
import useMessages from './ChatMessage/useMessages';

const About: React.FC = () => {
  const [fullyScrolled, setFullyScrolled] = useState(true);

  const messagesRef = useRef<HTMLDivElement | null>(null);
  const scrollBottom = useCallback(
    () =>
      debounce(100, () =>
        messagesRef.current?.scrollTo({
          top: messagesRef.current.scrollHeight,
          behavior: 'smooth',
        }),
      )(),
    [],
  );

  const onMessage = useCallback(() => {
    if (!fullyScrolled) return;
    scrollBottom();
  }, [fullyScrolled, scrollBottom]);

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

    setFullyScrolled(scrollY >= scrollHeight - 50);
  };

  return (
    <section>
      <VisuallyHidden as="div">
        <h2>About</h2>
      </VisuallyHidden>

      <div className={styles.scroll}>
        <div
          className={classNames(
            styles.messages,
            styles.animatedMessage,
          )}
        >
          <AnimatedChatMessage>Hello there 👋</AnimatedChatMessage>
        </div>
      </div>

      <div id="about" aria-hidden className={styles.anchor} />

      <div className={styles.messageListContainer}>
        <Button
          onClick={scrollBottom}
          className={styles.scrollButton}
          disabled={fullyScrolled}
        >
          <ArrowDownIcon />
          Scroll to bottom
          <ArrowDownIcon />
        </Button>

        <div
          ref={setMessagesRefs}
          onScroll={scrollHandler}
          className={classNames(styles.messages, styles.messageList)}
          role="region"
          aria-live="polite"
          aria-label="Message list"
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

export default About;
