const light = {
  background: '#f8f9fa',
  'background-opaque': 'rgba(255, 255, 255, 0.5)',
  text: '#292e31',
  'card-background': '#f8f9fa',
  'card-border': '#d3d3d3',
  'card-text': '#292e31',
  shadow: 'rgba(0, 0, 0, 0.2)',
  'table-cell-background': 'rgba(0, 0, 0, 0.02)',
};

const dark = {
  background: '#0e141b',
  'background-opaque': 'rgba(0, 0, 0, 0.2)',
  text: '#ffffff',
  'card-background': '#282828',
  'card-border': '#3e3e3e',
  'card-text': '#f3f3f3',
  shadow: 'rgba(100, 100, 100, 0.2)',
  'table-cell-background': 'rgba(255, 255, 255, 0.02)',
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

export type Theme = typeof themes[0];

export default themes;
