import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://documentacion.crplugins.com.ar/',
  integrations: [
    starlight({
      title: 'CRPlugins',
      favicon: './src/assets/favicon.svg',
      credits: true,
      tableOfContents: true,
      logo: {
        dark: './src/assets/dark-logo.svg',
        light: './src/assets/light-logo.svg',
        replacesTitle: true,
      },
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
