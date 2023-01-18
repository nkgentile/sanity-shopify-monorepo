import { loadEnv, normalizePath, Plugin } from 'vite';
import { resolve } from 'node:path'

/**
 * Load environment variables and validate them
 */
export function validateEnvironment(options: {
    validate(environment: unknown): void;
}): Plugin {
    return {
        name: 'validate-environment',
        enforce: 'post',
        config(config, { mode }) {
            const resolvedRoot = normalizePath(
                config.root ? resolve(config.root) : process.cwd(),
            );

            const envDir = config.envDir
                ? normalizePath(resolve(resolvedRoot, config.envDir))
                : resolvedRoot;

            /**
             * Load _all_ environment variables, including ones not prefixed
             * @see https://github.com/vitejs/vite/blob/e58a4f00e201e9c0d43ddda51ccac7b612d58650/packages/vite/src/node/env.ts
             */
            const env = loadEnv(mode, envDir, '');

            options.validate(env);
        },
    };
}