/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' here
  },
}

module.exports = nextConfig
