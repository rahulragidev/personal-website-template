import { type Metadata } from "next";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";

function TimelineEntry({
	date,
	title,
	company,
	children,
}: {
	date: string;
	title: string;
	company?: string;
	children: React.ReactNode;
}) {
	return (
		<div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-x-16">
			<p className="text-nav font-semibold text-primary lg:sticky lg:top-24 lg:self-start">
				{date}
			</p>
			<div className="mt-2 lg:mt-0">
				<h2 className="text-body font-semibold text-foreground">{title}</h2>
				{company && (
					<p className="mt-1 text-nav font-medium text-muted-foreground">
						{company}
					</p>
				)}
				<div className="mt-3 space-y-3 text-body/relaxed text-muted-foreground">
					{children}
				</div>
			</div>
		</div>
	);
}

export const metadata: Metadata = {
	title: "Changelog",
	description: "Where I've been and what I've been working on.",
};

export default function Changelog() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="max-w-2xl">
				<h1 className="text-heading font-bold text-foreground sm:text-heading-lg">
					Where I&apos;ve been and what I&apos;ve been working on.
				</h1>
				<p className="mt-6 text-body text-muted-foreground">
					A timeline of my career so far — from enterprise Java to
					full-stack TypeScript, with a few detours along the way.
				</p>
			</div>
			<div className="mt-16 sm:mt-20">
				<TimelineEntry
					date="Sep 2023 — Present"
					title="Freelance Full-Stack Developer"
				>
					<p>
						Building products for startups and my own projects. Created a
						SaaS starter kit using a Next.js monorepo with TurboRepo,
						integrating Stripe, Resend, Hono, and BetterAuth. Focused on
						shipping fast at minimal cost with maintainable architectures.
					</p>
					<p>
						Built Rabbitholes.ai — an infinite canvas that lets you have
						multiple connected AI conversations. Also working on
						Gigglestack.
					</p>
				</TimelineEntry>
				<Separator className="my-12" />
				<TimelineEntry
					date="Sep 2024 — Dec 2024"
					title="Full-Stack Developer"
					company="WTA GenAI — Askiy.ai"
				>
					<p>
						Worked on Askiy.ai, a sustainability and ESG tracking platform.
						Implemented Clerk authentication with webhooks for database
						synchronization. Built RESTful API endpoints for sustainability
						data management.
					</p>
				</TimelineEntry>
				<Separator className="my-12" />
				<TimelineEntry
					date="Jul 2018 — Sep 2023"
					title="Software Engineer"
					company="Vinculum Group"
				>
					<p>
						Five years of enterprise software development. Built supplier
						portal systems and REST API controllers with Spring Boot.
						Collaborated with Landmark Group, SPAR, and Hindustan Unilever
						on large-scale vendor management platforms.
					</p>
				</TimelineEntry>
				<Separator className="my-12" />
				<TimelineEntry
					date="Oct 2018 — Dec 2020"
					title="Software Engineer"
					company="SPAR India (on-site)"
				>
					<p>
						On-site at SPAR India in Bangalore. Built the Vendor Portal
						handling PO electronic data transfers, Spring Boot REST APIs,
						and client-side validations. Direct stakeholder collaboration
						on the ground.
					</p>
				</TimelineEntry>
			</div>
		</Container>
	);
}
