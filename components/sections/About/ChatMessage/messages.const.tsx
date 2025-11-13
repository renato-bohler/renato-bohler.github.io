import {
  type Message,
  type OptionSelectMessage,
} from './messages.types';

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

const incoming: Message[] = [
  {
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
              href="http://www.utfpr.edu.br/english"
              rel="noopener noreferrer"
              target="_blank"
              title="Universidade Tecnológica Federal do Paraná"
            >
              UTFPR
            </a>
            )
          </li>
          <li>
            ⚽{' '}
            <a
              href="https://www.athletico.com.br/en/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Athletico Paranaense
            </a>{' '}
            fan
          </li>
          <li>🎮 PC gaming enjoyer</li>
        </ul>
      </>
    ),
    direction: 'incoming',
    id: '1',
    status: 'writing',
    type: 'text',
  },
  {
    content: (
      <>What would you like to know about me? Ask right away!</>
    ),
    direction: 'incoming',
    id: '2',
    status: 'writing',
    type: 'text',
  },
];

export const optionSelect: OptionSelectMessage = {
  content: [
    {
      id: 'career',
      label: 'Tell me about your career',
      responses: [
        {
          content: (
            <>
              I started my journey as a developer very young, at the
              age of <strong>12</strong>. At that time, I began
              learning some basic programming concepts by myself.
            </>
          ),
          direction: 'incoming',
          id: 'career-1',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              In <strong>2015</strong>, I started studying the arts of
              Computer Engineering.
              <br />
              <br />
              In <strong>2021</strong> I finally graduated 🎓🎉
            </>
          ),
          direction: 'incoming',
          id: 'career-2',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              My professional journey started in <strong>2016</strong>
              . Since then, I&apos;ve been focusing my career on
              frontend development (mainly on React), having worked on
              many international projects.
            </>
          ),
          direction: 'incoming',
          id: 'career-3',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              You can check out the{' '}
              <strong>
                <a href="#experience">Experience</a>
              </strong>{' '}
              section if you&apos;re interested in learning more about
              my trajectory.
              <br />
              <br />
              The{' '}
              <strong>
                <a href="#skills">Skills</a>
              </strong>{' '}
              section details some of my abilities — click any of
              those cards if you&apos;re interested in more context.
              <br />
              <br />
              Make sure to also take a look at my open source projects
              in the{' '}
              <strong>
                <a href="#projects">Projects</a>
              </strong>{' '}
              section.
            </>
          ),
          direction: 'incoming',
          id: 'career-4',
          status: 'invisible',
          type: 'text',
        },
      ],
    },
    {
      id: 'team',
      label: 'Who are you in a team?',
      responses: [
        {
          content: (
            <>
              I&apos;m a very technical professional, so I often find
              myself being a technical reference shortly after I join
              a new team.
            </>
          ),
          direction: 'incoming',
          id: 'team-1',
          status: 'invisible',
          type: 'text',
        },
        {
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
          direction: 'incoming',
          id: 'team-2',
          status: 'invisible',
          type: 'text',
        },
        {
          content: (
            <>
              <strong>I truly love what I do</strong>, and I like to
              work with people that are also passionate about their
              work.
            </>
          ),
          direction: 'incoming',
          id: 'team-3',
          status: 'invisible',
          type: 'text',
        },
        {
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
          direction: 'incoming',
          id: 'team-4',
          status: 'invisible',
          type: 'text',
        },
      ],
    },
    {
      id: 'pronounce',
      label: 'How do you pronounce your name?',
      responses: [
        {
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
                <em>bowler</em>
              </strong>
              .
            </>
          ),
          direction: 'incoming',
          id: 'pronounce-1',
          status: 'invisible',
          type: 'text',
        },
        {
          content: {
            src: '/sounds/pronunciation.mp3',
            type: 'audio/mpeg',
          },
          direction: 'incoming',
          id: 'pronounce-2',
          status: 'invisible',
          type: 'audio',
        },
      ],
    },
    {
      id: 'contact',
      label: 'How can I contact you?',
      responses: [
        {
          content: (
            <>
              I&apos;m glad you asked 😄
              <br />
              <br />
              Just fill this form and I&apos;ll get back to you ASAP.
            </>
          ),
          direction: 'incoming',
          id: 'contact-1',
          status: 'invisible',
          type: 'text',
        },
        {
          direction: 'outgoing',
          id: 'contact-2',
          status: 'invisible',
          type: 'contact-form',
        },
      ],
    },
    {
      id: FAST_MODE_ID,
      label: 'Can you please just type faster?',
      responses: [
        {
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
          direction: 'incoming',
          id: `${FAST_MODE_ID}-response`,
          status: 'invisible',
          type: 'text',
        },
      ],
    },
  ],
  direction: 'outgoing',
  id: 'option-select',
  status: 'visible',
  type: 'option-select',
};

export const end: Message = {
  content: (
    <>
      Well, that was a lovely conversation 🤩
      <br />
      <br />
      If you want to know more about me, feel free to keep on
      scrolling!
    </>
  ),
  direction: 'incoming',
  id: 'end',
  status: 'writing',
  type: 'text',
};

export const messages = [...incoming, optionSelect];
