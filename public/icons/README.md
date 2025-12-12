# Ziggy Icon Set

This directory contains various icon variations created from `ziggy-z-light-bg.svg`.

## Icon Files

### Favicons
- **favicon.ico** (5.1K) - Multi-resolution ICO file for browsers (16×16, 32×32)
- **favicon.svg** (1.2K) - SVG favicon for modern browsers
- **favicon-16x16.png** (365B) - 16×16 PNG favicon
- **favicon-32x32.png** (680B) - 32×32 PNG favicon
- **favicon-96x96.png** (2.0K) - 96×96 PNG favicon

### Mobile & App Icons
- **apple-touch-icon.png** (3.8K) - 180×180 Apple touch icon
- **android-chrome-192x192.png** (4.1K) - 192×192 Android Chrome icon
- **android-chrome-512x512.png** (12K) - 512×512 Android Chrome icon
- **web-app-manifest-192x192.png** (4.1K) - 192×192 PWA manifest icon
- **web-app-manifest-512x512.png** (12K) - 512×512 PWA manifest icon

### SVG Source Icons
- **ziggy-icon.svg** (1024×1024) - Full color, standard version with transparent background
- **ziggy-icon-square.svg** (512×512) - Full color, optimized for web use
- **ziggy-icon-192.svg** (192×192) - Smaller size for favicons and app icons

### Background Variations
- **ziggy-icon-white-bg.svg** - Icon on white background (useful for dark mode contexts)
- **ziggy-icon-light-bg.svg** - Icon on light gray background (#f0f4f8)
- **ziggy-icon-dark-bg.svg** - Icon on dark background (#0a1628)

### Special Versions
- **ziggy-icon-mono.svg** - Monochrome version using `currentColor` (adapts to text color in UI)
- **ziggy-z-only.svg** - Just the "Z" element (minimal branding)

## Usage Examples

### In HTML Head (Favicons)
```html
<!-- Modern browsers (SVG) -->
<link rel="icon" type="image/svg+xml" href="/icons/favicon.svg">

<!-- Legacy browsers (ICO) -->
<link rel="icon" type="image/x-icon" href="/icons/favicon.ico">

<!-- PNG fallbacks -->
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">

<!-- Android Chrome -->
<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png">
```

### In HTML (Images)
```html
<!-- Standard icon -->
<img src="/icons/ziggy-icon.svg" alt="Ziggy" width="48" height="48">

<!-- Monochrome (inherits color from parent) -->
<span style="color: blue;"><img src="/icons/ziggy-icon-mono.svg" alt="Ziggy"></span>
```

### In CSS
```css
.logo {
  background-image: url('/icons/ziggy-icon.svg');
}
```

### In Web App Manifest (manifest.json)
```json
{
  "name": "Ziggy",
  "icons": [
    {
      "src": "/icons/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## Color Scheme
- **Orange/Coral**: #ff8a72 (top parallelogram)
- **Teal/Turquoise**: #16a5b8 (bottom parallelogram)
- **Dark Blue**: #072443 (Z shape)

## File Sizes
All SVG files are optimized vectors (no embedded bitmaps):
- Range from 459 bytes to 1.2 KB
- Much smaller than raster formats
- Scale perfectly at any size
