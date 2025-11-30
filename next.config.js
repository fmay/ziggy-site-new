/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    minimumCacheTTL: 0, // Disable image caching in development
  },
}

module.exports = nextConfig
