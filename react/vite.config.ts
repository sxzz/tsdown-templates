/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { playwright } from '@vitest/browser-playwright'

export default defineConfig({
  root: './playground',
  plugins: [react({ babel: { plugins: ['babel-plugin-react-compiler'] } })],
  test: {
    root: '.',
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
      headless: true,
    },
  },
})
