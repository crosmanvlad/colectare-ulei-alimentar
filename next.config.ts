import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable standalone mode when deploying to Vercel to prevent .nft.json build conflicts
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
