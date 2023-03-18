const agrotis: Company = {
  logo: 'agrotis',
  color: '#00876e',
};

const ciandt: Company = {
  logo: 'ci&t',
  color: '#ed1941',
};

const intive: Company = {
  logo: 'intive',
  color: '#007ac9',
};

const experiences: Experience[] = [
  {
    id: 'intive-1',
    title: 'Pizzeria Marketplace App',
    jobTitle: 'Front end developer',
    company: intive,
    consultant: true,
    period: {
      from: new Date('2021-11-01T00:00:00Z'),
    },
    description: (
      <>
        <p>
          Fusce non molestie massa. Suspendisse semper volutpat sapien
          sed dignissim. Vestibulum eleifend ornare sapien, id
          ultricies tortor posuere at. Proin pharetra leo quis massa
          congue vehicula. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
          Curabitur egestas consequat augue at dignissim. Fusce
          pulvinar consequat lobortis.
        </p>
      </>
    ),
  },
  {
    id: 'ci&t-3',
    title: 'Digital Mortgage & Fulfillment Solutions',
    jobTitle: 'Front end developer',
    company: ciandt,
    consultant: true,
    period: {
      from: new Date('2021-03-01T00:00:00Z'),
      to: new Date('2021-11-01T00:00:00Z'),
    },
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
  },
  {
    id: 'ci&t-2',
    title: 'B2B Travel',
    jobTitle: 'Front end developer',
    company: ciandt,
    consultant: true,
    period: {
      from: new Date('2020-09-01T00:00:00Z'),
      to: new Date('2021-03-01T00:00:00Z'),
    },
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
          bugs, I was tasked with collaborating with the design team
          to redesign every screen to make it compatible with desktop
          devices.
        </p>
      </>
    ),
  },
  {
    id: 'ci&t-1',
    title: 'Healthcare Marketplace App',
    jobTitle: 'Mobile & Front end developer',
    company: ciandt,
    consultant: true,
    period: {
      from: new Date('2020-03-01T00:00:00Z'),
      to: new Date('2020-09-01T00:00:00Z'),
    },
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
            target="_blank"
            rel="noopener noreferrer"
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
  },
  {
    id: 'agrotis',
    title: 'Agrotis',
    jobTitle: 'Full stack developer',
    company: agrotis,
    period: {
      from: new Date('2016-10-01T00:00:00Z'),
      to: new Date('2020-03-01T00:00:00Z'),
    },
    description: (
      <>
        <p>
          <a
            href="https://www.agrotis.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agrotis
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
          During my time at Agrotis, I&apos;ve helped build some core
          functionalities of their enterprise web platform:
        </p>
        <ul>
          <li>
            custom rich text editor that generates dynamic contract
            documents based on system parameters (using{' '}
            <a
              href="https://draftjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>draft-js</code>
            </a>
            )
          </li>
          <li>
            real-time hardware integration with the web platform,
            enabling users to read truck weights on the go (using
            MQTT)
          </li>
          <li>SAP Business One integration via Kafka</li>
        </ul>

        <p>
          I was also the developer in charge of maintaining a core
          React components package used by another four web teams in
          the company.
        </p>
      </>
    ),
  },
];

export type Period = {
  from: Date;
  to?: Date;
};

export type Company = {
  logo: string;
  color: string;
};

export type Experience = {
  id: string;
  title: string;
  jobTitle: string;
  company: Company;
  consultant?: boolean;
  period: Period;
  description: React.ReactElement;
};

export default experiences;
