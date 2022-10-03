import classNames from 'classnames';

import styles from './About.module.css';
import AnimatedChatMessage from './ChatMessage/AnimatedChatMessage/AnimatedChatMessage';
import ChatMessage from './ChatMessage/ChatMessage';
import useMessages from './ChatMessage/useMessages';
import useAboutProgress from './useAboutProgress';

const About: React.FC = () => {
  const { progress, scrollRef, setAboutRefs } = useAboutProgress();
  const { messages, onResponse, setMessagesRefs } = useMessages();

  return (
    <section>
      <div className={styles.scroll} ref={scrollRef}>
        <div
          className={classNames(
            styles.messages,
            styles['animated-message'],
          )}
          ref={setAboutRefs}
        >
          <AnimatedChatMessage progress={progress}>
            Hello there 👋
          </AnimatedChatMessage>
        </div>
      </div>

      <div id="about" aria-hidden className={styles.anchor} />
      <div
        ref={setMessagesRefs}
        className={classNames(
          styles.messages,
          styles['message-list'],
        )}
      >
        {messages
          .filter((message) => message.status !== 'invisible')
          .map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
              onResponse={onResponse}
            />
          ))}
      </div>
    </section>
  );
};

export default About;
