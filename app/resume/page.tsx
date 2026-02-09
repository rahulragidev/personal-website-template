import { Download } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { resumeData } from "@/lib/resume-data";

export const metadata: Metadata = {
	title: "Resume",
	description: `${resumeData.contact.name} - ${resumeData.contact.title} Resume`,
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
	const { contact, summary, experience, skills, projects } = resumeData;

	return (
		<Container className="mt-16 sm:mt-32">
			<div className="max-w-2xl">
				{/* Header */}
				<div className="flex justify-between items-start flex-wrap gap-4 mb-2">
					<div>
						<h1 className="text-heading font-bold text-foreground">
							{contact.name}
						</h1>
						<p className="text-body text-muted-foreground">
							{contact.title}
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
					<span>{contact.location}</span>
					<span>•</span>
					<Link
						href={`mailto:${contact.email}`}
						className="text-primary hover:underline"
					>
						{contact.email}
					</Link>
					<span>•</span>
					<Link
						href={contact.website}
						className="text-primary hover:underline"
					>
						{contact.websiteLabel}
					</Link>
					<span>•</span>
					<Link
						href={contact.linkedin}
						className="text-primary hover:underline"
						target="_blank"
					>
						LinkedIn
					</Link>
					<span>•</span>
					<Link
						href={contact.github}
						className="text-primary hover:underline"
						target="_blank"
					>
						GitHub
					</Link>
				</div>

				<Separator className="my-6" />

				{/* Summary */}
				<Section title="Summary">
					<p className="text-nav text-muted-foreground">{summary}</p>
				</Section>

				{/* Experience */}
				<Section title="Experience">
					{experience.map((exp) => (
						<ExperienceItem
							key={exp.title}
							title={exp.title}
							company={exp.company}
							dates={exp.dates}
						>
							{exp.bullets.map((bullet) => (
								<li key={bullet}>{bullet}</li>
							))}
						</ExperienceItem>
					))}
				</Section>

				{/* Skills */}
				<Section title="Technical Skills">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-nav">
						{skills.map((skill) => (
							<div key={skill.label}>
								<span className="font-semibold text-foreground">
									{skill.label}:
								</span>{" "}
								<span className="text-muted-foreground">{skill.value}</span>
							</div>
						))}
					</div>
				</Section>

				{/* Projects */}
				<Section title="Projects">
					<div className="space-y-4">
						{projects.map((project) => (
							<div key={project.name}>
								{project.url ? (
									<Link
										href={project.url}
										className="font-semibold text-foreground hover:text-primary transition-colors"
										target="_blank"
									>
										{project.name}
									</Link>
								) : (
									<span className="font-semibold text-foreground">
										{project.name}
									</span>
								)}
								<p className="text-nav text-muted-foreground">
									{project.description}
								</p>
							</div>
						))}
					</div>
				</Section>
			</div>
		</Container>
	);
}
