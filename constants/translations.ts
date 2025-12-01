export const translations = {
    es: {
        nav: {
            about: "Sobre mí",
            experience: "Experiencia",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto",
        },
        hero: {
            greeting: "Hola, soy",
            role: "Desarrollador Web Junior",
            description: "Apasionado por crear experiencias web modernas y accesibles. Especializado en el ecosistema de Next.js y React.",
            cta: "Ver mis proyectos",
            contact: "Contáctame",
        },
        about: {
            title: "Sobre mí",
            content: "¡Hola! Soy un desarrollador web junior apasionado con talento para crear sitios web visualmente impactantes y fáciles de usar. Mi viaje en el desarrollo web comenzó con curiosidad por cómo funcionan las cosas en internet, lo que rápidamente se convirtió en una carrera profesional. Me especializo en el ecosistema JavaScript, particularmente React y Next.js.",
            stats: {
                years: "Años de Experiencia",
                projects: "Proyectos Completados"
            }
        },
        experience: {
            title: "Experiencia",
            items: [
                {
                    year: '2024 - Presente',
                    title: 'Desarrollador Web Junior',
                    company: 'Tech Startup',
                    description: 'Desarrollo de aplicaciones web responsivas utilizando Next.js y Tailwind CSS. Colaboración con equipos de diseño para implementar interfaces de usuario perfectas.',
                },
                {
                    year: '2023 - 2024',
                    title: 'Desarrollador Freelance',
                    company: 'Autónomo',
                    description: 'Creación de sitios web personalizados para empresas locales. Gestión de requisitos de clientes y entrega de proyectos a tiempo.',
                },
            ],
        },
        skills: {
            title: "Habilidades Técnicas",
            subtitle: "Las herramientas y tecnologías que uso para construir el metaverso.",
            levels: {
                Advanced: "Avanzado",
                Intermediate: "Intermedio",
                Basic: "Básico",
            }
        },
        projects: {
            title: "Proyectos Destacados",
            viewProject: "Ver Proyecto",
            viewCode: "Ver Código",
            items: [
                {
                    title: 'NFT Marketplace',
                    description: 'Un mercado descentralizado para el comercio de activos digitales con ofertas en tiempo real.',
                    longDescription: 'Construí un mercado NFT completamente funcional en la red Ethereum. Las características incluyen acuñación, compra, venta y subasta de NFTs. Implementé un contrato inteligente personalizado usando Solidity y lo integré con un frontend de Next.js usando Web3.js.',
                    tags: ['Next.js', 'Solidity', 'Web3.js', 'IPFS'],
                    image: 'bg-gradient-to-br from-purple-900 to-indigo-900',
                    github: '#',
                    demo: '#',
                },
                {
                    title: 'DeFi Dashboard',
                    description: 'Plataforma de análisis para rastrear activos criptográficos y oportunidades de yield farming.',
                    longDescription: 'Panel de control en tiempo real para rastrear el rendimiento de la cartera DeFi en múltiples cadenas. Utiliza The Graph para indexar datos de blockchain y Recharts para visualización de datos. Incluye conexión de billetera a través de RainbowKit.',
                    tags: ['React', 'D3.js', 'Tailwind', 'Ethers.js'],
                    image: 'bg-gradient-to-br from-pink-900 to-rose-900',
                    github: '#',
                    demo: '#',
                },
                {
                    title: 'Gobernanza DAO',
                    description: 'Sistema de votación para organizaciones autónomas descentralizadas con ejecución on-chain.',
                    longDescription: 'Un portal de gobernanza para DAOs que permite a los titulares de tokens crear propuestas y votar. Cuenta con votación cuadrática y ejecución on-chain de propuestas aprobadas. Construido con Hardhat y OpenZeppelin.',
                    tags: ['TypeScript', 'Ethers.js', 'Hardhat', 'OpenZeppelin'],
                    image: 'bg-gradient-to-br from-blue-900 to-cyan-900',
                    github: '#',
                    demo: '#',
                },
            ]
        },
        contact: {
            title: "Contacto",
            subtitle: "¿Tienes un proyecto en mente? ¡Hablemos!",
            namePlaceholder: "Tu nombre aqui",
            emailPlaceholder: "tu@email.com",
            messagePlaceholder: "Tu mensaje...",
            send: "Enviar Mensaje",
            sending: "Enviando...",
            success: "¡Mensaje enviado con éxito!",
            error: "Hubo un error al enviar el mensaje.",
            labels: {
                name: "NOMBRE",
                email: "EMAIL",
                message: "MENSAJE",
                phone: "TELÉFONO",
                location: "UBICACIÓN"
            }
        },
        footer: {
            rights: "TODOS LOS DERECHOS RESERVADOS.",
            privacy: "PRIVACIDAD",
            terms: "TÉRMINOS"
        }
    },
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
        },
        hero: {
            greeting: "Hi, I'm",
            role: "Junior Web Developer",
            description: "Passionate about creating modern and accessible web experiences. Specialized in the Next.js and React ecosystem.",
            cta: "View my projects",
            contact: "Contact me",
        },
        about: {
            title: "About Me",
            content: "Hello! I'm a passionate Junior Web Developer with a knack for creating visually stunning and user-friendly websites. My journey in web development started with a curiosity for how things work on the internet, which quickly turned into a career path. I specialize in the JavaScript ecosystem, particularly React and Next.js.",
            stats: {
                years: "Years Experience",
                projects: "Projects Completed"
            }
        },
        experience: {
            title: "Experience",
            items: [
                {
                    year: '2024 - Present',
                    title: 'Junior Web Developer',
                    company: 'Tech Startup',
                    description: 'Developing responsive web applications using Next.js and Tailwind CSS. Collaborating with design teams to implement pixel-perfect UIs.',
                },
                {
                    year: '2023 - 2024',
                    title: 'Freelance Developer',
                    company: 'Self-employed',
                    description: 'Built custom websites for local businesses. Managed client requirements and delivered projects on time.',
                },
            ],
        },
        skills: {
            title: "Technical Skills",
            subtitle: "The tools and technologies I use to build the metaverse.",
            levels: {
                Advanced: "Advanced",
                Intermediate: "Intermediate",
                Basic: "Basic",
            }
        },
        projects: {
            title: "Featured Projects",
            viewProject: "View Project",
            viewCode: "View Code",
            items: [
                {
                    title: 'NFT Marketplace',
                    description: 'A decentralized marketplace for trading digital assets with real-time bidding.',
                    longDescription: 'Built a fully functional NFT marketplace on the Ethereum network. Features include minting, buying, selling, and auctioning NFTs. Implemented a custom smart contract using Solidity and integrated it with a Next.js frontend using Web3.js.',
                    tags: ['Next.js', 'Solidity', 'Web3.js', 'IPFS'],
                    image: 'bg-gradient-to-br from-purple-900 to-indigo-900',
                    github: '#',
                    demo: '#',
                },
                {
                    title: 'DeFi Dashboard',
                    description: 'Analytics platform for tracking crypto assets and yield farming opportunities.',
                    longDescription: 'Real-time dashboard for tracking DeFi portfolio performance across multiple chains. Uses The Graph for indexing blockchain data and Recharts for data visualization. Includes wallet connection via RainbowKit.',
                    tags: ['React', 'D3.js', 'Tailwind', 'Ethers.js'],
                    image: 'bg-gradient-to-br from-pink-900 to-rose-900',
                    github: '#',
                    demo: '#',
                },
                {
                    title: 'DAO Governance',
                    description: 'Voting system for decentralized autonomous organizations with on-chain execution.',
                    longDescription: 'A governance portal for DAOs allowing token holders to create proposals and vote. Features quadratic voting and on-chain execution of passed proposals. Built with Hardhat and OpenZeppelin.',
                    tags: ['TypeScript', 'Ethers.js', 'Hardhat', 'OpenZeppelin'],
                    image: 'bg-gradient-to-br from-blue-900 to-cyan-900',
                    github: '#',
                    demo: '#',
                },
            ]
        },
        contact: {
            title: "Contact",
            subtitle: "Have a project in mind? Let's talk!",
            namePlaceholder: "Your name here",
            emailPlaceholder: "your@email.com",
            messagePlaceholder: "Your message...",
            send: "Send Message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "There was an error sending the message.",
            labels: {
                name: "NAME",
                email: "EMAIL",
                message: "MESSAGE",
                phone: "PHONE",
                location: "LOCATION"
            }
        },
        footer: {
            rights: "ALL RIGHTS RESERVED.",
            privacy: "PRIVACY",
            terms: "TERMS"
        }
    },
};

export type Language = 'es' | 'en';
export type Translation = typeof translations.es;
