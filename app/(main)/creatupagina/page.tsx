import type { Metadata } from 'next';
import CreaTuPaginaClient from './CreaTuPaginaClient';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, webPageSchema, SERVICE_ID } from '@/constants/schema';
import { SITE_NAME } from '@/constants/site';

const TITLE = 'Crea tu Página Web a Medida';
const OG_TITLE = 'Crea tu Página Web — Cuéntame tu Proyecto | Juan Villegas';
const DESCRIPTION =
    'Cuéntame tu proyecto y crea tu página web a medida. Completa el brief con tus ideas y objetivos, y diseñemos juntos una web profesional para tu negocio en Chile.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: {
        canonical: '/creatupagina',
    },
    openGraph: {
        title: OG_TITLE,
        description: DESCRIPTION,
        type: 'website',
        locale: 'es_CL',
        siteName: SITE_NAME,
        url: '/creatupagina',
        images: [
            {
                url: '/og-creatupagina.png',
                width: 1200,
                height: 630,
                type: 'image/png',
                alt: 'Crea tu página web a medida con Juan Villegas | webdevjv.cl',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: OG_TITLE,
        description: DESCRIPTION,
        images: ['/og-creatupagina.png'],
    },
};

const pageSchema = {
    ...webPageSchema({
        path: '/creatupagina',
        name: OG_TITLE,
        description: DESCRIPTION,
    }),
    about: { '@id': SERVICE_ID },
};

const crumbs = breadcrumbSchema([
    { name: 'Inicio', path: '/' },
    { name: 'Crea tu página web', path: '/creatupagina' },
]);

export default function CreatePage() {
    return (
        <>
            <JsonLd data={pageSchema} />
            <JsonLd data={crumbs} />
            <CreaTuPaginaClient />
        </>
    );
}
