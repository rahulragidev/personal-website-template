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
	description: "sample description",

	// Site Settings
	url: "https://yourwebsite.com", // Your website URL
	language: "en",

	// Social Links (optional - add as needed)
	social: {
		// twitter: "https://twitter.com/yourhandle",
		// github: "https://github.com/yourusername",
		// linkedin: "https://linkedin.com/in/yourprofile",
		// email: "mailto:your@email.com",
	},
} as const;

// Helper function to generate metadata
export function getSiteMetadata() {
	return {
		title: {
			template: `%s - ${siteConfig.name}`,
			default: `${siteConfig.name} - ${siteConfig.title}`,
		},
		description: siteConfig.description,
	};
}
