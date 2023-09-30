/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: !debug ? "/blog/" : "",
};

module.exports = nextConfig;
