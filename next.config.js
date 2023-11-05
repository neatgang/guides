/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "uploadthing.com",
      "lh3.googleusercontent.com",
      "static-cdn.jtvnw.net",
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
