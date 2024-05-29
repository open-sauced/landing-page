/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml',
      },
      {
        source: '/docs/:path*',
        destination: 'https://main--saucedocs.netlify.app/:path*',
      },
      {
        source: '/docs/',
        destination: 'https://main--saucedocs.netlify.app/',
      }
    ];
  },
  skipTrailingSlashRedirect: true, 

}

module.exports = nextConfig
