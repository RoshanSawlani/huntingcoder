// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export all pages by default
  exportPathMap: async function (defaultPathMap) {
    return defaultPathMap;
  },
  reactStrictMode: true,
  // If you need to keep other configurations, you can add them here
};

export default nextConfig;
