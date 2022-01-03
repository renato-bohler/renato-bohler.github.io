const light = {
  'is-contrast': '0',
  background: '#f8f9fa',
  'background-opaque': 'rgba(255, 255, 255, 0.5)',
  'menu-background': 'transparent',
  'menu-background-fallback': 'rgba(255, 255, 255, 0.75)',
  text: '#292e31',
  'testimonial-card-background': '#f8f9fa',
  'testimonial-card-border': '#d3d3d3',
  'testimonial-card-text': '#292e31',
  shadow: 'rgba(0, 0, 0, 0.2)',
  'table-cell-background': 'rgba(0, 0, 0, 0.02)',
};

const dark = {
  'is-contrast': '0',
  background: '#0e141b',
  'background-opaque': 'rgba(0, 0, 0, 0.2)',
  'menu-background': 'transparent',
  'menu-background-fallback': 'rgba(0, 0, 0, 0.75)',
  text: '#ffffff',
  'testimonial-card-background': '#282828',
  'testimonial-card-border': '#3e3e3e',
  'testimonial-card-text': '#f3f3f3',
  shadow: 'rgba(100, 100, 100, 0.2)',
  'table-cell-background': 'rgba(255, 255, 255, 0.02)',
};

export const contrast = {
  name: 'Contrast',
  light: {
    'is-contrast': '1',
    background: 'white',
    'background-opaque': 'rgba(255, 255, 255, 0.5)',
    'menu-background': 'white',
    'menu-background-fallback': 'white',
    text: 'black',
    'testimonial-card-background': 'white',
    'testimonial-card-border': 'black',
    'testimonial-card-text': 'black',
    shadow: 'transparent',
    'table-cell-background': 'rgba(0, 0, 0, 0.01)',
    //
    'primary-bright': '#383838',
    'primary-dark': 'black',
    'secondary-bright': '#525252',
    'secondary-dark': '#282828',
  },
  dark: {
    'is-contrast': '1',
    background: 'black',
    'background-opaque': 'rgba(0, 0, 0, 0.2)',
    'menu-background': 'black',
    'menu-background-fallback': 'black',
    text: 'white',
    'testimonial-card-background': 'black',
    'testimonial-card-border': 'white',
    'testimonial-card-text': 'white',
    shadow: 'transparent',
    'table-cell-background': 'rgba(255, 255, 255, 0.01)',
    //
    'primary-bright': 'white',
    'primary-dark': '#bfbfbf',
    'secondary-bright': '#ededed',
    'secondary-dark': '#b3b3b3',
  },
};

const themes = [
  {
    name: 'Orange',
    light: {
      ...light,
      'primary-bright': '#ee0979',
      'primary-dark': '#77043c',
      'secondary-bright': '#ff6a00',
      'secondary-dark': '#7f3401',
    },
    dark: {
      ...dark,
      'primary-bright': '#ee0979',
      'primary-dark': '#77043c',
      'secondary-bright': '#ff6a00',
      'secondary-dark': '#7f3401',
    },
  },
  {
    name: 'Cyan',
    light: {
      ...light,
      'primary-bright': '#4ca1af',
      'primary-dark': '#265057',
      'secondary-bright': '#c4e0e5',
      'secondary-dark': '#606f72',
    },
    dark: {
      ...dark,
      'primary-bright': '#4ca1af',
      'primary-dark': '#265057',
      'secondary-bright': '#c4e0e5',
      'secondary-dark': '#606f72',
    },
  },
  {
    name: 'Vice',
    light: {
      ...light,
      'primary-bright': '#ec6ead',
      'primary-dark': '#763756',
      'secondary-bright': '#3494e6',
      'secondary-dark': '#1d4972',
    },
    dark: {
      ...dark,
      'primary-bright': '#ec6ead',
      'primary-dark': '#763756',
      'secondary-bright': '#3494e6',
      'secondary-dark': '#1d4972',
    },
  },
  {
    name: 'Purple',
    light: {
      ...light,
      'primary-bright': '#7f00ff',
      'primary-dark': '#3f007f',
      'secondary-bright': '#e100ff',
      'secondary-dark': '#6f007f',
    },
    dark: {
      ...dark,
      'primary-bright': '#7f00ff',
      'primary-dark': '#3f007f',
      'secondary-bright': '#e100ff',
      'secondary-dark': '#6f007f',
    },
  },
];

export type Theme = typeof themes[number];

export default themes;
