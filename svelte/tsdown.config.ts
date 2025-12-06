import svelte from 'rollup-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess'
import { defineConfig } from 'tsdown'
import { svelteDtsPlugin } from './scripts/tsdown-plugin-svelte-dts.js'

export default defineConfig({
  platform: 'neutral',
  plugins: [
    svelte({ preprocess: sveltePreprocess() }),
    svelteDtsPlugin({
      declarationDir: './dist',
      libRoot: './src',
      tsconfig: 'tsconfig.json',
    }),
  ],
})
