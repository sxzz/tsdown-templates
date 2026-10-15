import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: {
    generator: 'tsgo',
  },
  exports: true,
  // ...config options
})
