import React, { useState } from 'react';

import classNames from 'classnames';
import { Button } from 'reakit/Button';

import styles from './ChatMessage.module.css';
import { Message, ResponseOption } from './messageService';
import MessageWritingAnimation from './MessageWritingAnimation/MessageWritingAnimation';

type Props = {
  message: Message;
  onResponse: (option: ResponseOption) => void;
  style?: {
    container: React.CSSProperties;
    picture: React.CSSProperties;
    pictureImage: React.CSSProperties;
    pictureArcFill: React.CSSProperties;
    pictureArcStroke: React.CSSProperties;
    bubble: React.CSSProperties;
    bubblePointer: React.CSSProperties;
  };
};

const ChatMessageContent: React.FC<Props> = ({
  message,
  onResponse,
}) => {
  const [responded, setResponded] = useState(false);

  switch (message.type) {
    case 'text':
      return <>{message.content}</>;
    case 'response':
      return (
        <div className={styles['response-container']}>
          {message.content.map((option) => (
            <Button
              key={option.label}
              className={styles['response-button']}
              disabled={responded || option.disabled}
              onClick={() => {
                onResponse(option);
                setResponded(true);
              }}
            >
              {option.label}
            </Button>
          ))}
        </div>
      );
  }
};

const ChatMessage = React.forwardRef<HTMLDivElement, Props>(
  ({ message, onResponse, style }, ref) => (
    <div
      ref={ref}
      className={classNames(styles.container, {
        [styles.outgoing]: message.direction === 'outgoing',
        [styles['fade-in']]: !ref,
      })}
      style={style?.container}
    >
      <div className={styles.picture} style={style?.picture}>
        <svg viewBox="-10 -10 205 132" className={styles.pictureArc}>
          <defs>
            <linearGradient id="gradient">
              <stop
                offset="5%"
                stopColor="var(--theme-secondary-bright)"
              />
              <stop
                offset="25%"
                stopColor="var(--theme-primary-bright)"
              />
            </linearGradient>
          </defs>
          <path
            d="M -2.362 117.557 C -19.633 42.539 50.782 -23.043 124.384 -0.492 C 154.967 8.879 179.222 32.314 189.638 62.557"
            className={styles.pictureArcStroke}
            style={style?.pictureArcStroke}
          />
          <path
            d="M -2.362 117.557 C -19.633 42.539 50.782 -23.043 124.384 -0.492 C 154.967 8.879 179.222 32.314 189.638 62.557"
            className={styles.pictureArcFill}
            style={style?.pictureArcFill}
          />
        </svg>
        {/* TODO: use another image? Better image quality, different resolutions for performance */}
        <img
          src="/images/me/full.png"
          className={styles.pictureImage}
          style={style?.pictureImage}
          alt="A smiley Renato"
        />
      </div>
      <div className={styles.bubble} style={style?.bubble}>
        <div
          className={styles['bubble-pointer']}
          style={style?.bubblePointer}
        />
        {message.status === 'writing' ? (
          <MessageWritingAnimation />
        ) : (
          <ChatMessageContent
            message={message}
            onResponse={onResponse}
          />
        )}
      </div>
    </div>
  ),
);
ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;
