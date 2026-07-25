import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://documentacion.crplugins.com.ar/',
  integrations: [
    starlight({
      title: 'CRPlugins',
      credits: true,
      tableOfContents: true,
      plugins: [
        starlightLlmsTxt({
          projectName: 'CRPlugins',
          description:
            'Documentación de los plugins de CRPlugins para WooCommerce: OCA (envíos), ARCA (facturación electrónica) y MercadoPago Plus (pagos).',
          // Starlight renders a "Sección titulada «...»" anchor link after every
          // heading. It carries no information for an agent and accounted for
          // ~10% of llms-full.txt, so strip it from every generated file.
          customSelectors: { all: ['.sl-anchor-link'] },
          // Our `:::note` asides carry prerequisites (e.g. "necesitás una cuenta
          // OCA activa con operativas válidas"), which is exactly what an agent
          // needs to answer a support question. Keep them in the compact files.
          minify: { note: false },
          // One set per plugin, so an agent can pull only the product it needs
          // instead of the whole site.
          customSets: [
            {
              label: 'OCA para WooCommerce',
              description: 'envíos con OCA: instalación, configuración, órdenes y rastreo',
              paths: ['oca/**'],
            },
            {
              label: 'ARCA para WooCommerce',
              description:
                'facturación electrónica con ARCA: certificados, delegación, impuestos y órdenes',
              paths: ['arca/**'],
            },
            {
              label: 'MercadoPago Plus para WooCommerce',
              description: 'pagos con MercadoPago: instalación, configuración y órdenes',
              paths: ['mercadopago/**'],
            },
          ],
        }),
      ],
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
            'oca/instalacion',
            'oca/configuracion',
            'oca/medio-de-envio',
            'oca/ordenes',
            'oca/listado-ordenes',
            'oca/rastreo',
            'oca/tracking-mail',
            'oca/ejemplos-configuracion',
            'oca/desarrolladores',
            'oca/preguntas-frecuentes',
            'oca/errores-frecuentes',
          ],
        },
        {
          label: 'ARCA para WooCommerce',
          items: [
            'arca/introduccion',
            'arca/instalacion',
            'arca/configuracion',
            'arca/certificados',
            'arca/delegacion',
            'arca/impuestos',
            'arca/ordenes',
            'arca/listado-ordenes',
            'arca/mails',
            'arca/exportar-datos',
            'arca/ejemplos-configuracion',
            'arca/desarrolladores',
            'arca/preguntas-frecuentes',
            'arca/errores-frecuentes',
          ],
        },
        {
          label: 'MercadoPago Plus para WooCommerce',
          items: [
            'mercadopago/introduccion',
            'mercadopago/instalacion',
            'mercadopago/configuracion',
            'mercadopago/ordenes',
            'mercadopago/ejemplos-configuracion',
            'mercadopago/desarrolladores',
            'mercadopago/errores-frecuentes',
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
