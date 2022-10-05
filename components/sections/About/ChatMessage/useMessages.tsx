import { useCallback, useEffect, useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import { Message } from './messages.types';
import messageService from './messageService';

const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesInViewRef, messagesInView] = useInView();
  const messagesRef = useRef<HTMLDivElement | null>(null);
  const setMessagesRefs = useCallback(
    (node: HTMLDivElement) => {
      messagesRef.current = node;
      messagesInViewRef(node);
    },
    [messagesInViewRef],
  );

  const scrollBottom = () =>
    setTimeout(() => {
      if (!messagesRef.current) return;

      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: 'smooth',
      });
    });

  useEffect(() => {
    messageService.onMessage = (message) => {
      setMessages((messages) => {
        if (messages.find((msg) => msg.id === message.id)) {
          return messages.map((msg) => {
            if (msg.id === message.id) return message;
            return msg;
          });
        }

        return [...messages, message];
      });

      scrollBottom();
    };

    if (messagesInView) messageService.connect();
    else messageService.disconnect();

    return () => messageService.disconnect();
  }, [messagesInView]);

  return {
    messages,
    onResponse: messageService.onResponse.bind(messageService),
    setMessagesRefs,
  };
};

export default useMessages;
