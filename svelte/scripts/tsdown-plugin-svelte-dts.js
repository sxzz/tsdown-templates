import { resolve } from 'node:path'
import process from 'node:process'
import { emitDts } from 'svelte2tsx'

export function svelteDtsPlugin(options = {}) {
  return {
    name: 'tsdown-plugin-svelte-dts',
    async closeBundle() {
      const {
        declarationDir = './dist',
        libRoot = './src',
        tsconfig = 'tsconfig.json',
        svelteShimsPath = 'node_modules/svelte2tsx/svelte-shims-v4.d.ts',
      } = options

      const declarationDirAbs = resolve(process.cwd(), declarationDir)

      try {
        await emitDts({
          declarationDir: declarationDirAbs,
          svelteShimsPath: resolve(process.cwd(), svelteShimsPath),
          libRoot: resolve(process.cwd(), libRoot),
          tsconfig: resolve(process.cwd(), tsconfig),
        })

        console.log('Svelte DTS generation complete')
      } catch (error) {
        console.error('❌ Svelte DTS generation failed:', error)
        throw error
      }
    },
  }
}
