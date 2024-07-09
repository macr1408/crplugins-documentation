import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'CRPlugins',
      credits: true,
      tableOfContents: true,
      locales: {
        root: {
          label: 'Español',
          lang: 'es',
        },
      },
      sidebar: [
        {
          label: 'Introducción',
          slug: 'index',
        },
        {
          label: 'OCA Para WooCommerce',
          autogenerate: { directory: 'oca' },
        },
      ],
    }),
  ],
});
