import React from 'react';

export const translations = {
    es: {
        nav: {
            about: "Sobre mí",
            skills: "Skills",
            projects: "Proyectos",
            contact: "Contacto",
        },
        hero: {
            role: "D E S A R R O L L A D O R   F R O N T E N D",
            greeting: "JUAN VILLEGAS",
            description: "Creando experiencias digitales con código y pasión.",
            scroll: "Desliza",
        },
        about: {
            title: "Sobre mí",
            intro: <>Soy un <span className="text-ethereal italic">Desarrollador Frontend</span> basado en Chile, enfocado en construir productos digitales con un fuerte énfasis en la <span className="text-starlight font-bold decoration-1 underline underline-offset-4 decoration-ethereal/50">experiencia de usuario</span>.</>,
            description: "Mi enfoque combina precisión técnica con dirección artística. No solo escribo código; creo narrativas interactivas que involucran e inspiran.",
            stats: {
                years: "Años de Experiencia",
                projects: "Proyectos Realizados"
            }
        },
        experience: {
            title: "Trayectoria",
            items: [
                {
                    year: "2024 - Presente",
                    role: "Desarrollador Frontend",
                    company: "Freelance",
                    description: "Desarrollo de interfaces de usuario modernas y responsivas utilizando React, Next.js y Tailwind CSS. Colaboración directa con clientes para transformar visiones en productos digitales.",
                },
                {
                    year: "2023 - 2024",
                    role: "Desarrollador Web Junior",
                    company: "Agencia Digital",
                    description: "Mantenimiento y optimización de sitios web existentes. Implementación de nuevas funcionalidades y corrección de bugs en entornos de producción.",
                }
            ]
        },
        skills: {
            stack: "STACK",
            title: "Tecnologías y\nHerramientas",
            levels: {
                expert: "Experto",
                advanced: "Avanzado",
                intermediate: "Intermedio",
                basic: "Básico"
            }
        },
        projects: {
            title: "Trabajos\nSeleccionados",
            more: "Más Pronto",
            viewLive: "Ver Sitio",
            viewCode: "Ver Código",
            items: [
                {
                    title: "SneakHub",
                    category: "E-Commerce / Streetwear",
                    description: "Tienda de zapatillas urbanas con diseño moderno y experiencia de compra fluida.",
                    image: "/projects/sneakhub.png",
                    links: { live: "https://tiendadezapatos-orpin.vercel.app/", github: "https://github.com/Juancho2706/Tiendadezapatos" }
                },
                {
                    title: "OlympusWolf",
                    category: "Web / Fitness",
                    description: "Plataforma web moderna para una marca de fitness de alto rendimiento.",
                    image: "/projects/olympuswolf.png",
                    links: { live: "https://www.olympuswolf.cl", github: "https://github.com/Juancho2706/Gymtrainer/tree/main" }
                },
                {
                    title: "VetMovil",
                    category: "SaaS / Veterinary",
                    description: "Software de gestión veterinaria a domicilio con agenda y seguimiento clínico.",
                    image: "/projects/vetmovil.png",
                    links: { live: "https://vetmovil-saas.vercel.app/", github: "https://github.com/Juancho2706/vetmovil-saas" }
                },
                {
                    title: "FacturaIA",
                    category: "AI / Fintech",
                    description: "Sistema de facturación inteligente impulsado por IA para automatizar procesos.",
                    image: "/projects/factura-ia.png",
                    links: { live: "https://facturacion-ia-test.vercel.app/", github: "https://github.com/Juancho2706/facturacion-ia/tree/main" }
                },
                {
                    title: "Proyecto Pokedex",
                    category: "App / API",
                    description: "Base de datos interactiva de Pokemon con estadísticas y evoluciones en tiempo real.",
                    image: "/projects/pokedex.png",
                    links: { live: "https://proyectopokedex.vercel.app/", github: "https://github.com/Juancho2706/proyectopokedex/tree/main" }
                }
            ]
        },
        contact: {
            pretitle: "Hablemos",
            title: "Trabajemos\njuntos.",
            copy: "Copiar",
            copied: "¡Copiado!",
            emailBtn: "Enviar Correo",
        },
        footer: {
            rights: "TODOS LOS DERECHOS RESERVADOS.",
        },
        brief: {
            title: "Comienza tu Proyecto",
            subtitle: "Cuéntame sobre tu idea. Construyamos algo increíble juntos.",
            form: {
                name: "Tu Nombre",
                namePlaceholder: "John Doe",
                email: "Tu Correo",
                emailPlaceholder: "john@example.com",
                phone: "WhatsApp / Teléfono",
                phonePlaceholder: "+56 9 1234 5678",
                type: "Tipo de Proyecto",
                typePlaceholder: "Selecciona una opción...",
                types: {
                    web: "Sitio Web Corporativo",
                    ecommerce: "E-Commerce",
                    landing: "Landing Page",
                    app: "Aplicación Web / SaaS",
                    other: "Otro",
                },
                budget: "Presupuesto Estimado (CLP)",
                budgetPlaceholder: "Selecciona un rango...",
                budgets: {
                    small: "Menos de $200.000 (Básico)",
                    medium: "$200.000 - $450.000 (Estándar)",
                    large: "$450.000 - $1.000.000 (Profesional)",
                    enterprise: "Más de $1.000.000 (A medida)",
                },
                description: "Detalles del Proyecto",
                descriptionPlaceholder: "Cuéntame más sobre los objetivos, público meta y funcionalidades clave...",
                submit: "Enviar Brief",
                sending: "Enviando...",
                success: "¡Mensaje Enviado!",
                successDesc: "He recibido tu solicitud. Te contactaré pronto para agendar una llamada.",
                error: "Error",
                errorDesc: "Algo salió mal. Por favor intenta de nuevo o escríbeme directamente.",
            }
        },
    },
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            role: "F R O N T E N D   D E V E L O P E R",
            greeting: "JUAN VILLEGAS",
            description: "Crafting digital experiences with code and passion.",
            scroll: "Scroll",
        },
        about: {
            title: "About Me",
            intro: <>I am a <span className="text-ethereal italic">Frontend Developer</span> based in Chile, focusing on building digital products with a strong emphasis on <span className="text-starlight font-bold decoration-1 underline underline-offset-4 decoration-ethereal/50">user experience</span>.</>,
            description: "My approach combines technical precision with artistic direction. I don't just write code; I craft interactive narratives that engage and inspire.",
            stats: {
                years: "Years Experience",
                projects: "Projects Shipped"
            }
        },
        experience: {
            title: "Experience",
            items: [
                {
                    year: "2024 - Present",
                    role: "Frontend Developer",
                    company: "Freelance",
                    description: "Developing modern and responsive user interfaces using React, Next.js, and Tailwind CSS. Collaborating directly with clients to transform visions into digital products.",
                },
                {
                    year: "2023 - 2024",
                    role: "Junior Web Developer",
                    company: "Digital Agency",
                    description: "Maintenance and optimization of existing websites. Implementation of new features and bug fixing in production environments.",
                }
            ]
        },
        skills: {
            stack: "STACK",
            title: "Technologies &\nTools",
            levels: {
                expert: "Expert",
                advanced: "Advanced",
                intermediate: "Intermediate",
                basic: "Basic"
            }
        },
        projects: {
            title: "Selected\nWorks",
            more: "More Coming Soon",
            viewLive: "Live Site",
            viewCode: "View Code",
            items: [
                {
                    title: "SneakHub",
                    category: "E-Commerce / Streetwear",
                    description: "Urban sneaker store with modern design and smooth shopping experience.",
                    image: "/projects/sneakhub.png",
                    links: { live: "https://tiendadezapatos-orpin.vercel.app/", github: "https://github.com/Juancho2706/Tiendadezapatos" }
                },
                {
                    title: "OlympusWolf",
                    category: "Web / Fitness",
                    description: "Modern web platform for a high-performance fitness brand.",
                    image: "/projects/olympuswolf.png",
                    links: { live: "https://www.olympuswolf.cl", github: "https://github.com/Juancho2706/Gymtrainer/tree/main" }
                },
                {
                    title: "VetMovil",
                    category: "SaaS / Veterinary",
                    description: "Home veterinary management software with scheduling and clinical tracking.",
                    image: "/projects/vetmovil.png",
                    links: { live: "https://vetmovil-saas.vercel.app/", github: "https://github.com/Juancho2706/vetmovil-saas" }
                },
                {
                    title: "FacturaIA",
                    category: "AI / Fintech",
                    description: "AI-powered smart invoicing system to automate financial processes.",
                    image: "/projects/factura-ia.png",
                    links: { live: "https://facturacion-ia-test.vercel.app/", github: "https://github.com/Juancho2706/facturacion-ia/tree/main" }
                },
                {
                    title: "Pokedex Project",
                    category: "App / API",
                    description: "Interactive Pokemon database with real-time stats and evolutions.",
                    image: "/projects/pokedex.png",
                    links: { live: "https://proyectopokedex.vercel.app/", github: "https://github.com/Juancho2706/proyectopokedex/tree/main" }
                }
            ]
        },
        contact: {
            pretitle: "Get in touch",
            title: "Let's work\ntogether.",
            copy: "Copy",
            copied: "Copied!",
            emailBtn: "Send Email",
        },
        footer: {
            rights: "ALL RIGHTS RESERVED.",
        },
        brief: {
            title: "Start Your Project",
            subtitle: "Tell me about your idea. Let's build something amazing together.",
            form: {
                name: "Your Name",
                namePlaceholder: "John Doe",
                email: "Your Email",
                emailPlaceholder: "john@example.com",
                phone: "WhatsApp / Phone",
                phonePlaceholder: "+56 9 1234 5678",
                type: "Project Type",
                typePlaceholder: "Select an option...",
                types: {
                    web: "Corporate Website",
                    ecommerce: "E-Commerce",
                    landing: "Landing Page",
                    app: "Web App / SaaS",
                    other: "Other",
                },
                budget: "Estimated Budget (USD)",
                budgetPlaceholder: "Select a range...",
                budgets: {
                    small: "Less than $250 (Basic)",
                    medium: "$250 - $550 (Standard)",
                    large: "$550 - $1,200 (Professional)",
                    enterprise: "More than $1,200 (Custom)",
                },
                description: "Project Details",
                descriptionPlaceholder: "Tell me more about goals, target audience, and key features...",
                submit: "Send Brief",
                sending: "Sending...",
                success: "Message Sent!",
                successDesc: "I've received your request. I'll be in touch soon to schedule a call.",
                error: "Error",
                errorDesc: "Something went wrong. Please try again or email me directly.",
            }
        },
    },
};

export type Language = 'es' | 'en';
export type Translation = typeof translations.es;
