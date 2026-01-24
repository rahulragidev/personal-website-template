import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Robots.txt configuration
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${siteConfig.url}/sitemap.xml`,
	};
}
