/// <reference types="vite/client" />
import {Environment} from './env.schema';

interface ImportMetaEnv extends Environment {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

namespace NodeJS {
  interface ProcessEnv extends Environment {}
}
