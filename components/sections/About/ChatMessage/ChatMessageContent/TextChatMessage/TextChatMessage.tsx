import type React from 'react';

import { type TextMessage } from '../../messages.types';

type Props = { message: TextMessage };

export const TextChatMessage: React.FC<Props> = ({ message }) =>
  message.content;
