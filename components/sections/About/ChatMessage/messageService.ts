import {
  FAST_MODE_ID,
  end,
  messages,
  optionSelect,
} from './messages.const';
import { type Message, type Option } from './messages.types';

// Time it takes for a message to be added
const MESSAGE_START_BASE_MS = 1000;
const MESSAGE_START_VARIANCE_MS = 500;

// Time it takes for a message to finish writing
const MESSAGE_WRITE_BASE_MS = 2750;
const MESSAGE_WRITE_VARIANCE_MS = 750;

class MessageService {
  connected = false;
  fastMode = false;
  finished = false;

  selectedResponses: string[] = [];
  sentMessages: Message[] = [];
  timeouts: number[] = [];

  connect() {
    if (this.connected) return;
    if (this.finished) return;

    this.connected = true;
    this.resumeMessages();
  }

  disconnect() {
    if (!this.connected) return;

    this.connected = false;

    this.timeouts.forEach((timeout) => window.clearTimeout(timeout));
    this.timeouts = [];
  }

  endChat() {
    this.sentMessages.push(end);
    this.onMessage(end);

    this.timeouts.push(
      window.setTimeout(
        () => {
          this.finishMessage();
          this.finished = true;
          this.disconnect();
        },
        this.getTime(
          MESSAGE_WRITE_BASE_MS,
          MESSAGE_WRITE_VARIANCE_MS,
        ),
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
    this.updateSentMessage(writingMessageStatus);
    this.onMessage(writingMessageStatus);
    this.queueSendNextMessage();
  }

  getTime(base: number, variance: number) {
    const varianceSignal = Math.random() < 0.5 ? 1 : -1;

    return (
      (base + varianceSignal * Math.random() * variance) /
      (this.fastMode ? 5 : 1)
    );
  }

  handleStale() {
    if (this.shouldEndChat()) {
      this.queueEndChat();
      return;
    }

    if (this.shouldResendOptionSelect()) this.resendOptionSelect();
  }

  onMessage(_message: Message) {}

  onResponse(option: Option) {
    if (option.id === 'fast-mode') this.fastMode = true;

    this.selectedResponses.push(option.id);
    this.sentMessages.push(...option.responses);
    this.sendNextMessage();
  }

  queueEndChat() {
    this.timeouts.push(
      window.setTimeout(
        () => this.endChat(),
        this.getTime(1500, 250),
      ),
    );
  }

  queueFinishMessage() {
    this.timeouts.push(
      window.setTimeout(
        () => this.finishMessage(),
        this.getTime(
          MESSAGE_WRITE_BASE_MS,
          MESSAGE_WRITE_VARIANCE_MS,
        ),
      ),
    );
  }

  queueSendNextMessage() {
    this.timeouts.push(
      window.setTimeout(
        () => this.sendNextMessage(),
        this.getTime(
          MESSAGE_START_BASE_MS,
          MESSAGE_START_VARIANCE_MS,
        ),
      ),
    );
  }

  resendOptionSelect() {
    const newOptionSelect = {
      ...optionSelect,
      content: (optionSelect.content || []).map((option) => {
        if (!this.selectedResponses.includes(option.id))
          return option;

        return { ...option, disabled: true };
      }),
      id: `${optionSelect.id}-${
        this.sentMessages.filter(
          (message) => message.type === 'option-select',
        ).length + 1
      }`,
    };

    this.sentMessages.push(newOptionSelect);
    this.onMessage(newOptionSelect);
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
      this.handleStale();
      return;
    }

    const isOutgoing = nextMessage.direction === 'outgoing';

    const nextMessageStatus: Message = {
      ...nextMessage,
      status: isOutgoing ? 'visible' : 'writing',
    };

    if (nextMessage.status === 'invisible')
      this.updateSentMessage(nextMessageStatus);
    else this.sentMessages.push(nextMessageStatus);

    this.onMessage(nextMessageStatus);

    if (isOutgoing) this.queueSendNextMessage();
    else this.queueFinishMessage();
  }

  shouldEndChat() {
    if (this.sentMessages.some((message) => message.id === end.id))
      return false;

    if (
      optionSelect.content.some(
        (option) =>
          ![...this.selectedResponses, FAST_MODE_ID].includes(
            option.id,
          ),
      )
    )
      return false;

    return true;
  }

  shouldResendOptionSelect() {
    if (
      this.sentMessages.every(
        (message) => message.type !== 'option-select',
      )
    )
      return false;

    const lastSentMessage =
      this.sentMessages[this.sentMessages.length - 1];

    if (lastSentMessage.type === 'option-select') return false;
    if (lastSentMessage.id === 'end') return false;

    return true;
  }

  updateSentMessage(updated: Message) {
    this.sentMessages = this.sentMessages.map((sentMessage) => {
      if (sentMessage.id !== updated.id) return sentMessage;
      return updated;
    });
  }
}

export const messageService = new MessageService();
