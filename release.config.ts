import { type GlobalConfig } from 'semantic-release';

import packageJson from './package.json' with { type: 'json' };

const config: GlobalConfig = {
  branches: ['master'],
  plugins: [
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]',
      },
    ],
    '@semantic-release/github',
  ],
  repositoryUrl: packageJson.repository.url,
  tagFormat: 'v${version}',
};

export default config;
