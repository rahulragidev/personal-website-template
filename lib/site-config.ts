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
		"Full-stack developer working with Next.js, TypeScript, and whatever ships faster.",

	// Hero / Landing
	headline:
		"Full-stack developer. I help startups ship without burning runway.",
	bio: "I'm Rahul Ragi, based in Hyderabad. I build web apps with Next.js and TypeScript. Auth, payments, email, the boring stuff that takes forever if you build it wrong. I've done it enough times that I can do it fast. I also play rapid chess.",

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
