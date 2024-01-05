/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        allowedOrigins: [
          'http://localhost',
          'https://solid-space-potato-564r596r7q9hv5p-3000.app.github.dev/api',
        ]
      }
    }
  };
  
  module.exports = nextConfig;
  
