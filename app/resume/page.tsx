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
						Full-stack developer. 6+ years building web apps and APIs. Started
						with Java at an enterprise company, now I work with TypeScript,
						Next.js, and Node.js. I do the frontend, the backend, and the
						integrations—auth, payments, email, that kind of thing.
					</p>
				</Section>

				{/* Experience */}
				<Section title="Experience">
					<ExperienceItem
						title="Freelance Full-Stack Developer"
						dates="Sep 2023 - Present"
					>
						<li>
							Built a SaaS starter kit I keep reusing. Next.js monorepo,
							BetterAuth, Stripe, Resend, Hono backend, Zod for validation.
						</li>
						<li>
							Contributing to Rabbitholes.ai. Set up the monorepo, wrote docs
							with Fumadocs, built AI features.
						</li>
						<li>
							Consulting for Exterview.ai and WeThink AI. Full-stack work,
							mostly shipping GenAI stuff.
						</li>
					</ExperienceItem>

					<ExperienceItem
						title="Full-Stack Developer"
						company="WTA GenAI / Askiy.ai"
						dates="Sep 2024 - Dec 2024"
					>
						<li>
							Built Askiy.ai for CBTS. Sustainability tracking and ESG
							reporting.
						</li>
						<li>
							Set up Clerk auth with webhook sync, built APIs for utility
							spending and sustainability data
						</li>
					</ExperienceItem>

					<ExperienceItem
						title="Software Engineer"
						company="Vinculum Group"
						dates="Jul 2018 - Sep 2023"
					>
						<li>
							Wrote APIs for an omnichannel SaaS platform. Clients included
							Landmark Group, SPAR, Hindustan Unilever.
						</li>
						<li>
							Data validation, payload mapping, coordinating with BAs on
							estimates. Java, Spring Boot, SQL.
						</li>
						<li>
							On-site at SPAR India for two years (Oct 2018 - Dec 2020). PDF/Excel
							exports, sprint planning, ETL pipelines for FTP data transfers.
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
								Vendor management for Indian retailers. Supplier onboarding, GST
								stuff, purchase orders. Plugs into ERPs.
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
								Chess app I built to teach kids. Play games and talk to students
								in real time.
							</p>
						</div>
						<div>
							<span className="font-semibold text-foreground">Jotdo</span>
							<p className="text-nav text-muted-foreground">
								Todo app I made for myself. Focused on today, pulls overdue
								stuff forward automatically. Data stays on your machine.
							</p>
						</div>
					</div>
				</Section>
			</div>
		</Container>
	);
}
