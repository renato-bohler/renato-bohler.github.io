import { Message, OptionSelectMessage } from './messages.types';

const getAge = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  let age = year - 1992;
  if (month < 6 || (month === 6 && day < 6)) age--;

  return age;
};

export const FAST_MODE_ID = 'fast-mode';

export const incoming: Message[] = [
  {
    id: '1',
    type: 'text',
    direction: 'incoming',
    status: 'writing',
    content: (
      <>
        I&apos;m <strong>Renato Böhler</strong>, here are some quick
        facts about me:{' '}
        <ul
          style={{ listStyle: 'none', margin: 0, padding: '0 1em' }}
        >
          <li>🌎 Brazilian</li>
          <li>🎂 {getAge()} years old</li>
          <li>
            🎓 Computer Engineer (
            <a
              title="Universidade Tecnológica Federal do Paraná"
              href="http://www.utfpr.edu.br/english"
              target="_blank"
              rel="noopener noreferrer"
            >
              UTFPR
            </a>
            )
          </li>
          <li>
            ⚽{' '}
            <a
              href="https://www.athletico.com.br/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Athletico Paranaense
            </a>{' '}
            fan
          </li>
          <li>🎮 PC gaming enjoyer</li>
        </ul>
      </>
    ),
  },
  {
    id: '2',
    type: 'text',
    direction: 'incoming',
    status: 'writing',
    content: (
      <>Is there anything else you&apos;d like to know about me?</>
    ),
  },
];

export const optionSelect: OptionSelectMessage = {
  id: 'option-select',
  type: 'option-select',
  direction: 'outgoing',
  status: 'visible',
  content: [
    {
      id: 'career',
      label: 'Tell me about your career',
      responses: [
        {
          id: 'career-1',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              I started my journey as a developer very young, at the
              age of <strong>12</strong>. At that time, I began
              learning some basic programming concepts by myself.
            </>
          ),
        },
        {
          id: 'career-2',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              In <strong>2015</strong>, I started studying the arts of
              Computer Engineering.
              <br />
              <br />
              In <strong>2021</strong> I finally graduated 🎓🎉
            </>
          ),
        },
        {
          id: 'career-3',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              My professional journey started in <strong>2016</strong>
              . Since then, I&apos;ve been focusing my career on
              frontend development (mainly on React), having worked on
              many international projects.
            </>
          ),
        },
        {
          id: 'career-4',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              {/* TODO: mention Experience and Projects sections once those exist */}
              You can check out the{' '}
              <strong>
                <a href="#skills">Skills</a>
              </strong>{' '}
              section if you&apos;re interested in my trajectory. Each
              card in that section contains some background on each
              technology I have experience with.
            </>
          ),
        },
      ],
    },
    {
      id: 'team',
      label: 'Who are you in a team?',
      responses: [
        {
          id: 'team-1',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              I&apos;m a very technical professional, so I often find
              myself being a technical reference shortly after I join
              a new team.
            </>
          ),
        },
        {
          id: 'team-2',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              I see myself an easy guy to work with: I like
              simplifying things for people around me, and{' '}
              <strong>
                I&apos;m always happy to help whoever I can
              </strong>
              .
            </>
          ),
        },
        {
          id: 'team-3',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              <strong>I truly love what I do</strong>, and I like to
              work with people that are also passionate about their
              work.
            </>
          ),
        },
        {
          id: 'team-4',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              <strong>But don&apos;t take my word for it!</strong>
              <br />
              <br />
              Go to the{' '}
              <strong>
                <a href="#testimonials">Testimonials</a>
              </strong>{' '}
              section and check what some of my former colleagues have
              to say 😄
            </>
          ),
        },
      ],
    },
    {
      id: 'pronounce',
      label: 'How do you pronounce your name?',
      responses: [
        {
          id: 'pronounce-1',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              <strong>Renato</strong> sounds almost like{' '}
              <strong>
                <em>heh</em>
              </strong>
              —
              <strong>
                <em>nah</em>
              </strong>
              —
              <strong>
                <em>too</em>
              </strong>
              .<br />
              <br />
              And in Brazilian Portuguese, we pronounce{' '}
              <strong>Böhler</strong> almost like{' '}
              <strong>
                <em>baller</em>
              </strong>
              .
            </>
          ),
        },
        {
          id: 'pronounce-2',
          type: 'audio',
          direction: 'incoming',
          status: 'invisible',
          content: {
            type: 'audio/mpeg',
            src: '/sounds/pronunciation.mp3',
          },
        },
      ],
    },
    {
      id: 'contact',
      label: 'How can I contact you?',
      responses: [
        {
          id: 'contact-1',
          type: 'text',
          direction: 'incoming',
          status: 'invisible',
          content: (
            <>
              I&apos;m glad you asked 😄
              <br />
              <br />
              Just fill this form and I&apos;ll get back to you ASAP.
            </>
          ),
        },
        {
          id: 'contact-2',
          type: 'contact-form',
          direction: 'outgoing',
          status: 'invisible',
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
              <strong>
                <em style={{ fontSize: '0.8em' }}>
                  *cracks knuckles*
                </em>
              </strong>
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
  content: (
    <>
      Well, that was a lovely conversation 🤩
      <br />
      <br />
      If you want to know more about me, feel free to keep on
      scrolling!
    </>
  ),
};

const messages = [...incoming, optionSelect];

export default messages;
