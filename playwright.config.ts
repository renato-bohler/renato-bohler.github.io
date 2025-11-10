import { defineConfig, devices } from '@playwright/test';
import { populate, type DotenvPopulateInput } from 'dotenv';

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
  expect: {
    toHaveScreenshot: {
      animations: 'allow',
      maxDiffPixelRatio: IS_CI ? 0 : 0.1,
    },
  },
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
  reporter: IS_CI ? 'github' : 'html',
  retries: IS_CI ? 2 : 0,
  snapshotPathTemplate:
    '{testDir}/__screenshots__/{testName}/{arg}-{projectName}.png',
  testDir: './e2e',
  use: {
    baseURL: URL,
    launchOptions: {
      slowMo: 500,
    },
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'yarn build && npx serve out',
    reuseExistingServer: !IS_CI,
    url: URL,
  },
});
