# sanity-plugin-core

> This is a **Sanity Studio v3** plugin.

## Installation

```sh
npm install sanity-plugin-core
```

## Usage

Add it as a plugin in `sanity.config.ts` (or .js):

```ts
import {defineConfig} from 'sanity'
import {core} from 'sanity-plugin-core'

export default defineConfig({
  //...
  plugins: [core({})],
})
```

## License

[MIT](LICENSE) © Noah Gentile

## Develop & test

This plugin uses [@sanity/plugin-kit](https://github.com/sanity-io/plugin-kit)
with default configuration for build & watch scripts.

See [Testing a plugin in Sanity Studio](https://github.com/sanity-io/plugin-kit#testing-a-plugin-in-sanity-studio)
on how to run this plugin with hotreload in the studio.
