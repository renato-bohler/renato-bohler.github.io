import { useCallback, useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';

const MESSAGE_TICK_MS = 1000;

const MESSAGES = Array.from({ length: 10 })
  .map((_, i) => i + 1)
  .map((i) => (
    <>
      {Array.from({ length: i })
        .map((_, j) => j + 1)
        .map((j) => (
          <div key={`${i}-${j}`}>
            Message{' '}
            <strong>
              {i}-{j}
            </strong>
          </div>
        ))}
    </>
  ));

type Message = {
  content: string | JSX.Element;
  status: 'invisible' | 'loading' | 'visible';
};

const useMessages = () => {
  const [messagesInViewRef, messagesInView] = useInView();
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const setMessagesRefs = useCallback(
    (node: HTMLDivElement) => {
      messagesRef.current = node;
      messagesInViewRef(node);
    },
    [messagesInViewRef],
  );

  const [messages, setMessages] = useState<Message[]>(
    MESSAGES.map((message, index) => ({
      content: message,
      status: index === 0 ? 'loading' : 'invisible',
    })),
  );

  const scrollBottom = () =>
    setTimeout(() => {
      if (!messagesRef.current) return;

      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: 'smooth',
      });
    });

  const [startWritingIntervalId, setStartWritingIntervalId] =
    useState(0);
  const [finishWritingIntervalId, setFinishWritingIntervalId] =
    useState(0);

  useEffect(() => {
    if (!messagesInView) return;

    const startWritingNext = () =>
      setMessages((messages) =>
        messages.map((message, index) => {
          const previousMessage =
            index === 0 ? { status: 'visible' } : messages[index - 1];
          if (
            previousMessage.status === 'visible' &&
            message.status === 'invisible'
          ) {
            scrollBottom();
            return { ...message, status: 'loading' };
          }

          return message;
        }),
      );

    const finishWritingCurrent = () =>
      setMessages((messages) =>
        messages.map((message) => {
          if (message.status === 'loading') {
            scrollBottom();
            return { ...message, status: 'visible' };
          }
          return message;
        }),
      );

    setStartWritingIntervalId(
      window.setInterval(startWritingNext, MESSAGE_TICK_MS * 1),
    );
    setFinishWritingIntervalId(
      window.setInterval(finishWritingCurrent, MESSAGE_TICK_MS * 4),
    );
  }, [messagesInView]);

  useEffect(() => {
    if (
      !messagesInView ||
      messages[messages.length - 1].status === 'visible'
    ) {
      clearInterval(startWritingIntervalId);
      clearInterval(finishWritingIntervalId);
    }
  }, [
    messages,
    messagesInView,
    startWritingIntervalId,
    finishWritingIntervalId,
  ]);

  return { messages, setMessagesRefs };
};

export default useMessages;
