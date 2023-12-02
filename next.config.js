/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["kjsghmkjibyckibdjbfn.supabase.co"],
  },
};

module.exports = nextConfig;
