import About from '~/components/sections/About/About';
import Header from '~/components/sections/Header/Header';
import Skills from '~/components/sections/Skills/Skills';
import Testimonials from '~/components/sections/Testimonials/Testimonials';

const TITLE = 'Renato Böhler';

export type SectionName = typeof SECTIONS[number]['name'];

export type Section = {
  name: SectionName;
  anchor: string;
  title: string;
  Component: React.VFC;
};

export const SECTIONS = [
  {
    name: 'header',
    anchor: ' ',
    title: TITLE,
    Component: Header,
  },
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
