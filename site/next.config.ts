import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

console.log("NEXT CONFIG LOADED");

export default nextConfig;