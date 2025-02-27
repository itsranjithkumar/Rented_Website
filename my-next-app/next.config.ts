import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true  // Temporarily ignore build errors
  }
};

export default nextConfig;