/// <reference types="vite/client" />

interface Environment {
  /** The domain of your Shopify store */
  readonly PUBLIC_SHOPIFY_STORE_DOMAIN: string;
  /** Your app's public Storefront API access token. Authenticates browser and client requests. */
  readonly PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN: string;
  /** Your app's private Storefront API server (delegate access) token. Authenticates server requests. */
  readonly SHOPIFY_PRIVATE_STOREFRONT_API_TOKEN: string;

  /** The project ID of your Sanity project */
  readonly PUBLIC_SANITY_PROJECT_ID: string;
  /** The dataset in your Sanity project */
  readonly PUBLIC_SANITY_DATASET: string;
}

interface ImportMetaEnv extends Environment {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

namespace NodeJS {
  interface ProcessEnv extends Environment {}
}
