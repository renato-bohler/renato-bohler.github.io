const skills: Skill[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    usageLevel: 3,
    yearsExperience: 7,
    colors: {
      normal: {
        background: '#f7df1e',
        text: '#292e31',
      },
      contrast: {
        background: '#f7df1e',
        text: 'black',
      },
      scrollBar: { trackColor: '#645a0a' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={35}
            strokeLinejoin="round"
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: true,
    featured: true,
    brief: (
      <>
        <p>
          <strong>JavaScript</strong> was the first programming
          language I had contact with when I was 12. At that time,
          I&apos;d create websites just for fun.
        </p>
        <p>
          I&apos;ve been closely following the evolution of JS ever
          since, from the pre-ES3, jQuery times to the modern JS we
          have today.
        </p>
      </>
    ),
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
  },
  {
    id: 'node-js',
    name: 'Node.js',
    usageLevel: 1,
    yearsExperience: 1.5,
    colors: {
      normal: {
        background: '#82cd2a',
        text: '#292e31',
      },
      contrast: {
        background: '#aae06a',
        text: 'black',
      },
      scrollBar: { trackColor: '#3c6011' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={10}
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: false,
    featured: false,
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
            target="_blank"
            rel="noopener noreferrer"
          >
            ADA compliance
          </a>{' '}
          checker.
        </p>
      </>
    ),
  },
  {
    id: 'regexp',
    name: 'RegExp',
    usageLevel: 2,
    colors: {
      normal: {
        background: '#01814e',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#004026',
        text: 'white',
      },
      scrollBar: { trackColor: '#69d7ab' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={125}
            strokeLinejoin="round"
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: true,
    featured: false,
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
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    usageLevel: 3,
    yearsExperience: 4,
    colors: {
      normal: {
        background: '#007acd',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#005c9a',
        text: 'white',
      },
      scrollBar: { trackColor: '#8dd1ff' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={35}
            strokeLinejoin="round"
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: true,
    featured: true,
    brief: (
      <>
        <p>
          <strong>TypeScript</strong> is one of those things that you
          might ask yourself: <em>&quot;why do I need that?&quot;</em>{' '}
          — but when you get used to it, you&apos;ll never look back.
        </p>
        <p>
          I&apos;ve been using <strong>TypeScript</strong> since
          mid-2019, and I&apos;ll add it to every project I start
          today, no matter how small it might be.
        </p>
      </>
    ),
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
  },
  {
    id: 'git',
    name: 'Git',
    usageLevel: 3,
    yearsExperience: 6,
    colors: {
      normal: {
        background: '#f34f29',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#a92709',
        text: 'white',
      },
      scrollBar: { trackColor: '#ffbdaf' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}-1`}
            fill={colors.background}
            stroke={colors.background}
            strokeWidth={10}
          />
          <use xlinkHref={`#${this.id}-2`} fill={colors.text} />
        </svg>
      );
    },
    studying: false,
    featured: false,
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
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
          >
            Conventional Commits
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'ci-cd',
    name: 'CI/CD',
    usageLevel: 3,
    colors: {
      normal: {
        background: '#c0c0c0',
        text: '#292e31',
      },
      contrast: {
        background: '#c0c0c0',
        text: 'black',
      },
      scrollBar: { trackColor: '#4c4c4c' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={5}
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: false,
    featured: false,
    description: (
      <>
        <p>
          My first opportunity to learn and apply Continuous
          Integration and Continuous Deployment practices happened
          while developing{' '}
          <a
            href="https://renato-bohler.github.io/redux-form-input-masks"
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
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
  },
  {
    id: 'react',
    name: 'React',
    usageLevel: 3,
    yearsExperience: 6,
    colors: {
      normal: {
        background: '#61dbfb',
        text: '#222222',
      },
      contrast: {
        background: '#61dbfb',
        text: 'black',
      },
      scrollBar: { trackColor: '#2e4f58' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={30}
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: true,
    featured: true,
    brief: (
      <>
        <p>
          I&apos;ve been in love with <strong>React</strong> since I
          first used it in 2017.
        </p>
        <p>
          What I really enjoy about <strong>React</strong>, apart from
          its component-based architecture, is that it&apos;s all just
          JavaScript.
        </p>
        <p>
          The whole <strong>React</strong> ecosystem also helps make
          it awesome.
        </p>
      </>
    ),
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
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          .
        </p>
        <p>
          Some of the most complex things I&apos;ve built with React
          are open-source projects:{' '}
          <a
            href="https://renato-bohler.github.io/logossim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Logossim
          </a>{' '}
          and{' '}
          <a
            href="https://renato-bohler.github.io/what-the-filter"
            target="_blank"
            rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite
          </a>{' '}
          (for bundling),{' '}
          <a
            href="https://intuit.github.io/auto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Auto
          </a>{' '}
          (for automated releasing), and{' '}
          <a
            href="https://storybook.js.org"
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
          >
            collaborate
          </a>{' '}
          with the original translation of the{' '}
          <a
            href="https://pt-br.reactjs.org/docs/react-api.html"
            target="_blank"
            rel="noopener noreferrer"
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
  },
  {
    id: 'css',
    name: 'CSS',
    usageLevel: 3,
    yearsExperience: 7,
    colors: {
      normal: {
        background: '#1b73ba',
        text: '#ffffff',
      },
      contrast: {
        background: '#1b73ba',
        text: '#ffffff',
      },
      scrollBar: { trackColor: '#5fbbd3' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}-1`}
            fill={colors.background}
            stroke={colors.background}
            strokeWidth={10}
          />
          <use xlinkHref={`#${this.id}-2`} fill="#1c88c7" />
          <use xlinkHref={`#${this.id}-3`} fill={colors.text} />
        </svg>
      );
    },
    studying: true,
    featured: true,
    brief: (
      <>
        <p>
          <strong>CSS is not exactly easy</strong>. There are loads of
          concepts, properties, selectors, and functions to
          understand, animations and transitions to tinker with,
          responsive design to consider, and cross-browser
          compatibility to work around...
        </p>
        <p>
          ... but I think I&apos;m lucky to be around for so long that
          all of that is kind of natural to me 😅
        </p>
      </>
    ),
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
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS MDN Docs
          </a>{' '}
          and{' '}
          <a
            href="https://web.dev/blog/"
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
          >
            SASS
          </a>
          , but not so much with CSS frameworks like{' '}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap
          </a>{' '}
          or{' '}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind
          </a>
          , and that&apos;s something I&apos;d like to fix soon 📖
        </p>
      </>
    ),
  },
  {
    id: 'react-native',
    name: 'React Native',
    usageLevel: 1,
    yearsExperience: 1,
    colors: {
      normal: {
        background: '#222222',
        text: '#61dbfb',
      },
      contrast: {
        background: '#222222',
        text: '#7ee1fb',
      },
      scrollBar: { trackColor: '#5fbbd3' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref="#react"
            stroke={colors.background}
            strokeWidth={30}
          />
          <use xlinkHref="#react" fill={colors.text} />
        </svg>
      );
    },
    studying: true,
    featured: false,
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
            target="_blank"
            rel="noopener noreferrer"
          >
            Android
          </a>
          ,{' '}
          <a
            href="https://apps.apple.com/br/app/tudobem/id1527314081"
            target="_blank"
            rel="noopener noreferrer"
          >
            iOS
          </a>{' '}
          — in Portuguese) up until just before its first production
          release. For that reason, handling app releases is where my
          knowledge falls short. I know people use tools like{' '}
          <a
            href="https://fastlane.tools"
            target="_blank"
            rel="noopener noreferrer"
          >
            fastlane
          </a>{' '}
          — I just never used them 😅
        </p>
      </>
    ),
  },
  {
    id: 'redux',
    name: 'Redux',
    usageLevel: 1,
    yearsExperience: 5,
    colors: {
      normal: {
        background: '#6e50b5',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#4e3784',
        text: 'white',
      },
      scrollBar: { trackColor: '#b0a0d7' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={30}
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: false,
    featured: false,
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
            target="_blank"
            rel="noopener noreferrer"
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
  },
  {
    id: 'angular',
    name: 'Angular',
    usageLevel: 1,
    yearsExperience: 2,
    colors: {
      normal: {
        background: '#dd0031',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#b20027',
        text: 'white',
      },
      scrollBar: { trackColor: '#ffa0b6' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={80}
            strokeLinejoin="round"
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: false,
    featured: false,
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
  },
  {
    id: 'vue',
    name: 'Vue',
    usageLevel: -2,
    yearsExperience: 0.5,
    colors: {
      normal: {
        background: '#41b883',
        text: '#292e31',
      },
      contrast: {
        background: '#7dd1ac',
        text: 'black',
      },
      scrollBar: { trackColor: '#292e31' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}-1`}
            stroke={colors.background}
            strokeWidth={10}
          />
          <use xlinkHref={`#${this.id}-2`} fill={colors.background} />
          <use xlinkHref={`#${this.id}-3`} />
        </svg>
      );
    },
    studying: false,
    featured: false,
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
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    usageLevel: 1,
    yearsExperience: 1,
    colors: {
      normal: {
        background: '#e535ab',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#901266',
        text: 'white',
      },
      scrollBar: { trackColor: '#ffc9ed' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={50}
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: true,
    featured: false,
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
            target="_blank"
            rel="noopener noreferrer"
          >
            Apollo
          </a>{' '}
          on the frontend, but I never developed an API using GraphQL.
        </p>
        <p>
          <a
            href="https://relay.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Relay
          </a>{' '}
          seems to be a very interesting GraphQL client. I&apos;ve
          been studying it for a while now, but I never had the chance
          to use it.
        </p>
      </>
    ),
  },
  {
    id: 'sql',
    name: 'SQL',
    usageLevel: -2,
    yearsExperience: 2,
    colors: {
      normal: {
        background: '#545454',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#545454',
        text: 'white',
      },
      scrollBar: { trackColor: '#a1a1a1' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={30}
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: false,
    featured: false,
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
  },
  {
    id: 'java',
    name: 'Java',
    usageLevel: -2,
    yearsExperience: 2,
    colors: {
      normal: {
        background: '#ef2d30',
        text: '#f3f3f3',
      },
      contrast: {
        background: '#b00d0f',
        text: 'white',
      },
      scrollBar: { trackColor: '#ffbdbe' },
    },
    icon: function (isContrastMode: boolean): React.ReactElement {
      const colors = getColors(this, isContrastMode);

      return (
        <svg aria-hidden>
          <use
            xlinkHref={`#${this.id}`}
            stroke={colors.background}
            strokeWidth={30}
            strokeLinejoin="round"
          />
          <use xlinkHref={`#${this.id}`} fill={colors.text} />
        </svg>
      );
    },
    studying: false,
    featured: false,
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
            target="_blank"
            rel="noopener noreferrer"
          >
            Xposed framework
          </a>{' '}
          module that acted as an SMS blocker, built by
          reverse-engineering the default Android SMS app. This app
          allowed me to overcome the fact that Android 4.4 (KitKat){' '}
          <a
            href="https://android-developers.googleblog.com/2013/10/getting-your-sms-apps-ready-for-kitkat.html"
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
          >
            Maven
          </a>
          ,{' '}
          <a
            href="https://www.ibm.com/docs/en/was/8.5.5?topic=SSEQTP_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/cwbs_jaxrs_overview.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            JAX-RS
          </a>
          , and{' '}
          <a
            href="https://hibernate.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hibernate
          </a>
          .
        </p>
      </>
    ),
  },
];

export const getColors = (skill: Skill, isContrastMode: boolean) => {
  return isContrastMode ? skill.colors.contrast : skill.colors.normal;
};

export type Skill = {
  id: string;
  name: string;
  usageLevel: -3 | -2 | -1 | 1 | 2 | 3;
  yearsExperience?: number;
  colors: {
    normal: {
      background: string;
      text: string;
    };
    contrast: {
      background: string;
      text: string;
    };
    scrollBar?: {
      trackColor?: string;
    };
  };
  icon?: (isContrastMode: boolean) => React.ReactElement;
  studying: boolean;
  featured: boolean;
  brief?: React.ReactElement;
  description: React.ReactElement;
};

export default skills;
