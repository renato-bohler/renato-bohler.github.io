import { Message, ResponseMessage } from './messageService';

export const incoming: Message[] = [
  {
    id: '1',
    type: 'text',
    direction: 'incoming',
    status: 'writing',
    content: <>Message 1</>,
  },
  {
    id: '2',
    type: 'text',
    direction: 'incoming',
    status: 'writing',
    content: <>Message 2</>,
  },
];

export const outgoing: ResponseMessage = {
  id: 'outgoing',
  type: 'response',
  direction: 'outgoing',
  status: 'visible',
  content: [
    {
      label: 'Option #1',
      responses: [
        {
          id: 'response-1-1',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: <>Response 1-1</>,
        },
        {
          id: '3-1-2',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: <>Response 1-2</>,
        },
      ],
    },
    {
      label: 'Option #2',
      responses: [
        {
          id: 'response-2-1',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: <>Response 2-1</>,
        },
        {
          id: 'response-2-2',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: <>Response 2-2</>,
        },
      ],
    },
  ],
};

export const end: Message = {
  id: 'end',
  type: 'text',
  direction: 'incoming',
  status: 'writing',
  content: <>Thanks!</>,
};

const messages = [...incoming, outgoing];

export default messages;
