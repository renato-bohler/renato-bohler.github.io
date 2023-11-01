type BaseMessage = {
  direction: 'incoming' | 'outgoing';
  id: string;
  status: 'invisible' | 'visible' | 'writing';
};

export type TextMessage = BaseMessage & {
  content: React.ReactNode;
  type: 'text';
};

export type AudioMessage = BaseMessage & {
  content: {
    src: string;
    type: string;
  };
  type: 'audio';
};

export type Option = {
  disabled?: boolean;
  id: string;
  label: string;
  responses: Message[];
};

export type OptionSelectMessage = BaseMessage & {
  content: Option[];
  type: 'option-select';
};

export type ContactFormMessage = BaseMessage & {
  type: 'contact-form';
};

export type Message =
  | AudioMessage
  | ContactFormMessage
  | OptionSelectMessage
  | TextMessage;
