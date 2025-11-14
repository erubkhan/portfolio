import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // smooth scrolling and scroll restoration
    scrollRestoration: true,
    },
};

export default nextConfig;
