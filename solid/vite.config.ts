/// <reference types="vitest/config" />
import { playwright } from '@vitest/browser-playwright'
import solid from 'vite-plugin-solid'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './playground',
  plugins: [solid()],
  test: {
    root: '.',
    environment: 'node',
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      headless: true,
    },
  },
})
