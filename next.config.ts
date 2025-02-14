import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
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
