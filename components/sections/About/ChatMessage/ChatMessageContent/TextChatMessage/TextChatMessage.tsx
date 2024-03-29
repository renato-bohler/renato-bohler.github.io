import { type FC } from 'react';

import { type TextMessage } from '../../messages.types';

type Props = { message: TextMessage };

export const TextChatMessage: FC<Props> = ({ message }) =>
  message.content;
