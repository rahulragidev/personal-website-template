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
			<div className="mt-2 lg:mt-0 space-y-3 text-body/relaxed text-muted-foreground">
				{children}
			</div>
		</div>
	);
}

export const metadata: Metadata = {
	title: "Skills",
	description: "How I think about building software.",
};

export default function Skills() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="max-w-2xl">
				<h1 className="text-heading font-bold text-foreground sm:text-heading-lg">
					How I think about building software.
				</h1>
				<p className="mt-6 text-body text-muted-foreground">
					Tools change. The way I think about problems doesn&apos;t. I care
					about understanding the layers: what runs in the browser, what runs
					on the server, how data moves between them. Everything else is just
					picking the right tool for the job.
				</p>
			</div>
			<div className="mt-16 sm:mt-20">
				<SkillSection title="Frontend">
					<p>
						Code that runs in the browser. HTML for structure, CSS for styles,
						JavaScript for interactivity. I use React and Next.js because
						they&apos;re fast to build with and the ecosystem is huge.
						TypeScript because I like knowing what shape my data is before it
						breaks something. Tailwind because I don&apos;t want to name CSS
						classes.
					</p>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="Backend">
					<p>
						Code that runs on a server. When a request comes in, figure out
						what the client needs, validate the payload, talk to the database,
						return something useful. I used to write this in Java with Spring
						Boot. Now I use Node.js with Hono or Next.js API routes. Same
						ideas, different syntax.
					</p>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="Data">
					<p>
						Where things get stored. Databases hold the information that
						persists between requests. I use Drizzle or Prisma to talk to them
						without writing raw SQL everywhere. Zod to validate data at the
						edges. JSON to move data between client and server. The goal is
						type safety from the database to the UI.
					</p>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="Infrastructure">
					<p>
						Where the code actually runs. Vercel for hosting because deploys
						are fast and I don&apos;t have to think about servers. TurboRepo
						for monorepos when I have multiple apps sharing code. Git for
						version control. The boring stuff that just needs to work.
					</p>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="Third-party services">
					<p>
						Things I plug in instead of building from scratch. BetterAuth or
						Clerk for authentication. Stripe for payments. Resend for email.
						These are solved problems. I&apos;d rather integrate them in a day
						than spend weeks reinventing them.
					</p>
				</SkillSection>
				<Separator className="my-12" />
				<SkillSection title="AI tooling">
					<p>
						How I work now. Claude Code in the terminal for scaffolding and
						refactoring. Cursor for writing code with context. I throw problems
						at multiple models and compare what they say. The models are tools.
						I still need to know if what they output actually makes sense.
					</p>
				</SkillSection>
			</div>
		</Container>
	);
}
