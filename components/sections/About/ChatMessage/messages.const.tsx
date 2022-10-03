import { Message, OptionSelectMessage } from './messageService';

export const FAST_MODE_ID = 'fast-mode';

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

export const outgoing: OptionSelectMessage = {
  id: 'outgoing',
  type: 'option-select',
  direction: 'outgoing',
  status: 'visible',
  content: [
    {
      id: 'option-1',
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
      id: 'option-2',
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
    {
      id: FAST_MODE_ID,
      label: 'Can you please just type faster?',
      responses: [
        {
          id: `${FAST_MODE_ID}-response`,
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              Absolutely!
              <br />
              <em style={{ fontSize: '0.8em' }}>*Cracks knuckles*</em>
            </>
          ),
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
