import { Download } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
	title: "Resume",
	description: "Rahul Ragi - Full-Stack Software Engineer Resume",
};

function Section({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="mb-8">
			<h2 className="text-body font-bold text-foreground uppercase tracking-wider border-b border-foreground pb-2 mb-4">
				{title}
			</h2>
			{children}
		</div>
	);
}

function ExperienceItem({
	title,
	company,
	dates,
	children,
}: {
	title: string;
	company?: string;
	dates: string;
	children: React.ReactNode;
}) {
	return (
		<div className="mb-6">
			<div className="flex justify-between items-start flex-wrap gap-2">
				<h3 className="text-body font-semibold text-foreground">{title}</h3>
				<span className="text-nav text-muted-foreground">{dates}</span>
			</div>
			{company && (
				<p className="text-nav text-muted-foreground mb-2">{company}</p>
			)}
			<ul className="list-disc list-outside ml-4 space-y-1 text-nav text-muted-foreground">
				{children}
			</ul>
		</div>
	);
}

export default function ResumePage() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="max-w-2xl">
				{/* Header */}
				<div className="flex justify-between items-start flex-wrap gap-4 mb-2">
					<div>
						<h1 className="text-heading font-bold text-foreground">
							Rahul Ragi
						</h1>
						<p className="text-body text-muted-foreground">
							Full-Stack Software Engineer
						</p>
					</div>
					<Link
						href="/api/resume"
						className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-nav font-medium rounded-md hover:bg-primary/90 transition-colors"
					>
						<Download className="h-4 w-4" />
						Download PDF
					</Link>
				</div>

				<div className="flex flex-wrap gap-x-4 gap-y-1 text-nav text-muted-foreground mb-8">
					<span>Hyderabad, India</span>
					<span>•</span>
					<Link
						href="mailto:rahulragi@gigglestack.com"
						className="text-primary hover:underline"
					>
						rahulragi@gigglestack.com
					</Link>
					<span>•</span>
					<Link
						href="https://rahulragi.com"
						className="text-primary hover:underline"
					>
						rahulragi.com
					</Link>
					<span>•</span>
					<Link
						href="https://linkedin.com/in/rahul-ragi"
						className="text-primary hover:underline"
						target="_blank"
					>
						LinkedIn
					</Link>
					<span>•</span>
					<Link
						href="https://github.com/rahulragidev"
						className="text-primary hover:underline"
						target="_blank"
					>
						GitHub
					</Link>
				</div>

				<Separator className="my-6" />

				{/* Summary */}
				<Section title="Summary">
					<p className="text-nav text-muted-foreground">
						Full-stack engineer with 6+ years of experience building scalable
						web applications and APIs across enterprise and startup
						environments. Led development of omnichannel retail integrations
						processing millions of daily transactions for clients including
						Landmark Group and Hindustan Unilever. Currently architecting
						AI-powered SaaS products and consulting for early-stage startups on
						full-stack development, system design, and GenAI integration.
						Proficient in TypeScript/Node.js ecosystem with deep experience in
						Java/Spring Boot enterprise systems.
					</p>
				</Section>

				{/* Experience */}
				<Section title="Experience">
					<ExperienceItem
						title="Freelance Full-Stack Developer"
						dates="Sep 2023 - Present"
					>
						<li>
							Architected and maintain a production-grade SaaS boilerplate using
							Next.js 14, TurboRepo monorepo, BetterAuth, Stripe subscriptions,
							and Hono API layer—reducing new project setup from weeks to days.
						</li>
						<li>
							Core contributor to Rabbitholes.ai (1,800+ users): established
							monorepo architecture, built documentation site with Fumadocs, and
							implemented coupon-to-license-key redemption system enabling
							third-party reseller distribution.
						</li>
						<li>
							Developed backend services using Hono including Firecrawl web
							scraping integration, RAG-based AI features with OpenAI embeddings,
							and various API routes as per product requirements.
						</li>
						<li>
							Technical consultant for Exterview.ai (AI interview platform) and
							WeThink AI—delivered end-to-end features including real-time
							transcription, LLM-powered analysis, and custom evaluation
							pipelines.
						</li>
					</ExperienceItem>

					<ExperienceItem
						title="Full-Stack Developer"
						company="WTA GenAI / Askiy.ai"
						dates="Sep 2024 - Dec 2024"
					>
						<li>
							Built Askiy.ai from ground up for CBTS—an enterprise
							sustainability platform enabling organizations to track carbon
							footprint, utility spending, and generate automated ESG compliance
							reports.
						</li>
						<li>
							Implemented Clerk authentication with webhook-based user
							provisioning, built REST APIs for utility spending and
							sustainability data tracking.
						</li>
					</ExperienceItem>

					<ExperienceItem
						title="Software Engineer"
						company="Vinculum Group"
						dates="Jul 2018 - Sep 2023"
					>
						<li>
							Developed and maintained REST APIs for Vin eRetail, an omnichannel
							OMS/WMS platform processing 2M+ daily orders for enterprise clients
							including Landmark Group (6,000+ stores), SPAR India, and Hindustan
							Unilever.
						</li>
						<li>
							Led integration development for 15+ marketplace connectors (Amazon,
							Flipkart, Myntra), implementing real-time inventory sync, order
							routing logic, and fault-tolerant message queues.
						</li>
						<li>
							Embedded on-site at SPAR India HQ for 2 years: owned ETL pipeline
							development for POS/ERP data, built automated reporting system
							generating 50+ daily Excel/PDF reports, and collaborated directly
							with business stakeholders on sprint planning.
						</li>
						<li>
							Built internal tools for MDM teams enabling better data management
							workflows and automated audit report generation.
						</li>
					</ExperienceItem>
				</Section>

				{/* Skills */}
				<Section title="Technical Skills">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-nav">
						<div>
							<span className="font-semibold text-foreground">Languages:</span>{" "}
							<span className="text-muted-foreground">
								TypeScript, JavaScript, Java, SQL, HTML/CSS
							</span>
						</div>
						<div>
							<span className="font-semibold text-foreground">Frontend:</span>{" "}
							<span className="text-muted-foreground">
								React, Next.js 14, Tailwind CSS, Zustand, React Query
							</span>
						</div>
						<div>
							<span className="font-semibold text-foreground">Backend:</span>{" "}
							<span className="text-muted-foreground">
								Node.js, Hono, Spring Boot, REST APIs, WebSockets
							</span>
						</div>
						<div>
							<span className="font-semibold text-foreground">Databases:</span>{" "}
							<span className="text-muted-foreground">
								PostgreSQL, MySQL, Redis, Drizzle ORM, Prisma
							</span>
						</div>
						<div>
							<span className="font-semibold text-foreground">
								Infrastructure:
							</span>{" "}
							<span className="text-muted-foreground">
								Vercel, AWS (S3, Lambda), Docker, TurboRepo, Git
							</span>
						</div>
						<div>
							<span className="font-semibold text-foreground">AI/ML:</span>{" "}
							<span className="text-muted-foreground">
								OpenAI API, LangChain, RAG, Embeddings, Prompt Engineering
							</span>
						</div>
					</div>
				</Section>

				{/* Projects */}
				<Section title="Projects">
					<div className="space-y-4">
						<div>
							<Link
								href="https://pherochain.com"
								className="font-semibold text-foreground hover:text-primary transition-colors"
								target="_blank"
							>
								PheroChain
							</Link>
							<p className="text-nav text-muted-foreground">
								B2B vendor management platform for Indian retailers—handles
								supplier onboarding, GST compliance verification, purchase order
								workflows, and ERP integration. Built with Next.js, PostgreSQL,
								and custom middleware for Tally/SAP data sync.
							</p>
						</div>
						<div>
							<Link
								href="https://yelochess.com"
								className="font-semibold text-foreground hover:text-primary transition-colors"
								target="_blank"
							>
								YeloChess
							</Link>
							<p className="text-nav text-muted-foreground">
								Real-time chess coaching platform with reactive game sync using
								Convex database, integrated Lichess puzzle database for training
								exercises. Teaches 20+ students weekly. Stack: Next.js,
								Chess.js, react-chessboard, Convex.
							</p>
						</div>
						<div>
							<span className="font-semibold text-foreground">Jotdo</span>
							<p className="text-nav text-muted-foreground">
								Privacy-first task manager with local-only storage using
								IndexedDB. Features automatic task rollover, daily focus view,
								and keyboard-driven UX. Built with React and Zustand for offline
								state management.
							</p>
						</div>
					</div>
				</Section>
			</div>
		</Container>
	);
}
