export const META_DATA_HOME = {
  title: 'ARAZÁ | Soluciones avanzadas en Inteligencia Artificial',
  meta: [
    {
      name: 'description',
      content:
        '🚀 Desarrollo de software a la medida e inteligencia artificial avanzada. En ARAZÁ creamos soluciones innovadoras y eficientes para optimizar tu negocio.',
    },
    {
      name: 'keywords',
      content: 'inteligencia artificial, desarrollo a la medida, software, tecnología, soluciones escalables',
    },
    {
      name: 'author',
      content: 'Arazá S.A.S.',
    },
    {
      name: 'publisher',
      content: 'Arazá S.A.S.',
    },
  ],
  scripts: [
    {
      props: {
        type: 'application/ld+json',
      },
      script: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Arazá S.A.S.',
        url: 'https://araza.tech',
        logo: 'https://araza.tech/logo.png',
      }),
    },
  ],
};

// Header Component Texts
export const HEADER_TITLE = 'Soluciones avanzadas en Inteligencia Artificial';
export const HEADER_DESCRIPTION =
  'Desarrollamos soluciones tecnológicas a la medida potenciadas con inteligencia artificial. Transformamos ideas en productos innovadores, escalables y seguros que generan un impacto real.';
