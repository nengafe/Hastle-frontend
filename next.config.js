/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async rewrites() {
  //       return [
  //         {
  //           source: '/api/:path*',
  //           destination: 'https://localhost:3005/graphql',
  //         },
  //       ]
  //     },
  
}

module.exports = nextConfig
