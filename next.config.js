/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during production builds
  },
  reactStrictMode: true,
}

module.exports = {
  typescript: false
}


module.exports = nextConfig
