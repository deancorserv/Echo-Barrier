import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: '/Echo-Barrier',
  assetPrefix: '/Echo-Barrier/',
  images: { unoptimized: true },
};

export default nextConfig;
