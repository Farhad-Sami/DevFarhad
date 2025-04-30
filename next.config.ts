import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/DevFarhad',
  images: {
    domains: ['fiverr-res.cloudinary.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
