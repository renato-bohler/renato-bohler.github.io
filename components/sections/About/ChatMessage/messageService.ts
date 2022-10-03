import messages, { end, outgoing } from './messages.const';

type BaseMessage = {
  id: string;
  direction: 'incoming' | 'outgoing';
  status: 'invisible' | 'writing' | 'visible';
};

type TextMessage = BaseMessage & {
  type: 'text';
  content: React.ReactNode;
};

export type ResponseMessage = BaseMessage & {
  type: 'response';
  content: {
    label: string;
    disabled?: boolean;
    responses: Message[];
  }[];
};

export type Message = TextMessage | ResponseMessage;

// Time it takes for a message to be added
const MESSAGE_START_BASE_MS = 1000;
const MESSAGE_START_VARIANCE_MS = 500;

// Time it takes for a message to finish writing
const MESSAGE_WRITE_BASE_MS = 2750;
const MESSAGE_WRITE_VARIANCE_MS = 750;

const getTime = (base: number, variance: number) => {
  const varianceSignal = Math.random() < 0.5 ? 1 : -1;
  return base + varianceSignal * Math.random() * variance;
};

class MessageService {
  connected = false;
  finished = false;
  timeouts: number[] = [];
  sentMessages: Message[] = [];
  selectedResponses: string[] = [];

  connect() {
    if (this.finished) return;

    this.connected = true;
    this.resumeMessages();
  }

  disconnect() {
    this.connected = false;

    this.timeouts.forEach((timeout) => window.clearTimeout(timeout));
    this.timeouts = [];
  }

  onMessage(_message: Message) {}

  onResponse(messages: Message[], label: string) {
    this.selectedResponses.push(label);
    this.sentMessages.push(...messages);
    this.sendNextMessage();
  }

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
    const nextMessage =
      this.sentMessages.find(
        (message) => message.status === 'invisible',
      ) ||
      messages.find(
        (message) =>
          !this.sentMessages.some(
            (sentMessage) => sentMessage.id === message.id,
          ),
      );

    if (!nextMessage) {
      this.handleOutgoing();
      return;
    }

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

  handleOutgoing() {
    if (this.shouldEndChat()) {
      this.queueEndChat();
      return;
    }

    if (this.shouldResendOutgoing()) {
      this.resendOutgoing();
    }
  }

  shouldResendOutgoing() {
    if (
      this.sentMessages.every(
        (message) => message.direction !== 'outgoing',
      )
    )
      return false;

    if (
      this.sentMessages[this.sentMessages.length - 1].direction ===
      'outgoing'
    )
      return false;

    return true;
  }

  resendOutgoing() {
    const newOutgoing = {
      ...outgoing,
      id: `${outgoing.id}-${
        this.sentMessages.filter(
          (message) => message.direction === 'outgoing',
        ).length + 1
      }`,
      content: (outgoing.content || []).map((option) => {
        if (!this.selectedResponses.includes(option.label))
          return option;

        return { ...option, disabled: true };
      }),
    };
    this.sentMessages.push(newOutgoing);
    this.onMessage(newOutgoing);
  }

  shouldEndChat() {
    if (this.sentMessages.some((message) => message.id === end.id))
      return false;

    if (
      outgoing.content.some(
        (message) => !this.selectedResponses.includes(message.label),
      )
    )
      return false;

    return true;
  }

  endChat() {
    this.sentMessages.push(end);
    this.onMessage(end);

    this.timeouts.push(
      window.setTimeout(() => {
        this.finishMessage();
        this.finished = true;
        this.disconnect();
      }, getTime(MESSAGE_WRITE_BASE_MS, MESSAGE_WRITE_VARIANCE_MS)),
    );
  }

  queueEndChat() {
    this.timeouts.push(
      window.setTimeout(() => this.endChat(), getTime(1500, 250)),
    );
  }
}

export default new MessageService();
