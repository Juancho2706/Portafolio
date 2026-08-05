/**
 * Genera las imágenes Open Graph (1200x630) del sitio.
 *
 *   node scripts/generate-og.mjs
 *
 * Usa satori/resvg (incluidos en Next vía @vercel/og) y descarga las mismas
 * fuentes del sitio (Syne + Manrope) desde Google Fonts. Las imágenes se
 * escriben en /public y se versionan en el repo: el sitio es `output: export`,
 * así que no se generan en build.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import React from 'react';
import { ImageResponse } from 'next/dist/compiled/@vercel/og/index.node.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const VOID = '#030303';
const STARLIGHT = '#FDFDFD';
const ETHEREAL = '#5DFDFF';

// UA antiguo (Android 2.2) => Google Fonts responde TTF; satori no lee woff2/eot.
const LEGACY_UA =
  'Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) AppleWebKit/533.1';

async function loadFont(family, weight) {
  const cssUrl = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`;
  const css = await fetch(cssUrl, { headers: { 'User-Agent': LEGACY_UA } }).then((r) => r.text());
  const match = css.match(/src:\s*url\((.+?)\)/);
  if (!match) throw new Error(`No se pudo resolver la fuente ${family} ${weight}`);
  const res = await fetch(match[1]);
  if (!res.ok) throw new Error(`Fallo al descargar ${family} ${weight}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

const h = React.createElement;

const glow = (style) =>
  h('div', {
    style: {
      position: 'absolute',
      display: 'flex',
      ...style,
    },
  });

function Card({ eyebrow, lines, subtitle, footerRight }) {
  return h(
    'div',
    {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: VOID,
        padding: '56px 72px 150px',
        fontFamily: 'Manrope',
      },
    },
    // Auras del hero (radial-gradients en vez de blur: satori no soporta filter)
    glow({
      top: '-260px',
      left: '-200px',
      width: '900px',
      height: '900px',
      backgroundImage:
        'radial-gradient(circle at center, rgba(126,34,206,0.45) 0%, rgba(3,3,3,0) 68%)',
    }),
    glow({
      bottom: '-320px',
      right: '-220px',
      width: '860px',
      height: '860px',
      backgroundImage:
        'radial-gradient(circle at center, rgba(93,253,255,0.24) 0%, rgba(3,3,3,0) 70%)',
    }),
    glow({
      top: '140px',
      left: '380px',
      width: '620px',
      height: '620px',
      backgroundImage:
        'radial-gradient(circle at center, rgba(30,58,138,0.42) 0%, rgba(3,3,3,0) 70%)',
    }),
    // Eyebrow
    h(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          marginBottom: '28px',
        },
      },
      h('div', { style: { width: '56px', height: '1px', backgroundColor: 'rgba(253,253,253,0.45)' } }),
      h(
        'div',
        {
          style: {
            fontSize: '22px',
            letterSpacing: '8px',
            textTransform: 'uppercase',
            color: 'rgba(253,253,253,0.8)',
          },
        },
        eyebrow
      )
    ),
    // Título
    h(
      'div',
      { style: { display: 'flex', flexDirection: 'column' } },
      ...lines.map((line, i) =>
        h(
          'div',
          {
            key: i,
            style: {
              display: 'flex',
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: lines.length > 1 ? '110px' : '124px',
              lineHeight: 1.02,
              letterSpacing: '-4px',
              textTransform: 'uppercase',
              color: 'transparent',
              backgroundImage:
                i === lines.length - 1
                  ? `linear-gradient(90deg, ${STARLIGHT} 0%, ${ETHEREAL} 55%, ${STARLIGHT} 100%)`
                  : `linear-gradient(90deg, ${STARLIGHT} 0%, ${STARLIGHT} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            },
          },
          line
        )
      )
    ),
    // Bajada
    h(
      'div',
      {
        style: {
          display: 'flex',
          marginTop: '24px',
          fontSize: '28px',
          lineHeight: 1.35,
          color: 'rgba(253,253,253,0.62)',
          maxWidth: '820px',
        },
      },
      subtitle
    ),
    // Footer
    h(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          left: '72px',
          right: '72px',
          bottom: '50px',
          paddingTop: '26px',
          borderTop: '1px solid rgba(253,253,253,0.14)',
        },
      },
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: '26px',
            letterSpacing: '2px',
            color: ETHEREAL,
          },
        },
        'webdevjv.cl'
      ),
      h(
        'div',
        {
          style: {
            display: 'flex',
            fontSize: '22px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(253,253,253,0.45)',
          },
        },
        footerRight
      )
    )
  );
}

const CARDS = [
  {
    file: 'og.png',
    eyebrow: 'Desarrollador Frontend',
    lines: ['Juan', 'Villegas'],
    subtitle: 'Desarrollo web a medida en Chile: sitios rápidos, con diseño propio y pensados para vender.',
    footerRight: 'Next.js · React · UI/UX',
  },
  {
    file: 'og-creatupagina.png',
    eyebrow: 'Cuéntame tu proyecto',
    lines: ['Crea tu', 'Página Web'],
    subtitle: 'Completa el brief con tus ideas y objetivos, y diseñemos juntos una web profesional para tu negocio.',
    footerRight: 'Brief en 3 minutos',
  },
  {
    file: 'og-agendaaqui.png',
    eyebrow: 'Cotiza sin compromiso',
    lines: ['Cotiza tu', 'Página Web'],
    subtitle: 'Escríbeme por WhatsApp y recibe una propuesta clara para llevar tu negocio al siguiente nivel.',
    footerRight: 'Respuesta rápida',
  },
];

async function main() {
  const [syne, manropeRegular, manropeSemi] = await Promise.all([
    loadFont('Syne', 700),
    loadFont('Manrope', 400),
    loadFont('Manrope', 600),
  ]);

  const fonts = [
    { name: 'Syne', data: syne, weight: 700, style: 'normal' },
    { name: 'Manrope', data: manropeRegular, weight: 400, style: 'normal' },
    { name: 'Manrope', data: manropeSemi, weight: 600, style: 'normal' },
  ];

  await mkdir(PUBLIC_DIR, { recursive: true });

  for (const { file, ...props } of CARDS) {
    const image = new ImageResponse(h(Card, props), { width: 1200, height: 630, fonts });
    const buffer = Buffer.from(await image.arrayBuffer());
    await writeFile(path.join(PUBLIC_DIR, file), buffer);
    console.log(`✔ public/${file} (${(buffer.length / 1024).toFixed(0)} KB)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
