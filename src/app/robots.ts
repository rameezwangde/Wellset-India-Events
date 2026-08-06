import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wellsetindia.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/'], // Block search engines from indexing the Sanity Studio admin panel
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
