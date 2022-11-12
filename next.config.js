/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/writing/prime_factors_kata',
        destination: '/writing/prime-factors-kata',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
