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
      {
        source: "/news/:path*",
        headers: [
          {
            key: "x-forwarded-host",
            value: "opensauced.pizza"
          }
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
        destination: 'https://docs.opensauced.pizza/:path*',
      },
      {
        source: '/docs/',
        destination: 'https://docs.opensauced.pizza/',
      },
      {
        source: "/news/:path*/",
        destination: "https://news.opensauced.pizza/blog/:path*/",
      },
      {
        source: "/news/",
        destination: "https://news.opensauced.pizza",
      },
    ];
  },
  skipTrailingSlashRedirect: true, 

}

module.exports = nextConfig
