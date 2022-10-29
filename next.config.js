const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = process.env.NODE_ENV ==="production" ? nextConfig : {};

