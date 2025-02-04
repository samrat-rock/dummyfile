const nextConfig = {
  /* config options here */
  reactStrictMode: false,

  images: {
    // allow all domains for images
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
      {
        hostname: "**",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;