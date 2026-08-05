import type { Metadata } from 'next';
import AgendaClient from './AgendaClient';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, webPageSchema, SERVICE_ID } from '@/constants/schema';
import { SITE_NAME } from '@/constants/site';

const TITLE = 'Cotiza tu Página Web';
const OG_TITLE = 'Cotiza tu Página Web | Juan Villegas';
const DESCRIPTION =
    'Cotiza tu página web con diseño profesional y a medida en Chile. Escríbeme por WhatsApp y recibe una respuesta rápida para llevar tu negocio al siguiente nivel.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: '/agendaaqui',
    },
    openGraph: {
        title: OG_TITLE,
        description: DESCRIPTION,
        type: 'website',
        locale: 'es_CL',
        siteName: SITE_NAME,
        url: '/agendaaqui',
        images: [
            {
                url: '/og-agendaaqui.png',
                width: 1200,
                height: 630,
                type: 'image/png',
                alt: 'Cotiza tu página web con Juan Villegas | webdevjv.cl',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: OG_TITLE,
        description: DESCRIPTION,
        images: ['/og-agendaaqui.png'],
    },
};

const pageSchema = {
    ...webPageSchema({
        type: 'ContactPage',
        path: '/agendaaqui',
        name: OG_TITLE,
        description: DESCRIPTION,
    }),
    about: { '@id': SERVICE_ID },
};

const crumbs = breadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Cotiza tu página web', path: '/agendaaqui' },
]);

export default function AgendaPage() {
    return (
        <>
            <JsonLd data={pageSchema} />
            <JsonLd data={crumbs} />
            <AgendaClient />
        </>
    );
}
