import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/creatupagina`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/agendaaqui`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
