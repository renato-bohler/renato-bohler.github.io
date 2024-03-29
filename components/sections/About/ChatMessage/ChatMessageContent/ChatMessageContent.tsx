import { type FC } from 'react';

import { type Message, type Option } from '../messages.types';

import { AudioChatMessage } from './AudioChatMessage/AudioChatMessage';
import { ContactFormChatMessage } from './ContactFormChatMessage/ContactFormChatMessage';
import { OptionChatMessage } from './OptionChatMessage/OptionChatMessage';
import { TextChatMessage } from './TextChatMessage/TextChatMessage';

type Props = {
  message: Message;
  onResponse: (option: Option) => void;
};

export const ChatMessageContent: FC<Props> = ({
  message,
  onResponse,
}) => {
  switch (message.type) {
    case 'text':
      return <TextChatMessage message={message} />;
    case 'audio':
      return <AudioChatMessage message={message} />;
    case 'option-select':
      return (
        <OptionChatMessage
          message={message}
          onResponse={onResponse}
        />
      );
    case 'contact-form':
      return <ContactFormChatMessage />;
  }
};
