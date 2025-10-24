/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.shainapauley.com',
          },
        ],
        destination: 'https://shainapauley.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
