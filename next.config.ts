import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ['images.unsplash.com','cdn.dribbble.com']
  }
};

export default nextConfig;
