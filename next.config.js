/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/riive',
  assetPrefix: '/riive',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
