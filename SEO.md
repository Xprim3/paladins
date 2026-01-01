# SEO Implementation Guide

## Overview
The Blood Paladins website has been fully optimized for search engines and social media sharing with comprehensive SEO implementation.

## Implemented Features

### 1. Meta Tags
- **Primary Meta Tags**: Title, description, keywords, author, robots
- **Open Graph Tags**: Complete OG tags for Facebook, LinkedIn, and other social platforms
- **Twitter Card Tags**: Optimized for Twitter sharing with large image cards
- **Language Support**: Dynamic meta tags that update based on selected language

### 2. Structured Data (JSON-LD)
- **Organization Schema**: Defines Blood Paladins as an organization
- **WebSite Schema**: Website information with search functionality
- **BreadcrumbList Schema**: Navigation structure for search engines
- All structured data is dynamically updated based on language

### 3. SEO Files
- **robots.txt**: Located at `/public/robots.txt` - Guides search engine crawlers
- **sitemap.xml**: Located at `/public/sitemap.xml` - Lists all pages and language variants
- **site.webmanifest**: PWA manifest for mobile installation

### 4. Social Media Optimization
- **OG Image**: SVG file at `/public/og-image.svg` (1200x630 recommended size)
- **Twitter Cards**: Large image cards for better engagement
- **Multi-language Support**: OG tags update based on user's language selection

### 5. Performance Optimizations
- **Preconnect**: DNS prefetching for fonts and external resources
- **Canonical URLs**: Prevents duplicate content issues
- **Theme Color**: Browser theme color matching brand (#8B0000)

## Important Notes

### OG Image
The current OG image is an SVG file (`/public/og-image.svg`). For best compatibility with all social media platforms, it's recommended to:

1. **Convert SVG to PNG**: Create a 1200x630 PNG version
2. **Update References**: Change all references from `og-image.svg` to `og-image.png` in:
   - `index.html`
   - `src/composables/useSEO.ts`
   - `src/components/ui/StructuredData.vue`

### Domain Configuration
Before going live, update the base URL in:
- `src/composables/useSEO.ts` - Change `https://bloodpaladins.com` to your actual domain
- `src/components/ui/StructuredData.vue` - Update base URL
- `public/sitemap.xml` - Update all URLs
- `index.html` - Update canonical and OG URLs

### Language-Specific SEO
The SEO system automatically updates meta tags when users change languages. Each language has:
- Custom title and description
- Appropriate keywords
- Correct locale settings for OG tags

## Testing SEO

### Google Rich Results Test
Test your structured data at: https://search.google.com/test/rich-results

### Facebook Sharing Debugger
Test OG tags at: https://developers.facebook.com/tools/debug/

### Twitter Card Validator
Test Twitter cards at: https://cards-dev.twitter.com/validator

### Google Search Console
1. Add your website to Google Search Console
2. Submit the sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing status

## SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ Canonical URLs
- ✅ Language-specific SEO
- ✅ Mobile-friendly meta tags
- ✅ Theme color
- ✅ PWA manifest
- ⚠️ OG Image (needs PNG conversion for best compatibility)

## Next Steps

1. **Convert OG Image**: Create a high-quality 1200x630 PNG image
2. **Update Domain**: Replace placeholder domain with actual domain
3. **Submit to Search Engines**: 
   - Google Search Console
   - Bing Webmaster Tools
4. **Monitor Performance**: Track rankings and social sharing metrics
5. **Regular Updates**: Keep sitemap.xml updated with lastmod dates

## Keywords Strategy

Primary keywords:
- Rise of Kingdoms
- Blood Paladins
- ROK alliance
- Gaming alliance
- Strategy gaming

Long-tail keywords:
- Join Rise of Kingdoms alliance
- Best ROK family alliance
- Blood Paladins recruitment
- Rise of Kingdoms elite warriors

## Social Media Integration

The website is optimized for sharing on:
- Facebook
- Twitter/X
- LinkedIn
- Discord
- Telegram
- Reddit

All social links are properly configured in structured data and meta tags.

