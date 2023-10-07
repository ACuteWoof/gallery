/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },
  basePath: !debug ? "/gallery" : "",
  assetPrefix: !debug ? "/gallery/" : "",
};

module.exports = nextConfig;
