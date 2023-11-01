import React from 'react';

import cx from 'classnames';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import ChatMessageContent from './ChatMessageContent/ChatMessageContent';
import MessageWritingAnimation from './MessageWritingAnimation/MessageWritingAnimation';
import { Message, Option } from './messages.types';

import styles from './ChatMessage.module.css';

type Props = {
  animatedStyles?: {
    bubble: string;
    bubblePointer: string;
    container: string;
    picture: string;
    pictureArcFill: string;
    pictureArcStroke: string;
    pictureImage: string;
  };
  message: Message;
  onResponse: (option: Option) => void;
};

const ChatMessage = React.forwardRef<HTMLDivElement, Props>(
  ({ animatedStyles, message, onResponse }, ref) => (
    <div
      className={cx(styles.container, animatedStyles?.container, {
        [styles.fadeIn]: !ref,
        [styles.outgoing]: message.direction === 'outgoing',
      })}
      ref={ref}
    >
      <div className={cx(styles.picture, animatedStyles?.picture)}>
        <svg className={styles.pictureArc} viewBox="-10 -10 205 132">
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
            className={cx(
              styles.pictureArcStroke,
              animatedStyles?.pictureArcStroke,
            )}
            d="M -2.362 117.557 C -19.633 42.539 50.782 -23.043 124.384 -0.492 C 154.967 8.879 179.222 32.314 189.638 62.557"
          />
          <path
            className={cx(
              styles.pictureArcFill,
              animatedStyles?.pictureArcFill,
            )}
            d="M -2.362 117.557 C -19.633 42.539 50.782 -23.043 124.384 -0.492 C 154.967 8.879 179.222 32.314 189.638 62.557"
          />
        </svg>
        <img
          alt="A smiley Renato"
          className={cx(
            styles.pictureImage,
            animatedStyles?.pictureImage,
          )}
          src="images/me/full.webp"
        />
      </div>
      <div className={cx(styles.bubble, animatedStyles?.bubble)}>
        <div
          className={cx(
            styles.bubblePointer,
            animatedStyles?.bubblePointer,
          )}
        />
        {message.status === 'writing' ? (
          <MessageWritingAnimation />
        ) : (
          <>
            {message.direction === 'incoming' && (
              <VisuallyHidden>Message from Renato</VisuallyHidden>
            )}
            {message.direction === 'outgoing' &&
              message.type === 'option-select' && (
                <VisuallyHidden>Select an option</VisuallyHidden>
              )}
            {message.direction === 'outgoing' &&
              message.type === 'contact-form' && (
                <VisuallyHidden>Contact form</VisuallyHidden>
              )}

            <ChatMessageContent
              message={message}
              onResponse={onResponse}
            />
          </>
        )}
      </div>
    </div>
  ),
);
ChatMessage.displayName = 'ChatMessage';

export default ChatMessage;
