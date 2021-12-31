import About from '~/components/sections/About/About';
import Header from '~/components/sections/Header/Header';
import Skills from '~/components/sections/Skills/Skills';
import Testimonials from '~/components/sections/Testimonials/Testimonials';

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
    title: 'Renato Böhler',
    Component: Header,
  },
  {
    name: 'about',
    anchor: '#about',
    title: 'About / Renato Böhler',
    Component: About,
  },
  {
    name: 'testimonials',
    anchor: '#testimonials',
    title: 'Testimonials / Renato Böhler',
    Component: Testimonials,
  },
  {
    name: 'skills',
    anchor: '#skills',
    title: 'Skills / Renato Böhler',
    Component: Skills,
  },
] as const;
