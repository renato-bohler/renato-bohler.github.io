import messages from './messages.const';

export type Message = {
  id: number;
  type: 'text' | 'audio';
  direction: 'incoming' | 'outgoing';
  content: JSX.Element;
  status: 'invisible' | 'writing' | 'visible';
};

// Time it takes for a message to be added
const MESSAGE_START_BASE_MS = 1000;
const MESSAGE_START_VARIANCE_MS = 500;

// Time it takes for a message to finish writing
const MESSAGE_WRITE_BASE_MS = 2500;
const MESSAGE_WRITE_VARIANCE_MS = 1000;

const getTime = (base: number, variance: number) => {
  const varianceSignal = Math.random() < 0.5 ? 1 : -1;
  return base + varianceSignal * Math.random() * variance;
};

class MessageService {
  connected = false;
  timeouts: number[] = [];
  sentMessages: Message[] = [];

  connect() {
    this.connected = true;

    this.resumeMessages();
  }

  disconnect() {
    this.connected = false;

    this.timeouts.forEach((timeout) => window.clearTimeout(timeout));
    this.timeouts = [];
  }

  onMessage(_message: Message) {}

  resumeMessages() {
    if (this.sentMessages.length === 0) {
      this.sendFirstMessage();
      return;
    }

    if (
      this.sentMessages.find(
        (message) => message.status === 'writing',
      )
    ) {
      this.queueFinishMessage();
      return;
    }

    if (
      this.sentMessages.find(
        (message) => message.status === 'invisible',
      )
    ) {
      this.queueWriteMessage();
      return;
    }

    this.queueSendNextMessage();
  }

  sendFirstMessage() {
    const firstMessage: Message = {
      ...messages[0],
      status: 'visible',
    };

    this.sentMessages.push(firstMessage);
    this.onMessage(firstMessage);
    this.queueSendNextMessage();
  }

  sendNextMessage() {
    const nextMessage = messages.find(
      (message) =>
        !this.sentMessages.some(
          (sentMessage) => sentMessage.id === message.id,
        ),
    );

    if (!nextMessage) return;

    const isOutgoing = nextMessage.direction === 'outgoing';

    const nextMessageStatus: Message = {
      ...nextMessage,
      status: isOutgoing ? 'visible' : 'writing',
    };

    this.sentMessages.push(nextMessageStatus);
    this.onMessage(nextMessageStatus);
    if (isOutgoing) this.queueSendNextMessage();
    else this.queueFinishMessage();
  }

  queueSendNextMessage() {
    this.timeouts.push(
      window.setTimeout(
        () => this.sendNextMessage(),
        getTime(MESSAGE_START_BASE_MS, MESSAGE_START_VARIANCE_MS),
      ),
    );
  }

  writeMessage() {
    const invisibleMessage = messages.find(
      (message) => message.status === 'invisible',
    );

    if (!invisibleMessage) return;

    invisibleMessage.status = 'writing';
    this.sentMessages = this.sentMessages.map((sentMessage) => {
      if (sentMessage.id !== invisibleMessage.id) return sentMessage;
      return invisibleMessage;
    });
    this.onMessage(invisibleMessage);
    this.queueFinishMessage();
  }

  queueWriteMessage() {
    this.timeouts.push(
      window.setTimeout(
        () => this.writeMessage(),
        getTime(MESSAGE_WRITE_BASE_MS, MESSAGE_WRITE_VARIANCE_MS),
      ),
    );
  }

  finishMessage() {
    const writingMessage = this.sentMessages.find(
      (message) => message.status === 'writing',
    );

    if (!writingMessage) return;

    const writingMessageStatus: Message = {
      ...writingMessage,
      status: 'visible',
    };
    this.sentMessages = this.sentMessages.map((sentMessage) => {
      if (sentMessage.id !== writingMessageStatus.id)
        return sentMessage;
      return writingMessageStatus;
    });
    this.onMessage(writingMessageStatus);
    this.queueSendNextMessage();
  }

  queueFinishMessage() {
    this.timeouts.push(
      window.setTimeout(
        () => this.finishMessage(),
        getTime(MESSAGE_WRITE_BASE_MS, MESSAGE_WRITE_VARIANCE_MS),
      ),
    );
  }
}

export default new MessageService();
