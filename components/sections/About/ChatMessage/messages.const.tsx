import { Message } from './messageService';

const messages: Message[] = Array.from({ length: 10 })
  .map((_, i) => i + 1)
  .map((i) => ({
    id: i,
    type: 'text',
    content: (
      <>
        {Array.from({ length: i })
          .map((_, j) => j + 1)
          .map((j) => (
            <div key={`${i}-${j}`}>
              Message{' '}
              <strong>
                {i}-{j}
              </strong>
            </div>
          ))}
      </>
    ),
    status: 'writing',
  }));

export default messages;
