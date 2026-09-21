import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/delete-account/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Google-Extended',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Applebot',
          'Applebot-Extended',
          'CCBot',
          'cohere-ai',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://zumpa.in/sitemap.xml',
  };
}
