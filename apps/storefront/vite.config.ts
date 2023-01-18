/// <reference types="vitest" />
import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import {validateEnvironment} from 'vite-plugin-validate-environment';
import {envSchema} from './env.schema';

export default defineConfig({
  plugins: [
    hydrogen(),
    validateEnvironment({
      validate(environment) {
        envSchema.parse(environment);
      },
    }),
  ],
  resolve: {
    alias: [{find: /^~\/(.*)/, replacement: '/src/$1'}],
  },
  optimizeDeps: {
    include: ['@headlessui/react', 'clsx', 'react-use', 'typographic-base'],
  },
  test: {
    globals: true,
    testTimeout: 10000,
    hookTimeout: 10000,
    maxThreads: 1,
    minThreads: 1,
  },
});
