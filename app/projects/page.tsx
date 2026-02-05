import { type Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";

function ProjectEntry({
	name,
	href,
	children,
}: {
	name: string;
	href?: string;
	children: React.ReactNode;
}) {
	return (
		<div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-x-16">
			<h2 className="text-body font-semibold text-primary lg:sticky lg:top-24 lg:self-start">
				{href ? (
					<Link
						href={href}
						className="transition hover:text-foreground"
						target="_blank"
						rel="noopener noreferrer"
					>
						{name}
					</Link>
				) : (
					name
				)}
			</h2>
			<div className="mt-2 lg:mt-0">
				<div className="space-y-3 text-body/relaxed text-muted-foreground">
					{children}
				</div>
			</div>
		</div>
	);
}

export const metadata: Metadata = {
	title: "Projects",
	description: "Things I've built, shipped, or am still tinkering with.",
};

export default function Projects() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="max-w-2xl">
				<h1 className="text-heading font-bold text-foreground sm:text-heading-lg">
					Things I&apos;ve built, shipped, or am still tinkering with.
				</h1>
				<p className="mt-6 text-body text-muted-foreground">
					Most of these started as side projects. Some turned into something
					real, others are still works in progress.
				</p>
			</div>
			<div className="mt-16 sm:mt-20">
				<ProjectEntry name="YeloChess" href="https://www.yelochess.com">
					<p>
						A chess app I built to teach chess to kids. Lets me play friendly
						games with students while talking to them in real time.
					</p>
				</ProjectEntry>
				<Separator className="my-12" />
				<ProjectEntry name="PheroChain" href="https://www.pherochain.com/en">
					<p>
						Vendor management for Indian retailers. Supplier onboarding, GST
						stuff, purchase orders. Plugs into ERPs.
					</p>
				</ProjectEntry>
				<Separator className="my-12" />
				<ProjectEntry name="Jotdo">
					<p>
						Todo app I built for myself. Focused on today, pulls overdue stuff
						forward automatically. Data stays on your machine.
					</p>
				</ProjectEntry>
			</div>
		</Container>
	);
}
