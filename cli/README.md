# tsdown-cli-starter

A starter for creating a TypeScript CLI package.

## Development

- Install dependencies:

```bash
npm install
```

- Run the unit tests:

```bash
npm run test
```

- Build the library:

```bash
npm run build
```

## Execution

The `name` defined in `package.json` determines the command used to run the script. After publishing to the npm registry, the command can be executed via:

```bash
npx <package-name>
```

If the command name is to be different from the package name, use an object for the `bin` field in `package.json`:

```json
{
  "bin": {
    "my-command": "./dist/index.js"
  }
}
```


Read more on [npm](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#bin).
