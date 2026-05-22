// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Cambia esto por el dominio real del hotel cuando esté listo
  const URL_BASE = 'https://hotelvilladerosas.com'; 

  return [
    {
      url: URL_BASE,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0, // La página de inicio es la más importante
    },
    {
      url: `${URL_BASE}/habitaciones`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL_BASE}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}