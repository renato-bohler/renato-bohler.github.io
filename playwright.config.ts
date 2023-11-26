import { defineConfig, devices } from '@playwright/test';
import { DotenvPopulateInput, populate } from 'dotenv';

const URL = 'http://localhost:3000';
const IS_CI = !!process.env.CI;

// Avoids possible changes from dynamic content
populate(process.env as DotenvPopulateInput, {
  GITHUB_TOKEN: '',
  NEXT_PUBLIC_LAST_UPDATED: new Date(
    new Date().valueOf() - 400 * 24 * 60 * 60 * 1000,
  ).toISOString(),
});

export default defineConfig({
  forbidOnly: IS_CI,
  fullyParallel: true,
  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { height: 1080, width: 1920 },
      },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'] },
    },
  ],
  reporter: 'html',
  retries: IS_CI ? 2 : 0,
  snapshotPathTemplate:
    '{testDir}/__screenshots__/{testName}/{arg}-{projectName}.png',
  testDir: './e2e',
  use: {
    baseURL: URL,
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'yarn build && npx serve out',
    reuseExistingServer: !IS_CI,
    url: URL,
  },
});
