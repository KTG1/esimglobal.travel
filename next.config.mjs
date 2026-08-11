/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  turbopack: {
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
