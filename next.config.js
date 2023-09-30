/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  assetPrefix: !debug ? "/gallery/" : "",
};

module.exports = nextConfig;
