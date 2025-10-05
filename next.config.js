/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ahmedlouay-portfolio',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.heroui.chat",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
module.exports = nextConfig;
