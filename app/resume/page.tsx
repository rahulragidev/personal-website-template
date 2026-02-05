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
						Full-stack developer with 6+ years of experience building web
						applications and APIs. Started with enterprise Java, now
						specializing in TypeScript, Next.js, and Node.js. I help startups
						ship fast without burning runway. Strong focus on type safety, clean
						architecture, and integrating third-party services like auth,
						payments, and email.
					</p>
				</Section>

				{/* Experience */}
				<Section title="Experience">
					<ExperienceItem
						title="Freelance Full-Stack Developer"
						dates="Sep 2023 - Present"
					>
						<li>
							Built reusable SaaS starter kit with Next.js monorepo, BetterAuth,
							Stripe payments, Resend email, and Hono backend with end-to-end
							type safety using Zod
						</li>
						<li>
							Contributing to Rabbitholes.ai: set up monorepo architecture,
							built documentation site with Fumadocs and OpenAI chat
							integration, developed AI features for infinite canvas platform
						</li>
						<li>
							Consulting for Exterview.ai (AI hiring platform with voice
							interviews, resume parsing, fraud detection) and WeThink AI (GenAI
							products)
						</li>
					</ExperienceItem>

					<ExperienceItem
						title="Full-Stack Developer"
						company="WTA GenAI / Askiy.ai"
						dates="Sep 2024 - Dec 2024"
					>
						<li>
							Built Askiy.ai for CBTS: AI-powered platform for tracking
							sustainability metrics and ESG reporting
						</li>
						<li>
							Implemented Clerk authentication with webhook sync and RESTful
							APIs for utility spending and sustainability data
						</li>
					</ExperienceItem>

					<ExperienceItem
						title="Software Engineer"
						company="Vinculum Group"
						dates="Jul 2018 - Sep 2023"
					>
						<li>
							Developed APIs for omnichannel SaaS platform serving high-volume
							ecommerce clients including Landmark Group, SPAR, and Hindustan
							Unilever
						</li>
						<li>
							Built data validation pipelines, coordinated with BAs on effort
							estimates, and handled payload mapping between client requirements
							and database schemas
						</li>
						<li>
							On-site SPOC at SPAR India (Oct 2018 - Dec 2020): led feature
							development including PDF/Excel exports, managed sprints, built
							ETL pipelines for FTP-based data transfers
						</li>
					</ExperienceItem>
				</Section>

				{/* Skills */}
				<Section title="Skills">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-nav">
						<div>
							<span className="font-semibold text-foreground">Frontend:</span>{" "}
							<span className="text-muted-foreground">
								React, Next.js, TypeScript, Tailwind CSS
							</span>
						</div>
						<div>
							<span className="font-semibold text-foreground">Backend:</span>{" "}
							<span className="text-muted-foreground">
								Node.js, Hono, Java, Spring Boot
							</span>
						</div>
						<div>
							<span className="font-semibold text-foreground">Data:</span>{" "}
							<span className="text-muted-foreground">
								PostgreSQL, Drizzle, Prisma, Zod
							</span>
						</div>
						<div>
							<span className="font-semibold text-foreground">
								Infrastructure:
							</span>{" "}
							<span className="text-muted-foreground">
								Vercel, Git, TurboRepo
							</span>
						</div>
						<div className="sm:col-span-2">
							<span className="font-semibold text-foreground">
								Integrations:
							</span>{" "}
							<span className="text-muted-foreground">
								Clerk, BetterAuth, Stripe, Resend, OpenAI
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
								Vendor management system for Indian retailers handling supplier
								onboarding, GST reconciliation, and purchase order workflows
								with ERP integrations
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
								Real-time chess teaching platform enabling live games and
								communication with students
							</p>
						</div>
						<div>
							<span className="font-semibold text-foreground">Jotdo</span>
							<p className="text-nav text-muted-foreground">
								Local-first, today-centric todo app with automatic overdue task
								management and date-based navigation
							</p>
						</div>
					</div>
				</Section>
			</div>
		</Container>
	);
}
