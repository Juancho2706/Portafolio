import type { Metadata } from 'next';
import AgendaClient from './AgendaClient';

export const metadata: Metadata = {
    title: 'Cotiza tu Página Web | Juan Villegas',
    description: 'Cotiza tu página web con diseño profesional y a medida en Chile. Escríbeme por WhatsApp y recibe una respuesta rápida para llevar tu negocio al siguiente nivel.',
    alternates: {
        canonical: '/agendaaqui',
    },
    openGraph: {
        title: 'Cotiza tu Página Web | Juan Villegas',
        description: 'Cotiza tu página web con diseño profesional y a medida en Chile. Escríbeme por WhatsApp y recibe una respuesta rápida para llevar tu negocio al siguiente nivel.',
        type: 'website',
        locale: 'es_ES',
        url: '/agendaaqui',
        siteName: 'Juan Villegas Portfolio',
    },
};

export default function AgendaPage() {
    return <AgendaClient />;
}
