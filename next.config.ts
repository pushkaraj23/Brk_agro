import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "jbtmarel.com",
      },
      {
        protocol: "https",
        hostname: "www.retort-machine.com",
      },
    ],
  },
};

export default nextConfig;
