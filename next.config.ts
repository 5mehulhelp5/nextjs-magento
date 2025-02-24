import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: 'https://srv721099.hstgr.cloud/graphql/', // Twój endpoint GraphQL
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://srv721099.hstgr.cloud',
      },
    ],
  },
};

export default nextConfig;
