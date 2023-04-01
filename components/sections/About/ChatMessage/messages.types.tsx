type BaseMessage = {
  id: string;
  direction: 'incoming' | 'outgoing';
  status: 'invisible' | 'writing' | 'visible';
};

export type TextMessage = BaseMessage & {
  type: 'text';
  content: React.ReactNode;
};

export type AudioMessage = BaseMessage & {
  type: 'audio';
  content: {
    type: string;
    src: string;
  };
};

export type Option = {
  id: string;
  label: string;
  disabled?: boolean;
  responses: Message[];
};

export type OptionSelectMessage = BaseMessage & {
  type: 'option-select';
  content: Option[];
};

export type ContactFormMessage = BaseMessage & {
  type: 'contact-form';
};

export type Message =
  | TextMessage
  | AudioMessage
  | OptionSelectMessage
  | ContactFormMessage;
