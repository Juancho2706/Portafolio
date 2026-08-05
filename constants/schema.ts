import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from './site';

/**
 * Datos estructurados (JSON-LD) del sitio.
 *
 * Se usan @id estables para que Google entienda que la Person, el WebSite y el
 * servicio son la misma entidad en todas las páginas.
 */
export const PERSON_ID = `${SITE_URL}/#persona`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const SERVICE_ID = `${SITE_URL}/#servicio`;

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Juan Villegas',
  jobTitle: 'Desarrollador Web Frontend',
  description:
    'Desarrollador web frontend en Chile. Diseño y programo sitios y aplicaciones a medida con Next.js, React y Tailwind CSS.',
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  email: `mailto:${CONTACT_EMAIL}`,
  telephone: CONTACT_PHONE,
  knowsLanguage: ['es', 'en'],
  knowsAbout: [
    'Desarrollo web',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Diseño de interfaces',
    'Optimización de rendimiento web',
    'SEO técnico',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CL',
  },
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
};

const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    'Portafolio y servicios de desarrollo web de Juan Villegas: sitios a medida, landing pages y aplicaciones con Next.js y React.',
  inLanguage: 'es-CL',
  publisher: { '@id': PERSON_ID },
};

const service = {
  '@type': 'ProfessionalService',
  '@id': SERVICE_ID,
  name: 'webdevjv — Desarrollo de páginas web en Chile',
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  logo: `${SITE_URL}/logo-jv.png`,
  description:
    'Desarrollo de páginas web profesionales a medida en Chile: sitios corporativos, landing pages, e-commerce y aplicaciones web rápidas y optimizadas para buscadores.',
  provider: { '@id': PERSON_ID },
  founder: { '@id': PERSON_ID },
  email: `mailto:${CONTACT_EMAIL}`,
  telephone: CONTACT_PHONE,
  priceRange: '$$',
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  availableLanguage: ['es', 'en'],
  serviceType: [
    'Desarrollo de páginas web',
    'Diseño web a medida',
    'Landing pages',
    'Tiendas online',
    'Aplicaciones web',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Ventas',
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    availableLanguage: ['es', 'en'],
    areaServed: 'CL',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de desarrollo web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sitio web corporativo a medida',
          description:
            'Sitio web profesional diseñado y programado desde cero, responsivo y optimizado para buscadores.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Landing page de conversión',
          description:
            'Página única enfocada en captar clientes, con formulario, WhatsApp y métricas.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tienda online',
          description: 'E-commerce con catálogo, carrito y pasarela de pago.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Aplicación web',
          description:
            'Aplicaciones web a medida con React y Next.js para digitalizar procesos de negocio.',
        },
      },
    ],
  },
  sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
};

/** Grafo global: va una sola vez, en el layout raíz. */
export const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [person, website, service],
};

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function webPageSchema({
  type = 'WebPage',
  path,
  name,
  description,
}: {
  type?: 'WebPage' | 'ContactPage' | 'ProfilePage' | 'AboutPage';
  path: string;
  name: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${SITE_URL}${path}#page`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    inLanguage: 'es-CL',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${OG_IMAGE}`,
    },
  };
}
