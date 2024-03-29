const agrotis: Company = {
  color: '#00735c',
  logo: 'agrotis',
};

const ciandt: Company = {
  color: '#ed1941',
  logo: 'ciandt',
};

const intive: Company = {
  color: '#007ac9',
  logo: 'intive',
};

const shippo: Company = {
  color: '#25d695',
  logo: 'shippo',
  padding: 4,
};

export const experiences: Experience[] = [
  {
    company: shippo,
    description: null,
    id: 'shippo',
    jobTitle: 'Front end developer',
    period: {
      from: new Date('2023-08-01T00:00:00Z'),
    },
    title: 'Shippo',
  },
  {
    company: intive,
    consultant: true,
    description: (
      <>
        <p>
          As a front end developer for this company, my role involves
          creating and maintaining the user interface of a platform
          that serves thousands of pizzerias across the United States,
          working alongside product managers, designers, and other
          developers based in various locations around the world.
        </p>
        <p>
          One of my significant achievements during my time at this
          company was{' '}
          <strong>
            leading the development of a React component library
          </strong>{' '}
          that has been adopted by multiple teams. I oversaw its
          creation, from defining core concepts and workflow to
          setting up the bundler (
          <a
            href="https://vitejs.dev/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vite
          </a>
          ), implementing automatic semantic versioning and publishing
          (using{' '}
          <a
            href="https://intuit.github.io/auto/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Auto
          </a>
          ), configuring automated Storybook deployment, and ensuring
          code-splitting was executed correctly (both for JS and CSS).
        </p>
        <p>
          In addition, I&apos;ve made significant improvements to the
          developer experience by{' '}
          <strong>reworking an automated ADA compliance check</strong>
          , leading the migration of unit tests from{' '}
          <code>enzyme</code> to <code>react-testing-library</code>,
          and leading the migration of styling from{' '}
          <code>react-fela</code> to <code>sass</code>. I&apos;ve also
          polished bundler and CI/CD configurations, migrated the
          pipeline from GitLab to GitHub Actions, maintained
          dependencies up-to-date, and refined linting rules across
          multiple projects.
        </p>
      </>
    ),
    id: 'intive-1',
    jobTitle: 'Front end developer',
    period: {
      from: new Date('2021-11-01T00:00:00Z'),
      to: new Date('2023-08-01T00:00:00Z'),
    },
    title: 'Pizzeria Marketplace App',
  },
  {
    company: ciandt,
    consultant: true,
    description: (
      <>
        <p>
          This Denver-based company provides mortgage and fulfillment
          software and services for banks across the United States.
        </p>
        <p>
          As part of my role in the project, I collaborated with the
          front end team to develop new features for their back office
          application, primarily used by loan officers. Additionally,
          I worked on the redesign of their white-label website, which
          is utilized by lenders.
        </p>
        <p>
          Since both applications were built using Angular, it was a
          great opportunity for me to utilize my Angular skills
          professionally again after not having used them for three
          years.
        </p>
      </>
    ),
    id: 'ci&t-3',
    jobTitle: 'Front end developer',
    period: {
      from: new Date('2021-03-01T00:00:00Z'),
      to: new Date('2021-11-01T00:00:00Z'),
    },
    title: 'Digital Mortgage & Fulfillment Solutions',
  },
  {
    company: ciandt,
    consultant: true,
    description: (
      <>
        <p>
          As a corporate travel software, this app included flight and
          hotel booking, car rental, expense management, policies and
          approvals, users and groups, and more. It&apos;s a React
          project embedded via <code>WebView</code> into the biggest
          Colombian super app.
        </p>
        <p>
          Initially, this project was meant to be mobile only. During
          this period, apart from developing new features and fixing
          bugs, I was tasked with{' '}
          <strong>
            collaborating with the design team to redesign
          </strong>{' '}
          every screen to make it compatible with desktop devices. I
          also worked to{' '}
          <strong>improve the developer experience</strong> of the
          project, installing and configuring linting tools and
          improving the CI/CD pipeline.
        </p>
      </>
    ),
    id: 'ci&t-2',
    jobTitle: 'Front end developer',
    period: {
      from: new Date('2020-09-01T00:00:00Z'),
      to: new Date('2021-03-01T00:00:00Z'),
    },
    title: 'B2B Travel',
  },
  {
    company: ciandt,
    consultant: true,
    description: (
      <>
        <p>
          My goal for this project was to develop the first production
          release of a healthcare marketplace mobile app for iOS and
          Android using React Native.
        </p>
        <p>
          The first release included guest mode, sign-up/sign-in
          flows, home screen, doctor and exams searching and
          scheduling, payment, and telemedicine using{' '}
          <a
            href="https://www.twilio.com/en-us/video/video-api"
            rel="noopener noreferrer"
            target="_blank"
          >
            Twilio&apos;s Video API
          </a>
          .
        </p>
        <p>
          During this period, I worked closely with designers and led
          a small team of three developers. I also helped develop new
          features on the front end for the back office of the
          project, using React.
        </p>
      </>
    ),
    id: 'ci&t-1',
    jobTitle: 'Mobile & Front end developer',
    period: {
      from: new Date('2020-03-01T00:00:00Z'),
      to: new Date('2020-09-01T00:00:00Z'),
    },
    title: 'Healthcare Marketplace App',
  },
  {
    company: agrotis,
    description: (
      <>
        <p>
          <a
            href="https://www.agrotis.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <strong>Agrotis</strong>
          </a>{' '}
          is a Brazilian-based company that develops software for the
          agriculture industry.
        </p>
        <p>
          I started as a backend engineer, developing APIs using Java
          EE, Hibernate, SQL Server, Kafka, and MQTT. I soon migrated
          to a full stack position, working with AngularJS and React.
        </p>
        <p>
          During my time at Agrotis, I had the opportunity to
          contribute to the development of several core
          functionalities of their enterprise web platform. For
          instance, I worked on a{' '}
          <strong>custom rich text editor</strong> (using{' '}
          <a
            href="https://draftjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <code>draft-js</code>
          </a>
          ) to generate dynamic contract documents based on system
          parameters. Additionally, I assisted in the development of{' '}
          <strong>real-time hardware integration</strong> with the web
          platform, which enabled users to read truck weights on the
          go (using{' '}
          <a
            href="https://mqtt.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            MQTT
          </a>
          ). I was also involved in the development of{' '}
          <strong>integrations with SAP Business One</strong> through{' '}
          <a
            href="https://kafka.apache.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Apache Kafka
          </a>
          .
        </p>
        <p>
          I was also the developer in charge of maintaining a{' '}
          <strong>core React components package</strong> used by
          another four web teams in the company.
        </p>
      </>
    ),
    id: 'agrotis',
    jobTitle: 'Full stack developer',
    period: {
      from: new Date('2016-10-01T00:00:00Z'),
      to: new Date('2020-03-01T00:00:00Z'),
    },
    title: 'Agrotis',
  },
];

export type Period = {
  from: Date;
  to?: Date;
};

export type Company = {
  color: string;
  logo: string;
  padding?: number;
};

export type Experience = {
  company: Company;
  consultant?: boolean;
  description: React.ReactNode;
  id: string;
  jobTitle: string;
  period: Period;
  title: string;
};
