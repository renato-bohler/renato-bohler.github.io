import About from '~/components/sections/About/About';
import Header from '~/components/sections/Header/Header';
import Skills from '~/components/sections/Skills/Skills';
import Testimonials from '~/components/sections/Testimonials/Testimonials';

const TITLE = 'Renato Böhler';

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
] as const;

export const SECTIONS_WITH_HEADER = [HEADER, ...SECTIONS];
