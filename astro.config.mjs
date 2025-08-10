import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://documentacion.crplugins.com.ar/',
  integrations: [
    starlight({
      title: 'CRPlugins',
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
            'oca/errores-frecuentes',
          ],
        },
        {
          label: 'ARCA para WooCommerce',
          items: [
            'arca/introduccion',
            'arca/configuracion',
            'arca/certificados',
            'arca/delegacion',
            'arca/impuestos',
            'arca/ordenes',
            'arca/listado-ordenes',
            'arca/mails',
            'arca/desarrolladores',
            'arca/preguntas-frecuentes',
            'arca/errores-frecuentes',
          ],
        },
        {
          slug: 'contacto',
        },
      ],
      components: {
        Head: './src/components/starlight/Head.astro',
        SiteTitle: './src/components/starlight/SiteTitle.astro',
      },
    }),
  ],
});
