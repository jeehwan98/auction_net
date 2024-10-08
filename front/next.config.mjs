// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Avoid including `fs` module in the client-side bundle
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false, // Optionally exclude other modules like `path` if needed
        os: false,
      };
    }

    return config;
  },
};

export default nextConfig;
