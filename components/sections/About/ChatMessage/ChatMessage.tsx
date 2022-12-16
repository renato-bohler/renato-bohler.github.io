import React from 'react';

import cx from 'classnames';
import { VisuallyHidden } from 'reakit/VisuallyHidden';

import styles from './ChatMessage.module.css';
import ChatMessageContent from './ChatMessageContent/ChatMessageContent';
import { Message, Option } from './messages.types';
import MessageWritingAnimation from './MessageWritingAnimation/MessageWritingAnimation';

type Props = {
  message: Message;
  onResponse: (option: Option) => void;
  animatedStyles?: {
    container: string;
    picture: string;
    pictureImage: string;
    pictureArcFill: string;
    pictureArcStroke: string;
    bubble: string;
    bubblePointer: string;
  };
};

const ChatMessage = React.forwardRef<HTMLDivElement, Props>(
  ({ message, onResponse, animatedStyles }, ref) => (
    <div
      ref={ref}
      className={cx(styles.container, animatedStyles?.container, {
        [styles.outgoing]: message.direction === 'outgoing',
        [styles.fadeIn]: !ref,
      })}
    >
      <div className={cx(styles.picture, animatedStyles?.picture)}>
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
            className={cx(
              styles.pictureArcStroke,
              animatedStyles?.pictureArcStroke,
            )}
          />
          <path
            d="M -2.362 117.557 C -19.633 42.539 50.782 -23.043 124.384 -0.492 C 154.967 8.879 179.222 32.314 189.638 62.557"
            className={cx(
              styles.pictureArcFill,
              animatedStyles?.pictureArcFill,
            )}
          />
        </svg>
        <img
          src="images/me/full.webp"
          className={cx(
            styles.pictureImage,
            animatedStyles?.pictureImage,
          )}
          alt="A smiley Renato"
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
