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
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Introducción',
          slug: 'index',
        },
        {
          label: 'OCA para WooCommerce',
          items: [
            'oca/introduccion',
            'oca/configuracion',
            'oca/medio-de-envio',
            'oca/ordenes',
            'oca/listado-ordenes',
            'oca/rastreo',
            'oca/tracking-mail',
            'oca/desarrolladores',
            'oca/preguntas-frecuentes',
          ],
        },
        {
          slug: 'contacto',
        },
      ],
      components: {
        Head: './src/components/starlight/Head.astro',
      },
    }),
  ],
});
