# Portfolio Personal - Juan Villegas

Este repositorio contiene el código fuente de mi portafolio personal, diseñado para mostrar mis habilidades, experiencia y proyectos como Desarrollador Web Junior.

## 🚀 Tecnologías Utilizadas

Este proyecto fue construido utilizando un stack moderno y eficiente:

*   **[Next.js 15](https://nextjs.org/)**: Framework de React para producción, utilizado por su optimización y capacidad de exportación estática.
*   **[React](https://react.dev/)**: Biblioteca para construir interfaces de usuario interactivas.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades CSS para un diseño rápido, responsivo y moderno.
*   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca para animaciones fluidas y transiciones de página.
*   **[Lucide React](https://lucide.dev/)**: Iconografía limpia y consistente.
*   **[TypeScript](https://www.typescriptlang.org/)**: Para un código más robusto y seguro.

## ✨ Características Principales

*   **Diseño Responsivo**: Totalmente adaptado a dispositivos móviles, tablets y escritorio.
*   **Modo Oscuro**: Estética "Dark Mode" premium forzada para una experiencia visual inmersiva.
*   **Internacionalización (i18n)**: Soporte completo para Español (predeterminado) e Inglés, con persistencia de preferencia.
*   **Animaciones**: Elementos interactivos y transiciones suaves al hacer scroll.
*   **Formulario de Contacto**: Integración funcional mediante `mailto` para hosting estático.

## 🛠️ Cómo se Hizo (Resumen del Desarrollo)

Este portafolio fue desarrollado siguiendo un enfoque iterativo y centrado en la calidad visual:

1.  **Configuración Inicial**: Se inició el proyecto con `create-next-app`, configurando TypeScript y Tailwind CSS desde el principio.
2.  **Diseño y Estructura**:
    *   Se implementó una arquitectura de componentes modulares (`Hero`, `About`, `Skills`, `Projects`, `Contact`).
    *   Se diseñó una interfaz moderna con efectos de "glassmorphism" y gradientes sutiles.
3.  **Funcionalidades Clave**:
    *   **Contexto de Idioma**: Se creó un `LanguageContext` para manejar las traducciones en toda la app sin dependencias pesadas.
    *   **Theming**: Inicialmente se implementó un toggle claro/oscuro, pero se decidió unificar la experiencia en un modo oscuro pulido.
4.  **Optimización para Despliegue**:
    *   Se configuró `output: 'export'` en Next.js para generar un sitio totalmente estático.
    *   Se adaptaron componentes dinámicos (como el formulario) para funcionar sin un backend de Node.js, asegurando compatibilidad con cualquier hosting (cPanel, GitHub Pages, etc.).


