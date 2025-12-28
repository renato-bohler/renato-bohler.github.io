import { useCallback, useRef, useState, type UIEvent } from 'react';

import classNames from 'classnames';
import { VisuallyHidden } from 'reakit';
import { Button } from 'reakit/Button';
import { debounce } from 'throttle-debounce';

import { ArrowDownIcon } from '~/components/icons/ArrowDownIcon';

import { AnimatedChatMessage } from './ChatMessage/AnimatedChatMessage/AnimatedChatMessage';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { useMessages } from './ChatMessage/useMessages';

import styles from './About.module.css';

export const About = () => {
  const [messagesScrollPosition, setMessagesScrollPosition] =
    useState<
      | 'bottom'
      | 'mid-scroll'
      | 'near-bottom'
      | 'not-scrolling'
      | 'top'
    >('not-scrolling');

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
    if (!messagesScrollPosition) return;
    scrollBottom();
  }, [messagesScrollPosition, scrollBottom]);

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

  const scrollHandler = (event: UIEvent<HTMLDivElement>) => {
    const { offsetHeight, scrollHeight, scrollTop } =
      event.currentTarget;
    const scrollY = scrollTop + offsetHeight;

    if (scrollTop === 0) setMessagesScrollPosition('top');
    else if (scrollY === scrollHeight)
      setMessagesScrollPosition('bottom');
    else if (scrollY >= scrollHeight - 50)
      setMessagesScrollPosition('near-bottom');
    else setMessagesScrollPosition('mid-scroll');
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

      <div aria-hidden className={styles.anchor} id="about" />

      <div className={styles.messageListContainer}>
        <Button
          className={styles.scrollButton}
          disabled={[
            'bottom',
            'near-bottom',
            'not-scrolling',
          ].includes(messagesScrollPosition)}
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
          data-scroll-position={messagesScrollPosition}
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
