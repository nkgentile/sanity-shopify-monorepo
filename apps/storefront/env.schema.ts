import {z} from 'zod';

export const envSchema = z.object({
  PUBLIC_SHOPIFY_STORE_DOMAIN: z.string({
    description: 'The domain of your Shopify store ',
  }),
  PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN: z.string({
    description: `Your app's public Storefront API access token. Authenticates browser and client requests.`,
  }),
  SHOPIFY_PRIVATE_STOREFRONT_API_TOKEN: z.string({
    description: `Your app's private Storefront API server (delegate access) token. Authenticates server requests.`,
  }),
  PUBLIC_SANITY_PROJECT_ID: z.string({
    description: 'The project ID of your Sanity project',
  }),
  PUBLIC_SANITY_DATASET: z.string({
    description: 'The dataset in your Sanity project',
  }),
});

export type Environment = z.infer<typeof envSchema>;
