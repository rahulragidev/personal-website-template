import type { Metadata } from "next";

/**
 * Site Configuration
 *
 * This is the single source of truth for all site data.
 * Edit this file to update your personal information across the entire website.
 */

export const siteConfig = {
	// Personal Information
	name: "Rahul Ragi",
	title: "Software Engineer",
	description:
		"Full-stack developer specializing in Next.js, TypeScript, and modern web technologies.",

	// Hero / Landing
	headline: "I build things, break things, and occasionally play chess.",
	bio: "I'm Rahul Ragi — a software engineer based in Hyderabad, India. I spend most of my time building with Next.js, TypeScript, and whatever AI tooling is new this week. When I'm not coding, I'm probably playing chess or convincing myself that my latest side project is the one that'll stick.",

	// Site Settings
	url: "https://rahulragi.com", // Your website URL (update this!)
	language: "en",
	locale: "en_US",

	// Social Links (optional - add as needed)
	social: {
		twitter: "@iamrahulragi", // Twitter handle for cards
		// github: "https://github.com/yourusername",
		// linkedin: "https://linkedin.com/in/yourprofile",
		// email: "mailto:your@email.com",
	},

	// Open Graph Image (for social sharing)
	// Create a 1200x630 image and place it in /public/og.png
	ogImage: "/og.png",
} as const;

/**
 * Generate metadata for the site
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata
 */
export function getSiteMetadata(): Metadata {
	return {
		title: {
			template: `%s - ${siteConfig.name}`,
			default: `${siteConfig.name} - ${siteConfig.title}`,
		},
		description: siteConfig.description,
		metadataBase: new URL(siteConfig.url),

		// Open Graph metadata
		// @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
		openGraph: {
			title: `${siteConfig.name} - ${siteConfig.title}`,
			description: siteConfig.description,
			url: siteConfig.url,
			siteName: siteConfig.name,
			locale: siteConfig.locale,
			type: "website",
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: `${siteConfig.name} - ${siteConfig.title}`,
				},
			],
		},

		// Twitter Card metadata
		// @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#twitter
		twitter: {
			card: "summary_large_image",
			title: `${siteConfig.name} - ${siteConfig.title}`,
			description: siteConfig.description,
			creator: siteConfig.social.twitter,
			images: [siteConfig.ogImage],
		},

		// Robots configuration
		// @see https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
	};
}
