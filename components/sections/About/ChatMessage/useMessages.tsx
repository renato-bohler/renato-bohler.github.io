import { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';

import { messageService } from './messageService';
import { Message } from './messages.types';

type Options = {
  onMessage?: () => void;
};

export const useMessages = ({ onMessage }: Options) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messagesInViewRef, messagesInView] = useInView();

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

      onMessage?.();
    };

    if (messagesInView) messageService.connect();
    else messageService.disconnect();

    return () => messageService.disconnect();
  }, [messagesInView, onMessage]);

  return {
    messages,
    messagesInViewRef,
    onResponse: messageService.onResponse.bind(messageService),
  };
};
