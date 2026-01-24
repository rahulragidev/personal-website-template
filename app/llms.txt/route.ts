import { siteConfig } from "@/lib/site-config";

/**
 * llms.txt - Information for AI/LLM systems
 *
 * This file provides context about the site for AI crawlers and language models.
 * Similar to robots.txt but specifically for AI systems.
 *
 * @see https://llmstxt.org/
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route
 */
export function GET() {
	const content = `# ${siteConfig.name}

> ${siteConfig.headline}

## About

${siteConfig.bio}

## Site Information

- **Name:** ${siteConfig.name}
- **Title:** ${siteConfig.title}
- **URL:** ${siteConfig.url}
- **Language:** ${siteConfig.language}

## Technical Stack

This portfolio is built with:
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Contact

For inquiries, please visit ${siteConfig.url}
`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
