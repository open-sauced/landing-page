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
            value: 'DENY'
          }
        ],
      },      
    ]
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/teams",
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
