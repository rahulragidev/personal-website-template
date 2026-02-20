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
		title: "Senior Full-Stack Engineer",
		location: "Hyderabad, India",
		email: "iamrahulragi@gmail.com",
		website: "https://rahulragi.com",
		websiteLabel: "rahulragi.com",
		linkedin: "https://linkedin.com/in/rahul-ragi",
		github: "https://github.com/rahulragidev",
	},

	summary:
		"Senior full-stack engineer with 7+ years building and shipping production systems across enterprise retail and AI-native SaaS, focused on ERP and back-office integrations. Experienced in designing data synchronization pipelines, vendor and finance workflows, and multi-tenant SaaS connectors using Node.js, TypeScript, and cloud-native stacks. Comfortable owning integrations end-to-end, from requirements with business stakeholders to secure, observable, high-volume data flows between ERP and SaaS platforms.",

	experience: [
		{
			title: "Freelance Senior Full-Stack & Integration Engineer",
			dates: "Sep 2023 - Present",
			bullets: [
				"Co-engineered Rabbitholes.ai (2,000+ users), an AI-powered infinite canvas for branching LLM conversations. Architected a monorepo and RAG pipeline that reliably retrieves context across large conversation nodes for production users.",
				"Designed and implemented a coupon-to-license-key redemption API used by reseller partners (DealFuel, Product Canyon). Included secure server-side key generation and activation flows, directly enabling a new B2B revenue channel.",
				"Architected a modular monorepo SaaS starter kit (Next.js, TurboRepo, BetterAuth, Stripe, Hono) with isolated packages for auth, payments, API, and database. Optimized for multi-tenant SaaS products and AI-agent-driven development.",
				"Built PheroChain, a B2B vendor management platform for Indian retailers. Automated supplier onboarding, GST compliance, and purchase order lifecycle.",
				"Consulted for AI startups (Exterview.ai, WeThink AI), conducting architecture reviews and driving monorepo adoption to make codebases more observable and AI-agent-friendly. Established structured context files and consistent integration boundaries.",
			],
		},
		{
			title: "Full-Stack Developer",
			company: "WTA GenAI / Askiy.ai",
			dates: "Sep 2024 - Dec 2024",
			bullets: [
				"Delivered Askiy.ai MVP in 3 months, an enterprise sustainability platform for CBTS used to track carbon footprint, utility spend, and ESG KPIs across multiple facilities in a SaaS environment.",
				"Designed the relational data model with Drizzle ORM, enforcing end-to-end type safety from PostgreSQL through backend services to the React frontend. Eliminated entire classes of runtime type errors.",
				"Implemented Clerk-based authentication with webhook-driven user provisioning and organization/role management. Secured multi-tenant access to sustainability and financial reporting data.",
				"Built REST APIs for high-volume sustainability data ingestion and reporting. Included pagination, filtering, and aggregation endpoints tuned for analytics dashboards.",
			],
		},
		{
			title: "Software Engineer",
			company: "Vinculum Group",
			dates: "Jul 2018 - Sep 2023",
			bullets: [
				"Engineered supply-chain integration APIs for Vin eRetail, an omnichannel OMS/WMS platform used by enterprise retailers such as Landmark Group, SPAR India, and Hindustan Unilever. Handled order, inventory, and catalog synchronization at scale.",
				"Built and maintained ERP synchronization layers using EDI transactions, FTP-based CSV batch ingestion, and scheduled cron jobs. Kept OMS, WMS, and ERP systems in sync for orders, stock, and invoices.",
				"Embedded on-site at SPAR India HQ for 2 years across 120+ stores as primary technical liaison between buyers, department heads, commercial, and MDM teams. Shipped PO workflow automation, vendor onboarding flows, and 50+ automated daily reports that lowered manual reconciliation effort for finance and MDM teams.",
				"Developed data reconciliation tools and UI dashboards for MDM teams to validate data correctness between Vin eRetail and ERP systems. Surfaced discrepancies across purchase orders, invoices, and vendor master records for timely resolution.",
			],
		},
	] satisfies ExperienceEntry[],

	skills: [
		{ label: "Languages", value: "TypeScript, JavaScript, Java, SQL, HTML/CSS" },
		{ label: "Backend & Integrations", value: "Node.js, REST APIs, WebSockets, integration middleware, data synchronization pipelines, cron-based batch jobs" },
		{ label: "ERP & Finance Systems", value: "Oracle Fusion Cloud ERP, omnichannel OMS/WMS (Vin eRetail), vendor onboarding, purchase order and invoice workflows, data reconciliation tools" },
		{ label: "Frontend", value: "React, Next.js, Tailwind CSS, Zustand, React Query" },
		{ label: "Datastores", value: "PostgreSQL, MySQL, Redis, Convex, Drizzle ORM, Prisma" },
		{ label: "Infra & DevOps", value: "AWS (S3, Lambda), Vercel, Docker, TurboRepo, monorepo architecture" },
		{ label: "AI / Automation", value: "RAG pipelines, AI Provider API, LangChain, LLM context engineering, AI-agent-friendly architectures" },
	] satisfies SkillEntry[],

	projects: [
		{
			name: "PheroChain",
			url: "https://pherochain.com",
			description:
				"B2B vendor management platform for Indian retailers built on a custom monorepo SaaS starter kit. Automates supplier onboarding, GST compliance, purchase order lifecycle, and ERP integration with custom middleware for Tally/SAP sync. Stack: Next.js, PostgreSQL, Hono, Drizzle ORM.",
		},
		{
			name: "YeloChess",
			url: "https://yelochess.com",
			description:
				"Real-time chess training platform with reactive game synchronization powered by Convex database. Features integrated Lichess puzzle engine and live multiplayer sessions. Stack: Next.js, Chess.js, react-chessboard, Convex.",
		},
		{
			name: "Jotdo",
			description:
				"Privacy-first task manager with zero-server architecture using IndexedDB for local-only storage. Features automatic task rollover, daily focus view, and keyboard-driven UX. Stack: React, Zustand.",
		},
	] satisfies ProjectEntry[],
} as const;
