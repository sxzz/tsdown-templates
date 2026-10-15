import svelte from 'rollup-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess'
import { defineConfig } from 'tsdown'
import { svelteDtsPlugin } from './scripts/tsdown-plugin-svelte-dts.ts'

export default defineConfig({
  dts: true,
  platform: 'neutral',
  exports: true,
  plugins: [
    // @ts-expect-error svelte plugin type mismatch
    svelte({ preprocess: sveltePreprocess() }),
    svelteDtsPlugin({
      declarationDir: './dist',
      libRoot: './src',
      tsconfig: 'tsconfig.json',
    }),
  ],
})
