import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wilbertwinardi.site'; // Ganti dengan domain Anda

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0, // Paling penting
      changeFrequency: 'yearly',
    },
    {
      url: `${baseUrl}/projects`, // URL: /projects
      lastModified: new Date(),
      priority: 0.7, 
      changeFrequency: 'yearly',
    },
    {
      url: `${baseUrl}/about`, // URL: /about
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: 'yearly',
    },
    {
      url: `${baseUrl}/contact`, // URL: /contact
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: 'yearly',
    },
  ];
}