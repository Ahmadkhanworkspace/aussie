import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aussie-iptv.com';

    const routes = [
        '',
        '/packages',
        '/reseller',
        '/contact',
        '/how-it-works',
        '/faq',
        '/channels',
        '/devices',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));
}
