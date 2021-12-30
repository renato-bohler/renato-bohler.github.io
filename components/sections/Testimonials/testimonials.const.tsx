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
      picture: '/images/testimonials/dione-betanin.webp',
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
      picture: '/images/testimonials/gustavo-bigardi.webp',
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
      picture: '/images/testimonials/rafael-paula.webp',
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
      picture: '/images/testimonials/luiz-oku.webp',
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
      picture: '/images/testimonials/daniela-jagher.webp',
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
      picture: '/images/testimonials/rodrigo-diego.webp',
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
      picture: '/images/testimonials/olivia-hendrick.webp',
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
      picture: '/images/testimonials/ema-casas.webp',
      role: 'Product Owner',
    },
  },
  {
    quote: (
      <>
        <p>
          Renato is an <strong>easy to talk</strong> person. We were{' '}
          <strong>blown away</strong> by his knowledge depth.
        </p>
        <p>
          Having Renato in your team is an opportunity, this is a very
          hard candidate to come by.
        </p>
      </>
    ),
    author: {
      name: "Renato's G2i Profile",
      picture: '/images/testimonials/g2i.svg',
      role: '',
    },
  },
];

export type Testimonial = typeof testimonials[0];

export default testimonials;
