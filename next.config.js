/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.artic.edu",
        port: "",
        pathname: "/docs/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
