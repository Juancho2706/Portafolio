import type { Metadata } from 'next';
import CreaTuPaginaClient from './CreaTuPaginaClient';

export const metadata: Metadata = {
    title: 'Crea tu Página Web — Cuéntame tu Proyecto | Juan Villegas',
    description: 'Cuéntame tu proyecto y crea tu página web a medida. Completa el brief con tus ideas y objetivos, y diseñemos juntos una web profesional para tu negocio en Chile.',
    alternates: {
        canonical: '/creatupagina',
    },
    openGraph: {
        title: 'Crea tu Página Web — Cuéntame tu Proyecto | Juan Villegas',
        description: 'Cuéntame tu proyecto y crea tu página web a medida. Completa el brief con tus ideas y objetivos, y diseñemos juntos una web profesional para tu negocio en Chile.',
        type: 'website',
        locale: 'es_ES',
        url: '/creatupagina',
        siteName: 'Juan Villegas Portfolio',
    },
};

export default function CreatePage() {
    return <CreaTuPaginaClient />;
}
