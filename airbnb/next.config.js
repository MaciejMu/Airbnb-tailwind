/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "a0.muscache.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;
