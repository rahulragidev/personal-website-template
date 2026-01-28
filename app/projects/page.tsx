import { type Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/container";

const projects = [
	{
		name: "Gigglestack",
		description: "More on this soon.",
		link: { href: "#", label: "gigglestack.com" },
	},
	{
		name: "Jotdo",
		description:
			"A today-centric todo app I built for myself. Automatically pulls overdue tasks into today and uses a date sidebar to browse past completed work. Local-first, no cloud.",
	},
	{
		name: "Personal Website",
		description:
			"This site. Built with Next.js, TypeScript, and Tailwind CSS. Open source and designed to be forked.",
		link: { href: "#", label: "github.com" },
	},
];

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
					Most of these started as side projects to scratch my own itch.
					Some turned into something real, others are still works in
					progress. If something looks interesting, check it out.
				</p>
			</div>
			<ul
				role="list"
				className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3"
			>
				{projects.map((project) => (
					<li key={project.name} className="group relative flex flex-col">
						<h2 className="text-body font-semibold text-foreground">
							{project.link ? (
								<Link
									href={project.link.href}
									className="transition hover:text-primary"
								>
									{project.name}
								</Link>
							) : (
								project.name
							)}
						</h2>
						<p className="mt-2 text-body/relaxed text-muted-foreground">
							{project.description}
						</p>
						{project.link && (
							<p className="mt-4 flex items-center text-nav font-medium text-muted-foreground transition group-hover:text-primary">
								<ExternalLink className="h-4 w-4 flex-none" />
								<span className="ml-2">{project.link.label}</span>
							</p>
						)}
					</li>
				))}
			</ul>
		</Container>
	);
}
