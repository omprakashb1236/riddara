/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add 'cdn.sanity.io' here
  },
  i18n,
}

module.exports = nextConfig
