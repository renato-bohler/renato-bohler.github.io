const skills: Skill[] = [
  {
    brief: (
      <>
        <span>
          <strong>JavaScript</strong> was the first programming
          language I had contact with when I was 12. At that time,
          I&apos;d create websites just for fun.
        </span>
        <span>
          I&apos;ve been closely following the evolution of JS ever
          since, from the pre-ES3, jQuery times to the modern JS we
          have today.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#f7df1e',
        text: 'black',
      },
      normal: {
        background: '#f7df1e',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#645a0a' },
    },
    description: (
      <>
        <p>
          <strong>
            JavaScript is the programming language I&apos;m the most
            experienced with:
          </strong>
          . I&apos;ve been using it since the ES3 days (in the early
          2000s).
        </p>
        <p>
          I started learning JS because I used to build
          videogame-related websites just as a hobby. In fact, some of
          the websites I&apos;ve created are still up and running (and
          actually being used 😱).
        </p>
        <p>
          Professionally, I&apos;ve been using JavaScript mainly to
          build user interfaces (with React, Angular, etc.). I also
          have experience writing backend applications using Express
          and developing Kafka integrations in Node.js applications.
        </p>
        <p>
          I love this language, and{' '}
          <strong>I&apos;m always keeping myself updated</strong> with
          its new libraries and features.
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={35}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'javascript',
    name: 'JavaScript',
    studying: true,
    usageLevel: 3,
    yearsExperience: 7,
  },
  {
    colors: {
      contrast: {
        background: '#aae06a',
        text: 'black',
      },
      normal: {
        background: '#82cd2a',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#3c6011' },
    },
    description: (
      <>
        <p>
          Even though I&apos;ve been focusing my career on the
          frontend path these last few years, I have experience
          building Node.js applications.
        </p>
        <p>
          My experience with server-side Node.js includes small
          backends developed using Express and multi-system Kafka
          integration applications.
        </p>
        <p>
          I&apos;ve been also helping building and maintaining
          pipeline monitoring tools built in Node.js, like for
          instance an automated{' '}
          <a
            href="https://www.ada.gov/"
            rel="noopener noreferrer"
            target="_blank"
          >
            ADA compliance
          </a>{' '}
          checker.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'node-js',
    name: 'Node.js',
    studying: false,
    usageLevel: 1,
    yearsExperience: 1.5,
  },
  {
    colors: {
      contrast: {
        background: '#004026',
        text: 'white',
      },
      normal: {
        background: '#01814e',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#69d7ab' },
    },
    description: (
      <>
        <p>
          <strong>
            Regular expressions are like a Swiss Army Knife
          </strong>{' '}
          for developers. It can be super convenient, but you must
          know how to use it — and it isn&apos;t always easy.
        </p>

        <p>
          My skills in RegExp allow me to fetch data and refactor code
          more efficiently.
        </p>
        <p>
          RegExp is a fantastic and powerful tool, and this is why
          I&apos;m always eager to learn more about it!
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={125}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'regexp',
    name: 'RegExp',
    studying: true,
    usageLevel: 2,
  },
  {
    brief: (
      <>
        <span>
          <strong>TypeScript</strong> is one of those things that you
          might ask yourself: <em>&quot;why do I need that?&quot;</em>{' '}
          — but when you get used to it, you&apos;ll never look back.
        </span>
        <span>
          I&apos;ve been using <strong>TypeScript</strong> since
          mid-2019, and I&apos;ll add it to every project I start
          today, no matter how small it might be.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#005c9a',
        text: 'white',
      },
      normal: {
        background: '#007acd',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#8dd1ff' },
    },
    description: (
      <>
        <p>
          To be honest, when I first heard about TypeScript, I did not
          get super hyped. My first experience with types in
          JavaScript was with Flow + AngularJS, and the lack of proper
          documentation made the whole experience a kind of a mess.
        </p>
        <p>
          But when I started using TypeScript professionally in 2019,
          everything changed. TypeScript makes everything much more
          explicit, easy, and reliable that{' '}
          <strong>
            it&apos;s hard for me to think about starting a new
            project without it these days
          </strong>
          .
        </p>
        <p>
          I do realize that not everything about TypeScript is
          perfect, though. Libraries with incorrect or incompatible
          typings can be a pain to deal with. Also, assigning the
          correct type for complex scenarios gets hard pretty fast.
        </p>
        <p>
          But TypeScript has come a long way. Having such a great
          community also helps: any problem you might have has
          probably already been solved by someone (Google for the
          rescue 😅).
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={35}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'typescript',
    name: 'TypeScript',
    studying: true,
    usageLevel: 3,
    yearsExperience: 4,
  },
  {
    colors: {
      contrast: {
        background: '#a92709',
        text: 'white',
      },
      normal: {
        background: '#f34f29',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#ffbdaf' },
    },
    description: (
      <>
        <p>
          I really like using Git directly through the terminal: it
          enabled me to understand fundamentally what every action is
          doing under the hood.
        </p>
        <p>
          Git has various helpful (but not so often used) features. My
          favorite one is <code>bisect</code>, as it makes it easy to
          find the commit which introduced a behavior on the system.
        </p>
        <p>
          I have experienced a lot of different branching strategies
          throughout my career — most of them were variations of the{' '}
          <a
            href="https://nvie.com/posts/a-successful-git-branching-model"
            rel="noopener noreferrer"
            target="_blank"
          >
            Git Flow
          </a>
          .
        </p>
        <p>
          In my personal projects, I like to commit changes with
          messages according to the{' '}
          <a
            href="https://www.conventionalcommits.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Conventional Commits
          </a>
          .
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            fill={colors.background}
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}-1`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}-2`} />
        </svg>
      );
    },
    id: 'git',
    name: 'Git',
    studying: false,
    usageLevel: 3,
    yearsExperience: 6,
  },
  {
    colors: {
      contrast: {
        background: '#c0c0c0',
        text: 'black',
      },
      normal: {
        background: '#c0c0c0',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#4c4c4c' },
    },
    description: (
      <>
        <p>
          My first opportunity to learn and apply Continuous
          Integration and Continuous Deployment practices happened
          while developing{' '}
          <a
            href="https://bohler.dev/redux-form-input-masks"
            rel="noopener noreferrer"
            target="_blank"
          >
            redux-form-input-masks
          </a>
          .
        </p>
        <p>
          Since then, I&apos;ll always follow these practices on every
          project. I firmly believe that the time invested in setting
          up these tools pays off in any project.
        </p>
        <p>
          Professionally, I have experience using Travis, CircleCI,
          Jenkins, and GitHub Actions.
        </p>
        <p>
          One of the most recent improvements I&apos;ve implemented on
          a project&apos;s pipeline was an{' '}
          <strong>ADA compliance bot</strong>. This bot would use{' '}
          <a
            href="https://www.deque.com/axe"
            rel="noopener noreferrer"
            target="_blank"
          >
            axe
          </a>{' '}
          to scan for accessibility violations and upload the report
          to an S3 bucket. This triggered a Lambda function that
          parsed and filtered the report to post a pull request
          comment to summarize the findings.
        </p>
        <p>
          🚩 I&apos;m also experienced in using feature flags to
          control and experiment with the release of new features
          (using Optimizely or LaunchDarkly).
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={5}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'ci-cd',
    name: 'CI/CD',
    studying: false,
    usageLevel: 3,
  },
  {
    brief: (
      <>
        <span>
          I&apos;ve been in love with <strong>React</strong> since I
          first used it in 2017.
        </span>
        <span>
          What I really enjoy about <strong>React</strong>, apart from
          its component-based architecture, is that it&apos;s all just
          JavaScript.
        </span>
        <span>
          The whole <strong>React</strong> ecosystem also helps make
          it awesome.
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#61dbfb',
        text: 'black',
      },
      normal: {
        background: '#61dbfb',
        text: '#222222',
      },
      scrollBar: { trackColor: '#2e4f58' },
    },
    description: (
      <>
        <p>
          React is definitely my preferred solution when it comes to
          UI development. Recently, most of my work has been
          developing React projects.
        </p>
        <p>
          Alongside React, I generally use libraries like{' '}
          <code>redux</code>, <code>redux-thunk</code>,{' '}
          <code>redux-form</code>, <code>material-ui</code>,{' '}
          <code>styled-components</code>, <code>reakit</code>, among
          others.
        </p>
        <p>
          <strong>Fun fact 😆:</strong> the page you&apos;re reading
          right now was made using React using static-site generation
          from{' '}
          <a
            href="https://nextjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>
          .
        </p>
        <p>
          Some of the most complex things I&apos;ve built with React
          are open-source projects:{' '}
          <a
            href="https://bohler.dev/logossim"
            rel="noopener noreferrer"
            target="_blank"
          >
            Logossim
          </a>{' '}
          and{' '}
          <a
            href="https://bohler.dev/what-the-filter"
            rel="noopener noreferrer"
            target="_blank"
          >
            what the filter?
          </a>
          .
        </p>
        <p>
          I have experience developing server-side React applications
          and building more complex components such as:
        </p>
        <ul>
          <li>
            customized rich text editors using{' '}
            <a
              href="https://draftjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              <code>draft-js</code>
            </a>
          </li>
          <li>integrations with QRCode reading devices</li>
          <li>integrations with real-time measurement devices</li>
        </ul>
        <p>
          I also have experience with setting up the whole workflow
          for component libraries using{' '}
          <a
            href="https://vitejs.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite
          </a>{' '}
          (for bundling),{' '}
          <a
            href="https://intuit.github.io/auto/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Auto
          </a>{' '}
          (for automated releasing), and{' '}
          <a
            href="https://storybook.js.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Storybook
          </a>
          .
        </p>
        <p>
          I&apos;m always on the lookout for new React features, and
          I&apos;m an active member of React communities. I also had
          the opportunity to{' '}
          <a
            href="https://github.com/reactjs/pt-BR.reactjs.org/pull/31"
            rel="noopener noreferrer"
            target="_blank"
          >
            collaborate
          </a>{' '}
          with the original translation of the{' '}
          <a
            href="https://pt-br.reactjs.org/docs/react-api.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            API Reference (in Portuguese)
          </a>{' '}
          on the official React docs.
        </p>
        <p>
          <strong>TL;DR:</strong> I am a React fanboy 😅
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={30}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'react',
    name: 'React',
    studying: true,
    usageLevel: 3,
    yearsExperience: 6,
  },
  {
    brief: (
      <>
        <span>
          <strong>CSS is not exactly easy</strong>. There are loads of
          concepts, properties, selectors, and functions to
          understand, animations and transitions to tinker with,
          responsive design to consider, and cross-browser
          compatibility to work around...
        </span>
        <span>
          ... but I think I&apos;m lucky to be around for so long that
          all of that is kind of natural to me 😅
        </span>
      </>
    ),
    colors: {
      contrast: {
        background: '#1b73ba',
        text: '#ffffff',
      },
      normal: {
        background: '#1b73ba',
        text: '#ffffff',
      },
      scrollBar: { trackColor: '#5fbbd3' },
    },
    description: (
      <>
        <p>
          As a frontend developer,{' '}
          <strong>
            learning CSS is an essential part of mastering web
            development
          </strong>
          .
        </p>
        <p>
          I&apos;ve been improving my CSS skills for the best part of
          the last 2 decades: I was there when we had to use{' '}
          <code>table</code>s to create layouts, when{' '}
          <em>tableless</em> was a thing, and when vertical aligning
          an element was close to impossible 🤣
        </p>
        <p>
          My journey learning CSS has been a continuous one. I like to
          keep myself up to date with new CSS features by reading the{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            rel="noopener noreferrer"
            target="_blank"
          >
            CSS MDN Docs
          </a>{' '}
          and{' '}
          <a
            href="https://web.dev/blog/"
            rel="noopener noreferrer"
            target="_blank"
          >
            web.dev&apos;s blog
          </a>{' '}
          every once in a while.
        </p>
        <p>
          Call me weird, but I have the habit of inspecting every
          website that makes me wonder{' '}
          <em>
            &ldquo;how would I implement something like that?&rdquo;
          </em>{' '}
          🤔 — and I learned a lot doing that!
        </p>
        <p>
          I also like checking{' '}
          <a
            href="https://www.awwwards.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Awwwarded
          </a>{' '}
          websites for design inspiration, and implementing and
          tweaking animations and transitions — but you probably
          noticed this already 😅
        </p>
        <p>
          I do have experience configuring and using pre-processors
          like{' '}
          <a
            href="https://sass-lang.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            SASS
          </a>
          , but not so much with CSS frameworks like{' '}
          <a
            href="https://getbootstrap.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Bootstrap
          </a>{' '}
          or{' '}
          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Tailwind
          </a>
          , and that&apos;s something I&apos;d like to fix soon 📖
        </p>
      </>
    ),
    featured: true,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            fill={colors.background}
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}-1`}
          />
          <use fill="#1c88c7" xlinkHref={`#${this.id}-2`} />
          <use fill={colors.text} xlinkHref={`#${this.id}-3`} />
        </svg>
      );
    },
    id: 'css',
    name: 'CSS',
    studying: true,
    usageLevel: 3,
    yearsExperience: 7,
  },
  {
    colors: {
      contrast: {
        background: '#222222',
        text: '#7ee1fb',
      },
      normal: {
        background: '#222222',
        text: '#61dbfb',
      },
      scrollBar: { trackColor: '#5fbbd3' },
    },
    description: (
      <>
        <p>
          While there definitely are fundamental differences between
          React and React Native,{' '}
          <strong>
            coding React Native apps is very similar to coding React
            apps
          </strong>
          .
        </p>
        <p>
          I&apos;m way more experienced with React than with React
          Native, and the similarity between them allows me to feel
          pretty confident while working on React Native applications.
        </p>
        <p>
          In my only professional experience with it, I built a
          healthcare marketplace app (
          <a
            href="https://play.google.com/store/apps/details?id=com.compar.tudobem"
            rel="noopener noreferrer"
            target="_blank"
          >
            Android
          </a>
          ,{' '}
          <a
            href="https://apps.apple.com/br/app/tudobem/id1527314081"
            rel="noopener noreferrer"
            target="_blank"
          >
            iOS
          </a>{' '}
          — in Portuguese) up until just before its first production
          release. For that reason, handling app releases is where my
          knowledge falls short. I know people use tools like{' '}
          <a
            href="https://fastlane.tools"
            rel="noopener noreferrer"
            target="_blank"
          >
            fastlane
          </a>{' '}
          — I just never used them 😅
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={30}
            xlinkHref="#react"
          />
          <use fill={colors.text} xlinkHref="#react" />
        </svg>
      );
    },
    id: 'react-native',
    name: 'React Native',
    studying: true,
    usageLevel: 1,
    yearsExperience: 1,
  },
  {
    colors: {
      contrast: {
        background: '#4e3784',
        text: 'white',
      },
      normal: {
        background: '#6e50b5',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#b0a0d7' },
    },
    description: (
      <>
        <p>
          I get it, I get it... Redux is not the cool kid in the block
          these days. But I believe{' '}
          <strong>
            it&apos;s still a notable state management library
          </strong>{' '}
          when used adequately. It has incredible tooling and a large
          community around it. Libraries like{' '}
          <a
            href="https://redux-toolkit.js.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Redux Toolkit
          </a>{' '}
          also help reduce boilerplate code, one of the main concerns
          devs seem to have with Redux.
        </p>
        <p>
          I&apos;ve got experience using Redux with{' '}
          <code>redux-thunk</code> and <code>redux-saga</code>.
          They&apos;ve been used mainly for API fetching, though, and,
          for that purpose, I&apos;d prefer using{' '}
          <code>react-query</code>, RTK Query, or <code>swr</code>{' '}
          nowadays instead.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={30}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'redux',
    name: 'Redux',
    studying: false,
    usageLevel: 1,
    yearsExperience: 5,
  },
  {
    colors: {
      contrast: {
        background: '#b20027',
        text: 'white',
      },
      normal: {
        background: '#dd0031',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#ffa0b6' },
    },
    description: (
      <>
        <p>
          Though Angular is not my favorite technology,{' '}
          <strong>
            it was the first frontend framework I used professionally
          </strong>
          . It was actually AngularJS (1.x) using Material components,
          and it was kinda buggy sometimes, to be honest. This is why
          I was happy when my team decided to switch from AngularJS to
          React back in the day 😅
        </p>
        <p>
          I&apos;ve had the opportunity to work with Angular 12
          recently, and it is undoubtedly an improvement over the old
          AngularJS.
        </p>
        <p>
          <strong>Don&apos;t get me wrong:</strong> I like working
          with Angular. In fact, I really enjoy trying different
          stuff, as it pushes me out of my comfort zone, which is
          always an opportunity to learn new things.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={80}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'angular',
    name: 'Angular',
    studying: false,
    usageLevel: 1,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: '#7dd1ac',
        text: 'black',
      },
      normal: {
        background: '#41b883',
        text: '#292e31',
      },
      scrollBar: { trackColor: '#292e31' },
    },
    description: (
      <>
        <p>
          Vue has an appealing concept, which is a middle ground
          between Angular and React, with a more gentle learning curve
          than both.
        </p>
        <p>
          My only experience with Vue was building the first version
          of my portfolio, using version 2.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={10}
            xlinkHref={`#${this.id}-1`}
          />
          <use fill={colors.background} xlinkHref={`#${this.id}-2`} />
          <use xlinkHref={`#${this.id}-3`} />
        </svg>
      );
    },
    id: 'vue',
    name: 'Vue',
    studying: false,
    usageLevel: -2,
    yearsExperience: 0.5,
  },
  {
    colors: {
      contrast: {
        background: '#901266',
        text: 'white',
      },
      normal: {
        background: '#e535ab',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#ffc9ed' },
    },
    description: (
      <>
        <p>
          For frontend developers, there&apos;s nothing better than
          GraphQL when it comes to data fetching. The ability to ask
          for exactly what you need and get predictable results is
          incredible and removes a lot of complexity in managing data
          that otherwise would potentially be spread across different
          endpoints (or even different services).
        </p>
        <p>
          I have professional experience using GraphQL with{' '}
          <a
            href="https://www.apollographql.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Apollo
          </a>{' '}
          on the frontend, but I never developed an API using GraphQL.
        </p>
        <p>
          <a
            href="https://relay.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Relay
          </a>{' '}
          seems to be a very interesting GraphQL client. I&apos;ve
          been studying it for a while now, but I never had the chance
          to use it.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={50}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'graphql',
    name: 'GraphQL',
    studying: true,
    usageLevel: 1,
    yearsExperience: 1,
  },
  {
    colors: {
      contrast: {
        background: '#545454',
        text: 'white',
      },
      normal: {
        background: '#545454',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#a1a1a1' },
    },
    description: (
      <>
        <p>
          With my knowledge of relational databases, I&apos;m able to
          elaborate complex queries (with multiple and different types
          of <code>JOIN</code>, <code>GROUP BY</code>,{' '}
          <code>HAVING</code>, subqueries, etc.).
        </p>
        <p>
          I know the core concepts behind a database management
          system, but not deeply enough to do insane query
          optimizations. Also, I don&apos;t have much experience using
          features like procedures or triggers. So, to summarize, I
          don&apos;t consider myself a DB specialist 😅 but I can
          certainly get most of the job done.
        </p>
        <p>
          Professionally, I have experience using MySQL, PostgreSQL,
          and Microsoft SQL Server. I also have experience using ORMs
          such as Hibernate.
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeWidth={30}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'sql',
    name: 'SQL',
    studying: false,
    usageLevel: -2,
    yearsExperience: 2,
  },
  {
    colors: {
      contrast: {
        background: '#b00d0f',
        text: 'white',
      },
      normal: {
        background: '#ef2d30',
        text: '#f3f3f3',
      },
      scrollBar: { trackColor: '#ffbdbe' },
    },
    description: (
      <>
        <p>
          Interested in developing native Android applications, I
          started studying Java around 2014. At that time, I developed
          some Android apps for personal use but never actually
          released them (or their source codes).
        </p>
        <p>
          One of those apps, for instance, was an{' '}
          <a
            href="https://forum.xda-developers.com/xposed"
            rel="noopener noreferrer"
            target="_blank"
          >
            Xposed framework
          </a>{' '}
          module that acted as an SMS blocker, built by
          reverse-engineering the default Android SMS app. This app
          allowed me to overcome the fact that Android 4.4 (KitKat){' '}
          <a
            href="https://android-developers.googleblog.com/2013/10/getting-your-sms-apps-ready-for-kitkat.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            removed the ability for apps to intercept and block SMS
            messages
          </a>
          . I used that app for a long time to get rid of annoying SMS
          ads 🦶👋
        </p>
        <p>
          Professionally, I&apos;ve used Java to build backend
          applications using mainly{' '}
          <a
            href="https://maven.apache.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Maven
          </a>
          ,{' '}
          <a
            href="https://www.ibm.com/docs/en/was/8.5.5?topic=SSEQTP_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/cwbs_jaxrs_overview.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            JAX-RS
          </a>
          , and{' '}
          <a
            href="https://hibernate.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Hibernate
          </a>
          .
        </p>
      </>
    ),
    featured: false,
    icon(isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            stroke={colors.background}
            strokeLinejoin="round"
            strokeWidth={30}
            xlinkHref={`#${this.id}`}
          />
          <use fill={colors.text} xlinkHref={`#${this.id}`} />
        </svg>
      );
    },
    id: 'java',
    name: 'Java',
    studying: false,
    usageLevel: -2,
    yearsExperience: 2,
  },
];

export const getColors = (skill: Skill, isContrastMode: boolean) =>
  isContrastMode ? skill.colors.contrast : skill.colors.normal;

export type Skill = {
  brief?: React.ReactElement;
  colors: {
    contrast: {
      background: string;
      text: string;
    };
    normal: {
      background: string;
      text: string;
    };
    scrollBar?: {
      trackColor?: string;
    };
  };
  description: React.ReactElement;
  featured: boolean;
  icon?: (isContrastMode: boolean) => React.ReactElement;
  id: string;
  name: string;
  studying: boolean;
  usageLevel: -1 | -2 | -3 | 1 | 2 | 3;
  yearsExperience?: number;
};

export default skills;
