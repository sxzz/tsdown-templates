import solid from 'vite-plugin-solid'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [solid()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './tests/setup.ts',
  },
})
