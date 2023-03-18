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
          Ut erat velit, suscipit eu leo in, facilisis posuere augue.
          Aliquam tincidunt ligula tortor, sed facilisis quam congue
          ut. Nunc augue felis, finibus sit amet metus et, vulputate
          egestas ex. Quisque congue velit efficitur ipsum bibendum,
          nec efficitur tellus consequat. Phasellus ullamcorper, enim
          a dictum mattis, urna dolor facilisis ante, id posuere diam
          libero sed urna.
        </p>
        <p>
          Sed ut ante mi. Nam eu ligula sit amet lectus ornare aliquam
          sed sed elit. Nam lobortis tellus vel aliquet ornare.
          Vestibulum fringilla tincidunt arcu, eu aliquet ante egestas
          a. Vestibulum scelerisque vitae enim ac luctus. Maecenas
          ultricies sollicitudin maximus. Vivamus eleifend quis justo
          id cursus. Quisque a ante hendrerit, scelerisque elit eu,
          gravida ex. Vestibulum imperdiet mi magna, eget commodo erat
          porta vel. Nunc faucibus, est id tempor consectetur, nibh
          quam egestas enim, id varius nunc nisl nec nunc.
        </p>
        <p>
          Etiam volutpat massa nulla, at commodo nisi tristique in.
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
          Ut erat velit, suscipit eu leo in, facilisis posuere augue.
          Aliquam tincidunt ligula tortor, sed facilisis quam congue
          ut. Nunc augue felis, finibus sit amet metus et, vulputate
          egestas ex. Quisque congue velit efficitur ipsum bibendum,
          nec efficitur tellus consequat. Phasellus ullamcorper, enim
          a dictum mattis, urna dolor facilisis ante, id posuere diam
          libero sed urna.
        </p>
        <p>
          Sed ut ante mi. Nam eu ligula sit amet lectus ornare aliquam
          sed sed elit. Nam lobortis tellus vel aliquet ornare.
          Vestibulum fringilla tincidunt arcu, eu aliquet ante egestas
          a. Vestibulum scelerisque vitae enim ac luctus. Maecenas
          ultricies sollicitudin maximus. Vivamus eleifend quis justo
          id cursus. Quisque a ante hendrerit, scelerisque elit eu,
          gravida ex. Vestibulum imperdiet mi magna, eget commodo erat
          porta vel. Nunc faucibus, est id tempor consectetur, nibh
          quam egestas enim, id varius nunc nisl nec nunc.
        </p>
        <p>
          Etiam volutpat massa nulla, at commodo nisi tristique in.
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
        </p>
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
