# Turborepo starter

This is an official npm starter turborepo.

## What's inside?

This monorepo uses [npm](https://www.npmjs.com/) as a package manager and leverages [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) to manage the following apps and internal packages:

### Apps and Packages

- `storefront`: a [Hydrogen](https://hydrogen.shopify.dev/) custom storefront
- `studio`: a [Sanity Studio](https://www.sanity.io/studio)
- `sanity`: shared [Sanity Studio](https://www.sanity.io/studio) configuration

### Utilities

This monorepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd demo-ecommerce
npm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd demo-ecommerce
npm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd demo-ecommerce
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your monorepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
