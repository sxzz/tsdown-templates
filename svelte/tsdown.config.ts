import svelte from 'rollup-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess'
import { defineConfig } from 'tsdown'
import { svelteDtsPlugin } from './scripts/tsdown-plugin-svelte-dts.js'

export default defineConfig({
  dts: true,
  platform: 'neutral',
  exports: true,
  plugins: [
    svelte({ preprocess: sveltePreprocess() }),
    svelteDtsPlugin({
      declarationDir: './dist',
      libRoot: './src',
      tsconfig: 'tsconfig.json',
    }),
  ],
})
