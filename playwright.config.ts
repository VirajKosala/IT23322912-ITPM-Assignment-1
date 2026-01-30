import { defineConfig, devices } from '@playwright/test';

/**
 * Optimized configuration for IT23322912 - Singlish Translator Project
 * This setup addresses the "30000ms timeout exceeded" error in GitHub Actions.
 */
export default defineConfig({
  testDir: './tests',
  /* Increase global timeout to 90 seconds for slow CI runners */
  timeout: 90000, 
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only to handle network flakiness */
  retries: process.env.CI ? 2 : 0,
  /* Sequential execution in CI prevents CPU overloading */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use */
  reporter: 'html',
  
  use: {
    /* Base action timeout for .fill(), .click(), etc. */
    actionTimeout: 20000,
    /* Longer timeout for initial page load in CI */
    navigationTimeout: 45000,
    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',
    /* Ensure the browser waits for the network to be quiet before interacting */
    video: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        /* Automatically wait for the site to be ready */
        launchOptions: {
          args: ['--disable-dev-shm-usage']
        }
      },
    },
  ],
});
