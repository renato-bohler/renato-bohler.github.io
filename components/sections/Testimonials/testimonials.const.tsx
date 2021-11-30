const testimonials = [
  {
    quote: (
      <>
        <p>
          Renato seems to <strong>have no limits</strong>. He started
          as an intern and soon became a key player in the dev team at{' '}
          <em>Agrotis</em>.
        </p>
        <p>
          Always learning and applying his knowledge, he motivates his
          colleagues to go further, and his good mood helps to keep
          the team together.
        </p>
        <p>It was a privilege to work with him.</p>
      </>
    ),
    author: {
      name: 'Dione Betanin',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4E03AQFr-Sb2Bs294g/profile-displayphoto-shrink_100_100/0/1627231266917?e=1643241600&v=beta&t=G673GXH7hne1DA8MFLx8Z2rDeZA7t1Oejm2qeBOTT-k',
      role: 'Software Engineer',
    },
  },
  {
    quote: (
      <p>
        Renato is an <strong>excellent</strong> professional, one of
        the best frontend engineers I&apos;ve worked with at{' '}
        <em>Dextra</em>. He&apos;s very <strong>focused</strong> and
        has a strong <strong>commitment</strong> to his clients.
      </p>
    ),
    author: {
      name: 'Gustavo Bigardi',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4D03AQGbVYmm0wyfOw/profile-displayphoto-shrink_100_100/0/1580839835590?e=1638403200&v=beta&t=S37uUOCeqyboepPOsc5rrBBvB164Qn9Sw00xYwq_Ozs',
      role: 'Backend Engineer',
    },
  },
  {
    quote: (
      <p>
        I&apos;ve worked with Renato for only about a month, but even
        in this short time he was able to do an{' '}
        <strong>excellent</strong> job, delivering a core feature to
        the client. He&apos;s very <strong>engaged</strong> and{' '}
        <strong>committed</strong> on delivering quality software.
      </p>
    ),
    author: {
      name: 'Rafael de Paula',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4D03AQGWBFez2tfHCw/profile-displayphoto-shrink_100_100/0/1598541607741?e=1643241600&v=beta&t=lyLZ0kYES0AH7o_NCj31H5C1qI2x08nhNHMkpTn-OAg',
      role: 'Backend Engineer',
    },
  },
  {
    quote: (
      <>
        <p>
          Renato is an <strong>excellent</strong> professional,
          he&apos;s very <strong>dedicated</strong> and he&apos;s
          always looking to improve his skills.
        </p>
        <p>
          I&apos;ve worked with him in 2 different projects, and he
          always stood out thanks to his <strong>knowledge</strong>,{' '}
          <strong>willpower</strong> and his easy-going way of
          interacting with the team.
        </p>
      </>
    ),
    author: {
      name: 'Luiz Eduardo Oku',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4D03AQGtRpIheCSFDQ/profile-displayphoto-shrink_100_100/0/1601225400366?e=1643241600&v=beta&t=8D6wB3Uw5bUwlgyt8AgnvOjl04pLgjUuj1yPv5ytE7s',
      role: 'Frontend Engineer',
    },
  },
  {
    quote: (
      <>
        <p>
          I&apos;ve worked with Renato in a very detailed and
          extensive project, where he proved to be a very{' '}
          <strong>dedicated</strong> and <strong>committed</strong>{' '}
          professional, paying attention to all details.
        </p>
        <p>
          Renato is very <strong>communicative</strong>, and had a
          great performance aligning design and code, being able to
          develop exceptional interfaces.
        </p>
      </>
    ),
    author: {
      name: 'Daniela Jagher',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4D03AQF_wppTSLR3BA/profile-displayphoto-shrink_100_100/0/1623177434518?e=1643241600&v=beta&t=Io47ocNU_mWnJHHmzoTxttElZqwz_MrK0MI5-f0GyJg',
      role: 'UI/UX Designer',
    },
  },
  {
    quote: (
      <>
        <p>
          Renato is an <strong>excellent</strong> professional,
          he&apos;s fun to work with and he&apos;s always willing to
          help.
        </p>
        <p>
          Even in critical situations, Renato has a good attitude on
          problem-solving and an innate ability to analyze. He&apos;s
          also a reference in React, I learned a lot working with him.
        </p>
      </>
    ),
    author: {
      name: 'Rodrigo Diego',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGzCqKhVjS0tw/profile-displayphoto-shrink_100_100/0/1598981460468?e=1643241600&v=beta&t=BCLJ7rxIr1rCg7pcE_E4vcM5HPHVd6Esjb_smONyAeQ',
      role: 'Head of UX',
    },
  },
  {
    quote: (
      <p>
        Renato is <strong>fantastic</strong> to work with!
      </p>
    ),
    author: {
      name: 'Olivia Hendrick',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4E03AQGs-Hixpbr_og/profile-displayphoto-shrink_100_100/0/1532033156782?e=1643241600&v=beta&t=7bRRC1Nkl1y8xOVILcDJMxdt4BShIXNYV5gvChfE2zg',
      role: 'UX Designer',
    },
  },
  {
    quote: (
      <p>
        Renato <strong>crushes</strong> frontend work. He&apos;s
        always willing to jump in and help, so <strong>fast</strong>{' '}
        and <strong>efficient</strong>, just an all around{' '}
        <strong>excellent</strong> dev.
      </p>
    ),
    author: {
      name: 'Ema Casas',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4E03AQFdm6lDXsQfwA/profile-displayphoto-shrink_100_100/0/1617201077114?e=1643241600&v=beta&t=iMp9Ed3m_d514yWqkFACY-kmynI9R00u-AyEjjaFK-4',
      role: 'Product Owner',
    },
  },
  {
    quote: (
      <p>
        Renato is the <strong>best</strong> developer I know 🤣
      </p>
    ),
    author: {
      name: 'Maynara Böhler',
      picture:
        'https://media-exp1.licdn.com/dms/image/C4D03AQE6D8thF4eCEw/profile-displayphoto-shrink_100_100/0/1625004609375?e=1643241600&v=beta&t=UKEfHAyCeQRBSlqqQsZkgxp4eLQXzA3iosenwKOjLA0',
      role: 'Wife',
    },
  },
];

export type Testimonial = typeof testimonials[0];

export default testimonials;
