import { useEffect } from 'react';

export default function SEO({ 
  title = 'Saka Wira Kartika Kodim 0705 Magelang', 
  description = 'Website resmi Saka Wira Kartika Kodim 0705 Magelang. Jelajahi krida, quiz, galeri, dan informasi tentang TKK.',
  keywords = 'TKK, Saka Wira Kartika, Kodim 0705, Magelang, pramuka, pendidikan',
  image = '/swk.webp',
  url = 'https://swk-kodim0705.vercel.app',
  type = 'website',
  author = 'Saka Wira Kartika Kodim 0705'
}) {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta tags
    const updateMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.name = name;
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateOG = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic Meta Tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('author', author);
    updateMeta('viewport', 'width=device-width, initial-scale=1.0');
    updateMeta('theme-color', '#1f2937');

    // Open Graph Tags
    updateOG('og:title', title);
    updateOG('og:description', description);
    updateOG('og:image', image);
    updateOG('og:url', url);
    updateOG('og:type', type);
    updateOG('og:site_name', 'Saka Wira Kartika Kodim 0705');

    // Twitter Card Tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url, type, author]);

  return null;
}
