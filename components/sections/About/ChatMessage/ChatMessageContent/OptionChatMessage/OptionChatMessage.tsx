import React, { useState } from 'react';

import { Button } from 'reakit/Button';
import { Group } from 'reakit/Group';

import { Option, OptionSelectMessage } from '../../messages.types';
import styles from './OptionChatMessage.module.css';

type Props = {
  message: OptionSelectMessage;
  onResponse: (option: Option) => void;
};

const OptionChatMessage: React.FC<Props> = ({
  message,
  onResponse,
}) => {
  const [responded, setResponded] = useState(false);

  return (
    <Group className={styles['option-container']}>
      {message.content.map((option) => (
        <Button
          key={option.id}
          className={styles['option-button']}
          disabled={responded || option.disabled}
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

export default OptionChatMessage;