import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s2.coinmarketcap.com",
        port: "",
        // pathname: '/account123/**',
        search: "",
      },
      {
        protocol: "https",
        hostname: "s3.coinmarketcap.com",
        port: "",
        // pathname: '/account123/**',
        search: "",
      },
      {
        protocol: "https",
        hostname: "academy-public.coinmarketcap.com",
        port: "",
        // pathname: '/account123/**',
        search: "",
      },
    ],
  },
};

export default nextConfig;
