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
					Started out writing Java at an enterprise company for five years, then
					went freelance. Now I mostly build web apps with TypeScript, care a
					lot about end-to-end type safety, and work on whatever interests me.
				</p>
			</div>
			<div className="mt-16 sm:mt-20">
				<TimelineEntry
					date="Sep 2023 - Present"
					title="Freelance Full-Stack Developer"
				>
					<p>
						Went freelance after five years of enterprise Java. Built a SaaS
						starter kit I keep reusing. Next.js monorepo with BetterAuth,
						Stripe, Resend, Hono backend, all wired up with Zod. The boring
						stuff you need every time, but done once.
					</p>
					<p>
						Contributing to Rabbitholes.ai. Set up the monorepo, wrote the docs
						using Fumadocs with an OpenAI chat integration, and built out some
						of the AI features.
					</p>
					<p>
						Also doing part-time consulting for Exterview.ai, an AI hiring
						platform with voice interviews, resume parsing, fraud detection, the
						whole enterprise recruitment stack. And WeThink AI, helping them
						ship GenAI products for their clients. Mostly full-stack work,
						keeping things moving.
					</p>
				</TimelineEntry>
				<Separator className="my-12" />
				<TimelineEntry
					date="Sep 2024 - Dec 2024"
					title="Full-Stack Developer"
					company="WTA GenAI / Askiy.ai"
				>
					<p>
						Short contract building Askiy.ai for CBTS. Sustainability tracking
						and ESG reporting. Set up Clerk auth with webhook sync, built the
						APIs for utility spending and sustainability data. Lots of forms.
					</p>
				</TimelineEntry>
				<Separator className="my-12" />
				<TimelineEntry
					date="Jul 2018 - Sep 2023"
					title="Software Engineer"
					company="Vinculum Group"
				>
					<p>
						Five years at an omnichannel SaaS company. Spent most of my time
						writing APIs. Figure out what data the client needs, map it to what
						the database has, validate the incoming payload, handle the edge
						cases, return something useful. Coordinated with BAs on effort
						estimates, dealt with the daily chaos of high-volume ecommerce
						clients like Landmark Group, SPAR, Hindustan Unilever. Java, Spring
						Boot, SQL. This is where I learned why type safety matters. Writing
						DTOs and validation annotations to catch bad data before it breaks
						something downstream. Still use that thinking today, just with Zod
						instead of Java.
					</p>
				</TimelineEntry>
				<Separator className="my-12" />
				<TimelineEntry
					date="Oct 2018 - Dec 2020"
					title="Software Engineer"
					company="SPAR India (on-site)"
				>
					<p>
						Got sent to work on-site at SPAR in Bangalore for two years as their
						SPOC. Added features like PDF and Excel exports for vendor data,
						handled bug fixes and maintenance. Collected requirements, planned
						sprints, coordinated with the dev team back in Noida. Built the data
						transfer stuff. ETDs and CSV files dropped in FTP, pick them up,
						consume the data, show it in the UI. Good experience being the
						bridge between users and the team.
					</p>
				</TimelineEntry>
			</div>
		</Container>
	);
}
