import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep deployments reliable; run `npm run lint` separately in CI.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Avoid Next inferring the wrong repo root when multiple lockfiles exist.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
