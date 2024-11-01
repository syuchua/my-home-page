// import i18n from './next-i18next.config.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN || '',
  },
//   i18n: i18n.i18n,
  experimental: {
    esmExternals: true
  }
}

export default nextConfig 