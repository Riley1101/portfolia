import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      {
        url: 'https://arkar.space',
        lastModified: new Date(),
      },
      {
        url: 'https://arkar.space/about',
        lastModified: new Date(),
      },
      {
        url: 'https://arkar.space/articles',
        lastModified: new Date(),
      },

      {
        url: 'https://arkar.space/snippets',
        lastModified: new Date(),
      },
      {
        url: 'https://arkar.space/videos',
        lastModified: new Date(),
      },

    ];
  }