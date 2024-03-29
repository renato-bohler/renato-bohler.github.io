import { About } from '~/components/sections/About/About';
import { Experience } from '~/components/sections/Experience/Experience';
import { Header } from '~/components/sections/Header/Header';
import { Projects } from '~/components/sections/Projects/Projects';
import { Skills } from '~/components/sections/Skills/Skills';
import { Testimonials } from '~/components/sections/Testimonials/Testimonials';

const TITLE = 'Renato Böhler';

export type SectionName =
  | (typeof HEADER)['name']
  | (typeof SECTIONS)[number]['name'];

export type Section = {
  Component:
    | (typeof HEADER)['Component']
    | (typeof SECTIONS)[number]['Component'];
  anchor: string;
  name: SectionName;
  title: string;
};

export const HEADER = {
  Component: Header,
  anchor: ' ',
  name: 'header',
  title: TITLE,
} as const;

export const SECTIONS = [
  {
    Component: About,
    anchor: '#about',
    name: 'about',
    title: `About / ${TITLE}`,
  },
  {
    Component: Testimonials,
    anchor: '#testimonials',
    name: 'testimonials',
    title: `Testimonials / ${TITLE}`,
  },
  {
    Component: Skills,
    anchor: '#skills',
    name: 'skills',
    title: `Skills / ${TITLE}`,
  },
  {
    Component: Projects,
    anchor: '#projects',
    name: 'projects',
    title: `Projects / ${TITLE}`,
  },
  {
    Component: Experience,
    anchor: '#experience',
    name: 'experience',
    title: `Experience / ${TITLE}`,
  },
] as const;

export const SECTIONS_WITH_HEADER = [HEADER, ...SECTIONS];
