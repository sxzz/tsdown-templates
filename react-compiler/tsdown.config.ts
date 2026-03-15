import pluginBabel from '@rolldown/plugin-babel'
import { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'tsdown'

export default defineConfig({
  platform: 'neutral',
  exports: true,
  plugins: [
    pluginBabel({
      presets: [reactCompilerPreset()],
    }),
  ],
})
