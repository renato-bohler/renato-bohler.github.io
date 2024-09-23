import { type ReactNode } from 'react';

type BaseMessage = {
  direction: 'incoming' | 'outgoing';
  id: string;
  status: 'invisible' | 'visible' | 'writing';
};

export type TextMessage = {
  content: ReactNode;
  type: 'text';
} & BaseMessage;

export type AudioMessage = {
  content: {
    src: string;
    type: string;
  };
  type: 'audio';
} & BaseMessage;

export type Option = {
  disabled?: boolean;
  id: string;
  label: string;
  responses: Message[];
};

export type OptionSelectMessage = {
  content: Option[];
  type: 'option-select';
} & BaseMessage;

export type ContactFormMessage = {
  type: 'contact-form';
} & BaseMessage;

export type Message =
  | AudioMessage
  | ContactFormMessage
  | OptionSelectMessage
  | TextMessage;
