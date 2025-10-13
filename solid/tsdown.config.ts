import { defineConfig } from 'tsdown'
import solid from 'rolldown-plugin-solid'

// export both js and jsx
export default defineConfig([
  {
    // use the solid plugin to handle jsx
    plugins: [solid()],
  },
  {
    // preserve jsx in the output
    inputOptions: { jsx: 'preserve' },
    outExtensions: () => ({ js: '.jsx' }),
  },
])
