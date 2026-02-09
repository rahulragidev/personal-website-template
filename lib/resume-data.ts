export interface ExperienceEntry {
	title: string;
	company?: string;
	dates: string;
	bullets: string[];
}

export interface SkillEntry {
	label: string;
	value: string;
}

export interface ProjectEntry {
	name: string;
	url?: string;
	description: string;
}

export const resumeData = {
	contact: {
		name: "Rahul Ragi",
		title: "Full-Stack Software Engineer",
		location: "Hyderabad, India",
		email: "iamrahulragi@gmail.com",
		website: "https://rahulragi.com",
		websiteLabel: "rahulragi.com",
		linkedin: "https://linkedin.com/in/rahul-ragi",
		github: "https://github.com/rahulragidev",
	},

	summary:
		"Full-stack engineer with 6+ years of experience building scalable web applications and APIs across enterprise and startup environments. Led development of omnichannel retail integrations for enterprise clients including Landmark Group and Hindustan Unilever. Currently architecting AI-powered SaaS products and consulting for early-stage startups on full-stack development, system design, and GenAI integration. Proficient in TypeScript/Node.js ecosystem with deep experience in Java/Spring Boot enterprise systems.",

	experience: [
		{
			title: "Freelance Full-Stack Developer",
			dates: "Sep 2023 - Present",
			bullets: [
				"Built and maintain a production-ready SaaS starter kit with Next.js 16, TurboRepo, BetterAuth, Stripe, and Hono. Cuts new project setup from weeks to days.",
				"Contributed to Rabbitholes.ai: established monorepo architecture, built documentation site with Fumadocs, and implemented coupon-to-license-key redemption system enabling third-party reseller distribution.",
				"Developed backend services using Hono including Firecrawl web scraping integration, RAG-based AI features with OpenAI embeddings, and various API routes as per product requirements.",
				"Hourly technical consultant for Exterview.ai (AI interview platform) and WeThink AI. Conducted code reviews, recommended monorepo architecture based on product direction, and implemented Notion note-taking integration for Gradientflow (WeThink AI).",
			],
		},
		{
			title: "Full-Stack Developer",
			company: "WTA GenAI / Askiy.ai",
			dates: "Sep 2024 - Dec 2024",
			bullets: [
				"Built Askiy.ai from scratch for CBTS. Enterprise sustainability platform for tracking carbon footprint, utility spending, and generating ESG compliance reports.",
				"Implemented Clerk authentication with webhook-based user provisioning, built REST APIs for utility spending and sustainability data tracking.",
			],
		},
		{
			title: "Software Engineer",
			company: "Vinculum Group",
			dates: "Jul 2018 - Sep 2023",
			bullets: [
				"Developed and maintained REST APIs for Vin eRetail, an omnichannel OMS/WMS platform processing 2M+ daily orders for enterprise clients including Landmark Group, SPAR India, and Hindustan Unilever.",
				"Led integration development for 15+ marketplace connectors (Amazon, Flipkart, Myntra), implementing real-time inventory sync, order routing logic, and fault-tolerant message queues.",
				"Embedded on-site at SPAR India HQ for 2 years: owned ETL pipeline development for POS/ERP data, built automated reporting system generating 50+ daily Excel/PDF reports, and collaborated directly with business stakeholders on sprint planning.",
				"Built internal tools for MDM teams enabling better data management workflows and automated audit report generation.",
			],
		},
	] satisfies ExperienceEntry[],

	skills: [
		{ label: "Languages", value: "TypeScript, JavaScript, Java, SQL, HTML/CSS" },
		{ label: "Frontend", value: "React, Next.js 16, Tailwind CSS, Zustand, React Query" },
		{ label: "Backend", value: "Node.js, Hono, Spring Boot, REST APIs, WebSockets" },
		{ label: "Databases", value: "PostgreSQL, MySQL, Redis, Convex, Drizzle ORM, Prisma" },
		{ label: "Infrastructure", value: "Vercel, AWS (S3, Lambda), Docker, TurboRepo, Git" },
		{ label: "AI/ML", value: "OpenAI API, LangChain, RAG, Embeddings, Prompt Engineering" },
	] satisfies SkillEntry[],

	projects: [
		{
			name: "PheroChain",
			url: "https://pherochain.com",
			description:
				"B2B vendor management platform for Indian retailers. Handles supplier onboarding, GST compliance, purchase orders, and ERP integration. Next.js, PostgreSQL, custom middleware for Tally/SAP sync.",
		},
		{
			name: "YeloChess",
			url: "https://yelochess.com",
			description:
				"Real-time chess coaching platform with reactive game sync using Convex database, integrated Lichess puzzle database for training exercises. Teaches 7 students weekly. Stack: Next.js, Chess.js, react-chessboard, Convex.",
		},
		{
			name: "Jotdo",
			description:
				"Privacy-first task manager with local-only storage using IndexedDB. Features automatic task rollover, daily focus view, and keyboard-driven UX. Built with React and Zustand for offline state management.",
		},
	] satisfies ProjectEntry[],
} as const;
