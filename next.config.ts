// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  images: {
    domains: ['randomuser.me', 'dummyjson.com'],
  },
};

module.exports = nextConfig;
