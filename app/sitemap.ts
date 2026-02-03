import { MetadataRoute } from 'next';

/* SEO: Dynamic sitemap generation for search engine indexing
 * Includes all major pages with appropriate priorities and change frequencies
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abubakarsohail.online';
  
  /* SEO: Define all indexable pages with metadata */
  return [
    {
      /* SEO: Homepage - highest priority, changes frequently */
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      /* SEO: About section - important for personal branding */
      url: `${baseUrl}/#about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      /* SEO: Experience section - key for recruiter searches */
      url: `${baseUrl}/#experience`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      /* SEO: Projects section - showcases technical ability */
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      /* SEO: Skills section - important for tech keyword matching */
      url: `${baseUrl}/#skills`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      /* SEO: Contact section - conversion page */
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
