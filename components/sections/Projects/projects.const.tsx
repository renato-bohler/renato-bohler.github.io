const stubDescription = (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque fermentum mi eu sodales dapibus. Morbi consequat in
      urna vel fringilla. Phasellus massa lorem, consectetur non
      lacinia quis, dapibus at orci. Nunc tristique purus eget
      lobortis ultricies. Aenean dapibus sagittis odio, nec dignissim
      erat consequat et.
    </p>
    <p>
      Nulla commodo urna nisl, a faucibus elit bibendum id. Donec quis
      rutrum lectus, <code>sit</code> <code>amet</code>{' '}
      <code>mollis</code> metus. Morbi sit amet consectetur felis.
    </p>
    <p>
      <strong>Nam hendrerit 😆:</strong> ut vel dictum sem,
      scelerisque tincidunt nulla. Curabitur elementum elit diam, eget
      finibus ipsum imperdiet vitae{' '}
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Etiam
      </a>
      .
    </p>
    <p>
      Non feugiat lectus. Mauris dignissim dolor id arcu tempor mattis{' '}
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Accumsan
      </a>{' '}
      at{' '}
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nec Cursus Ante
      </a>
      .
    </p>
    <p>Vivamus ultricies quis nisi in ullamcorper:</p>
    <ul>
      <li>
        aenean pulvinar, erat id sodales ullamcorper{' '}
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>ullamcorper</code>
        </a>
      </li>
      <li>vestibulum quis leo vitae ligula</li>
      <li>duis ultricies ullamcorper convallis</li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Pellentesque fermentum mi eu sodales dapibus. Morbi consequat in
      urna vel fringilla. Phasellus massa lorem, consectetur non
      lacinia quis, dapibus at orci. Nunc tristique purus eget
      lobortis ultricies. Aenean dapibus sagittis odio, nec dignissim
      erat consequat et.
    </p>
    <p>
      Nulla commodo urna nisl, a faucibus elit bibendum id. Donec quis
      rutrum lectus, <code>sit</code> <code>amet</code>{' '}
      <code>mollis</code> metus. Morbi sit amet consectetur felis.
    </p>
    <p>
      <strong>Nam hendrerit 😆:</strong> ut vel dictum sem,
      scelerisque tincidunt nulla. Curabitur elementum elit diam, eget
      finibus ipsum imperdiet vitae{' '}
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Etiam
      </a>
      .
    </p>
    <p>
      Non feugiat lectus. Mauris dignissim dolor id arcu tempor mattis{' '}
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Accumsan
      </a>{' '}
      at{' '}
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nec Cursus Ante
      </a>
      .
    </p>
    <p>Vivamus ultricies quis nisi in ullamcorper:</p>
    <ul>
      <li>
        aenean pulvinar, erat id sodales ullamcorper{' '}
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>ullamcorper</code>
        </a>
      </li>
      <li>vestibulum quis leo vitae ligula</li>
      <li>duis ultricies ullamcorper convallis</li>
    </ul>
  </>
);

// TODO(projects): implement project description content
const projects: Project[] = [
  {
    folder: 'logossim',
    name: 'logossim',
    title: 'Logossim',
    subtitle:
      'An open source logic digital simulator built for the web',

    // TODO(renato): project description
    description: stubDescription,
  },
  {
    folder: 'what-the-filter',
    name: 'what the filter?',
    title: 'What the Filter?',
    subtitle:
      'A visual playground to JavaScript array and object transformations',
    // TODO(renato): project description
    description: stubDescription,
  },
  {
    folder: 'redux-form-input-masks',
    name: 'redux form input masks',
    title: 'redux-form-input-masks',
    subtitle: 'Input masking with redux-form made easy',
    // TODO(renato): project description
    description: stubDescription,
  },
  {
    folder: 'renato-bohler',
    name: 'this page',
    title: 'My portfolio',
    subtitle: "Yeah, that's a little bit meta, I know...",
    // TODO(renato): project description
    description: stubDescription,
  },
];

export type Project = {
  folder: string;
  name: string;
  title: string;
  subtitle: string;
  description: React.ReactElement;
};

export default projects;
