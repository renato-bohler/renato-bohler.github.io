import dynamic from 'next/dynamic';

import Header from '~/components/sections/Header/Header';

const TITLE = 'Renato Böhler';

const About = dynamic(
  () => import('~/components/sections/About/About'),
  { ssr: false },
);
const Testimonials = dynamic(
  () => import('~/components/sections/Testimonials/Testimonials'),
  { ssr: false },
);
const Skills = dynamic(
  () => import('~/components/sections/Skills/Skills'),
  { ssr: false },
);
const Projects = dynamic(
  () => import('~/components/sections/Projects/Projects'),
  { ssr: false },
);

export type SectionName =
  | typeof HEADER['name']
  | typeof SECTIONS[number]['name'];

export type Section = {
  name: SectionName;
  anchor: string;
  title: string;
  Component:
    | typeof HEADER['Component']
    | typeof SECTIONS[number]['Component'];
};

export const HEADER = {
  name: 'header',
  anchor: ' ',
  title: TITLE,
  Component: Header,
} as const;

export const SECTIONS = [
  {
    name: 'about',
    anchor: '#about',
    title: `About / ${TITLE}`,
    Component: About,
  },
  {
    name: 'testimonials',
    anchor: '#testimonials',
    title: `Testimonials / ${TITLE}`,
    Component: Testimonials,
  },
  {
    name: 'skills',
    anchor: '#skills',
    title: `Skills / ${TITLE}`,
    Component: Skills,
  },
  {
    name: 'projects',
    anchor: '#projects',
    title: `Projects / ${TITLE}`,
    Component: Projects,
  },
] as const;

export const SECTIONS_WITH_HEADER = [HEADER, ...SECTIONS];
