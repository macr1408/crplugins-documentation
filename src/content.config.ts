import { defineCollection } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { i18nLoader } from '@astrojs/starlight/loaders';

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
