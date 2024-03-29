import React, { useState } from 'react';

import { Button } from 'reakit/Button';
import { Group } from 'reakit/Group';

import { Option, OptionSelectMessage } from '../../messages.types';

import styles from './OptionChatMessage.module.css';

type Props = {
  message: OptionSelectMessage;
  onResponse: (option: Option) => void;
};

export const OptionChatMessage: React.FC<Props> = ({
  message,
  onResponse,
}) => {
  const [responded, setResponded] = useState(false);

  return (
    <Group className={styles.optionContainer}>
      {message.content.map((option) => (
        <Button
          className={styles.optionButton}
          disabled={responded || option.disabled}
          key={option.id}
          onClick={() => {
            onResponse(option);
            setResponded(true);
          }}
        >
          {option.label}
        </Button>
      ))}
    </Group>
  );
};
