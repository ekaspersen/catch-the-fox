/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images: {
        domains: ["kjsghmkjibyckibdjbfn.supabase.co"],
    },
};

module.exports = nextConfig;
