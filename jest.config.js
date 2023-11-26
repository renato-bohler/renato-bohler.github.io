/**
 * These are pure ESM packages that uses `package.exports`,
 * which is not yet supported by Jest. In order for these to work
 * inside tests, we need to manually map and transform them.
 *
 * See: https://github.com/facebook/jest/issues/9771
 */
const pureEsmDependencies = ['swiper', 'ssr-window', 'dom7'].join(
  '|',
);

module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.css$': 'identity-obj-proxy',
    '^~/(.*)$': '<rootDir>/$1',
    '^swiper/css': 'identity-obj-proxy',
    '^swiper/modules$':
      '<rootDir>/node_modules/swiper/modules/index.mjs',
    '^swiper/react$':
      '<rootDir>/node_modules/swiper/swiper-react.mjs',
    [`^(${pureEsmDependencies})$`]:
      '<rootDir>/node_modules/$1/$1.esm.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/e2e/',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    [`^.*/node_modules/(${pureEsmDependencies})/*`]: [
      'babel-jest',
      { presets: ['next/babel'] },
    ],
  },
  transformIgnorePatterns: [
    `node_modules/(?!(${pureEsmDependencies})/)`,
    '^.+\\.module\\.css$',
  ],
};
