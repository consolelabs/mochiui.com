/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/nextjs--gh-pages' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
