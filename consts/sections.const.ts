import { About } from '~/components/sections/About/About';
import { Experience } from '~/components/sections/Experience/Experience';
import { Header } from '~/components/sections/Header/Header';
import { Projects } from '~/components/sections/Projects/Projects';
import { Skills } from '~/components/sections/Skills/Skills';
import { Testimonials } from '~/components/sections/Testimonials/Testimonials';

const TITLE = 'Renato Böhler';

export type Section = {
  anchor: string;
  Component:
    | (typeof HEADER)['Component']
    | (typeof SECTIONS)[number]['Component'];
  name: SectionName;
  title: string;
};

export type SectionName =
  | (typeof HEADER)['name']
  | (typeof SECTIONS)[number]['name'];

export const HEADER = {
  anchor: ' ',
  Component: Header,
  name: 'header',
  title: TITLE,
} as const;

export const SECTIONS = [
  {
    anchor: '#about',
    Component: About,
    name: 'about',
    title: `About / ${TITLE}`,
  },
  {
    anchor: '#testimonials',
    Component: Testimonials,
    name: 'testimonials',
    title: `Testimonials / ${TITLE}`,
  },
  {
    anchor: '#skills',
    Component: Skills,
    name: 'skills',
    title: `Skills / ${TITLE}`,
  },
  {
    anchor: '#projects',
    Component: Projects,
    name: 'projects',
    title: `Projects / ${TITLE}`,
  },
  {
    anchor: '#experience',
    Component: Experience,
    name: 'experience',
    title: `Experience / ${TITLE}`,
  },
] as const;

export const SECTIONS_WITH_HEADER = [HEADER, ...SECTIONS];
