import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
		formats: ["image/avif", "image/webp"],
		// Optimize image loading
		minimumCacheTTL: 60,
	},
	// Production optimizations
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	// Optimize production builds
	productionBrowserSourceMaps: false,
	// Reduce JavaScript bundle size - optimize package imports
	experimental: {
		optimizePackageImports: ["@base-ui/react"],
	},
};

export default nextConfig;
