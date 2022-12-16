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
  classNames?: {
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
  ({ message, onResponse, classNames }, ref) => (
    <div
      ref={ref}
      className={cx(styles.container, classNames?.container, {
        [styles.outgoing]: message.direction === 'outgoing',
        [styles['fade-in']]: !ref,
      })}
    >
      <div className={cx(styles.picture, classNames?.picture)}>
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
              classNames?.pictureArcStroke,
            )}
          />
          <path
            d="M -2.362 117.557 C -19.633 42.539 50.782 -23.043 124.384 -0.492 C 154.967 8.879 179.222 32.314 189.638 62.557"
            className={cx(
              styles.pictureArcFill,
              classNames?.pictureArcFill,
            )}
          />
        </svg>
        <img
          src="images/me/full.webp"
          // TODO: camelCase?
          className={cx(
            styles.pictureImage,
            classNames?.pictureImage,
          )}
          alt="A smiley Renato"
        />
      </div>
      <div className={cx(styles.bubble, classNames?.bubble)}>
        <div
          // TODO: camelCase?
          className={cx(
            styles['bubble-pointer'],
            classNames?.bubblePointer,
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
