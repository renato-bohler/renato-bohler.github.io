import React from 'react';

import { TextMessage } from '../../messages.types';

type Props = { message: TextMessage };

export const TextChatMessage: React.FC<Props> = ({ message }) => (
  <>{message.content}</>
);
