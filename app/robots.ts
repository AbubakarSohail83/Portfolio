import { MetadataRoute } from 'next';

/* SEO: Robots.txt configuration for search engine crawlers
 * Allows full indexing while pointing to sitemap
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://abubakarsohail.online';
  
  return {
    rules: [
      {
        /* SEO: Allow all search engines to crawl all pages */
        userAgent: '*',
        allow: '/',
        /* SEO: Block API routes and internal paths from indexing */
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    /* SEO: Point crawlers to the sitemap for efficient indexing */
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
