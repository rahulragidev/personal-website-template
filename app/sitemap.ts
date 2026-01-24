import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

/**
 * Sitemap configuration
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteConfig.url,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		// Add more pages as your site grows:
		// {
		//   url: `${siteConfig.url}/about`,
		//   lastModified: new Date(),
		//   changeFrequency: 'monthly',
		//   priority: 0.8,
		// },
		// {
		//   url: `${siteConfig.url}/work`,
		//   lastModified: new Date(),
		//   changeFrequency: 'weekly',
		//   priority: 0.8,
		// },
	];
}
