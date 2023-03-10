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
    title: 'intive',
    company: intive,
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
    id: 'ci&t-1',
    title: 'CI&T',
    company: ciandt,
    period: {
      from: new Date('2020-03-01T00:00:00Z'),
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
    id: 'agrotis',
    title: 'Agrotis',
    company: agrotis,
    period: {
      from: new Date('2016-10-01T00:00:00Z'),
      to: new Date('2020-03-01T00:00:00Z'),
    },
    description: (
      <>
        <p>Lorem ipsum.</p>
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
  company: Company;
  period: Period;
  description: React.ReactElement;
};

export default experiences;
