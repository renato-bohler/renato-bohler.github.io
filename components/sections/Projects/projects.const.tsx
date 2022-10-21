const projects: Project[] = [
  {
    repo: 'logossim',
    folder: 'logossim',
    name: 'logossim',
    title: 'Logossim',
    subtitle:
      'An open-source logic digital simulator built for the web',
    description: (
      <>
        <p>
          <strong>Logossim</strong> was a result of my undergraduate
          thesis on Computer Engineering. As the name implies,{' '}
          <a
            href="http://www.cburch.com/logisim"
            target="_blank"
            rel="noopener noreferrer"
          >
            Logisim
          </a>
          — an acclaimed logic circuit simulation software — was a big
          inspiration for this project.
        </p>
        <p>
          The simulator offers 27 base components, including I/O,
          logic gates, memory, plexers, and wiring utilities. With
          those components,{' '}
          <strong>it is possible to build fun circuits</strong>, like{' '}
          <a
            href="https://renato-bohler.github.io/logossim/?example=Darth%20Vader"
            target="_blank"
            rel="noopener noreferrer"
          >
            this one, that play{' '}
            <em>&ldquo;The Imperial March&rdquo;</em> from the Star
            Wars franchise
          </a>
          .
        </p>
        <p>
          Every component has its own set of configurations, which can
          be set by the user and determine how it looks and behaves
          during the simulation.
        </p>
        <p>
          The core principle of this project is to be easily
          understandable by anyone with some web development
          background (HTML, CSS, and JS). To achieve this, I
          implemented a custom-built logic simulation engine.
        </p>
        <p>
          This engine runs on a{' '}
          <a
            href="https://developer.mozilla.org/docs/Web/API/Web_Workers_API"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Worker
          </a>{' '}
          thread and orchestrates the simulation, handling user input,
          propagating signals, and communicating with the UI thread
          via messages.
        </p>
        <p>
          The user interface was built on top of{' '}
          <a
            href="https://github.com/projectstorm/react-diagrams"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>react-diagrams</code>
          </a>
          , which was heavily customized to support bifurcations
          across links, right-angle links, copy & paste and undo &
          redo functionalities, among other customizations implemented
          to make <strong>Logossim</strong> look and feel like
          Logisim.
        </p>
        <p>
          Some other features of this application are:
          <ul>
            <li>Component configurator with previews</li>
            <li>A welcoming and informative tour</li>
            <li>Saving and loading of circuit files</li>
            <li>Auto saving</li>
            <li>Keyboard shortcuts</li>
          </ul>
        </p>
      </>
    ),
  },
  {
    repo: 'what-the-filter',
    folder: 'what-the-filter',
    name: 'what the filter?',
    title: 'What the Filter?',
    subtitle:
      'A visual playground to JavaScript array and object transformations',
    description: (
      <>
        <p>
          The inspiration for this project came to me after I realized
          how many developers had trouble understanding
          functional-styled methods like <code>map</code>,{' '}
          <code>filter</code>, <code>reduce</code> or even{' '}
          <code>Object.entries</code> or{' '}
          <code>Object.fromEntries</code> on JavaScript.
        </p>
        <p>
          I started noticing that people would understand those
          concepts much faster by visualizing a flowchart that
          explains how data gets transformed through each method.
        </p>
        <p>
          Thus <strong>What the Filter?</strong> was born with a
          simple vision: the user inputs some code, and the
          application generates a diagram detailing each
          transformation and each value in intermediate steps.
        </p>
        <p>
          Before building such diagram, the application transforms the
          code into an Abstract Syntax Tree (AST) and detects the
          initial input. It then performs static analysis to determine
          the order in which every method would get called. After
          that, it executes them with their corresponding inputs to
          determine all intermediate values.
        </p>
        <p>
          <strong>What the Filter?</strong> also warns users about
          JavaScript methods that may have pitfalls:
          <ul>
            <li>
              methods that mutate the object instead of returning new
              ones (like <code>splice</code>)
            </li>
            <li>
              <code>sort</code>, which will infamously cast numbers to
              strings before sorting if no comparing function gets
              provided
            </li>
          </ul>
        </p>
        <p>
          <strong>Another convenient feature:</strong> should any
          error occur during a transformation, the diagram still gets
          generated up until the method that failed, and the output
          tries to explain what went wrong based on common mistakes.
        </p>
        <p>
          <strong>What the Filter?</strong> can be helpful for new
          developers trying to learn functional programming concepts,
          but it can also be used by experienced developers to debug
          and understand more complex transformations.
        </p>
        <p>
          <strong>Oh, and I almost forgot!</strong> You can generate
          URLs{' '}
          <a
            href="https://renato-bohler.github.io/what-the-filter/#code/PTAEAkFMBtoe1AMwE5wLajQT1ABzsgC6JzQCWCAXACIBQAxnAHYDOhoA7gBYCGhAKl0gAxMtEKRkoALygAFAEoZAPlABvWqFDJIhAK7ImoANoByejr6QAJqYA0oUwCMsle451M+cd6aZxCXycAN65oSVMAXU0tUAA6RDEJZDk5DgJrJWlVdORrUABCaVk-ANMFGK04tB5cVNzMlVAAAwASNQbjAAZIuMI4AFVcXEkAYR4WSEUAX3aGuJZyeimARgVp5orY+IArODImOVNHBQBuWmnToA"
            target="_blank"
            rel="noopener noreferrer"
          >
            like this
          </a>{' '}
          to share a specific transformation with your colleagues.
        </p>
      </>
    ),
  },
  {
    repo: 'redux-form-input-masks',
    folder: 'redux-form-input-masks',
    name: 'redux form input masks',
    title: 'redux-form-input-masks',
    subtitle: 'Input masking with redux-form made easy',
    description: (
      <>
        <p>
          This was my first published open-source project and NPM
          library. Its goal was to make adding input masking to{' '}
          <a
            href="https://redux-form.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>redux-form</code>
          </a>{' '}
          fields an easy task.
        </p>
        <p>
          Of course, with <code>redux-form</code> being{' '}
          <a
            href="https://github.com/redux-form/redux-form#%EF%B8%8F-attention-%EF%B8%8F"
            target="_blank"
            rel="noopener noreferrer"
          >
            pretty much deprecated
          </a>{' '}
          for some time now, I haven&apos;t been devoting much time to
          this project lately.
        </p>
        <p>
          But the experience of building and publishing a library with
          its documentation for the first time was worthwhile, and
          I&apos;ve learned a lot from it. It also feels good to see
          other developers using your library on their projects 🤩
        </p>
        <p>
          It was also my first time configuring a CI/CD pipeline by
          myself. I&apos;ve used{' '}
          <a
            href="https://www.travis-ci.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Travis CI
          </a>
          , running{' '}
          <a
            href="https://semantic-release.gitbook.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>semantic-release</code>
          </a>{' '}
          to automatically determine the version number and publish to
          NPM, as well as deploying the new documentation to GitHub
          Pages. I&apos;ve also configured{' '}
          <a
            href="https://about.codecov.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codecov
          </a>{' '}
          to automatically generate test coverage reports and{' '}
          <a
            href="https://danger.systems/js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Danger JS
          </a>{' '}
          to analyze pull requests.
        </p>
      </>
    ),
  },
  {
    repo: 'renato-bohler.github.io',
    folder: 'renato-bohler',
    name: 'this page',
    title: 'My portfolio',
    subtitle: "Yeah, that's a little bit meta, I know",
    description: (
      <>
        <p>
          I wrote the first version of my portfolio in Vue.js. It was
          much simpler (and less beautiful) than the one you&apos;re
          looking at right now.
        </p>
        <p>
          This is the &ldquo;2.0 version&rdquo; of my portfolio,
          completely rewritten from the ground up using Next.js. It's
          a personal project, so{' '}
          <strong>
            everything you see here was done exclusively by myself
          </strong>
          , from design and assets through implementation and
          deployment.
        </p>
        <p>
          <strong>
            I decided to treat this project as my piece of art
          </strong>
          , so I&apos;d only work on it when I felt inspired enough to
          do so during my free time. I rebuilt every section of this
          portfolio 2 or 3 times before being happy with the outcome.
          That might explain why it took me about a year to finish it
          😅
        </p>
        <p>
          I&apos;m someone who loves having fun while building
          beautiful stuff, and I{' '}
          <strong>
            wanted this page to be unique and reflect who I am
          </strong>{' '}
          — both professionally and personally.
        </p>
        <p>
          This site tells the story of my professional career,{' '}
          <strong>but it&apos;s also full of personal details</strong>
          . For instance, the footer contains a topographic map of my
          hometown in the background, and the{' '}
          <em>&ldquo;made with ❤ by&rdquo;</em> vector was
          hand-written by myself.
        </p>
        <p>
          I wanted visitors to feel like they knew me just by looking
          at my portfolio, and that&apos;s why I&apos;ve built the{' '}
          <a href="#about">
            <strong>About section</strong>
          </a>{' '}
          as an interactive chat simulator, so anyone can experience
          how it feels talking to me.{' '}
          <strong>
            But if you&apos;re looking for the real deal, feel free to
            get in touch 😉
          </strong>
        </p>
      </>
    ),
  },
];

export type Project = {
  repo: string;
  folder: string;
  name: string;
  title: string;
  subtitle: string;
  description: React.ReactElement;
};

export default projects;
