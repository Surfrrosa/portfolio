/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
