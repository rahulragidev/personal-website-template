import { type Metadata } from "next";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";

function SkillSection({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-x-16">
			<h2 className="text-body font-semibold text-primary lg:sticky lg:top-24 lg:self-start">
				{title}
			</h2>
			<ul role="list" className="mt-4 flex flex-wrap gap-2 lg:mt-0">
				{children}
			</ul>
		</div>
	);
}

function Skill({ children }: { children: React.ReactNode }) {
	return (
		<li className="text-nav font-medium text-foreground bg-muted px-3 py-1.5">
			{children}
		</li>
	);
}

export const metadata: Metadata = {
	title: "Skills",
	description:
		"Technologies and tools I work with on a daily basis.",
};

export default function Skills() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="max-w-2xl">
				<h1 className="text-heading font-bold text-foreground sm:text-heading-lg">
					Technologies and tools I work with.
				</h1>
				<p className="mt-6 text-body text-muted-foreground">
					I&apos;m a full-stack engineer who leans heavily into the JavaScript
					ecosystem. Most of my work these days is in Next.js monorepos
					with TypeScript, but I spent years writing Java and Spring Boot
					before that.
				</p>
			</div>
			<div className="mt-16 sm:mt-20">
				<SkillSection title="Frontend">
					<Skill>Next.js</Skill>
					<Skill>React</Skill>
					<Skill>TypeScript</Skill>
					<Skill>Tailwind CSS</Skill>
					<Skill>ShadCN UI</Skill>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="Backend">
					<Skill>Hono</Skill>
					<Skill>Node.js</Skill>
					<Skill>Java</Skill>
					<Skill>Spring Boot</Skill>
					<Skill>REST APIs</Skill>
					<Skill>GraphQL</Skill>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="Databases & ORMs">
					<Skill>Drizzle</Skill>
					<Skill>Prisma</Skill>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="Tools & Platforms">
					<Skill>TurboRepo</Skill>
					<Skill>Vercel</Skill>
					<Skill>Zod</Skill>
					<Skill>Stripe</Skill>
					<Skill>BetterAuth</Skill>
					<Skill>Resend</Skill>
					<Skill>Clerk</Skill>
					<Skill>Git</Skill>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="AI Tooling">
					<Skill>Claude Code</Skill>
					<Skill>Cursor</Skill>
					<Skill>Claude Opus 4.5</Skill>
					<Skill>Claude Sonnet 4.5</Skill>
					<Skill>Gemini Pro</Skill>
					<Skill>ChatGPT 5.2</Skill>
				</SkillSection>
			</div>
		</Container>
	);
}
