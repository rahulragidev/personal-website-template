import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";

function ToolsSection({
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
			<ul role="list" className="mt-4 space-y-8 lg:mt-0">
				{children}
			</ul>
		</div>
	);
}

function Tool({
	title,
	href,
	children,
}: {
	title: string;
	href?: string;
	children: React.ReactNode;
}) {
	return (
		<li>
			<h3 className="text-body font-medium text-foreground">
				{href ? (
					<a href={href} className="hover:text-primary transition">
						{title}
					</a>
				) : (
					title
				)}
			</h3>
			<p className="mt-1 text-body/relaxed text-muted-foreground">
				{children}
			</p>
		</li>
	);
}

export const metadata = {
	title: "Uses",
	description:
		"My setup, my tools, and the stuff I actually use every day.",
};

export default function Uses() {
	return (
		<Container className="mt-9">
			<div className="max-w-2xl">
				<h1 className="text-heading font-bold text-foreground sm:text-heading-lg">
					My setup, my tools, and the stuff I actually use every day.
				</h1>
				<p className="mt-6 text-body text-muted-foreground">
					Nobody asks me about this stuff, but I like talking about it
					anyway. The weird thing about being a developer is that a day
					without coding feels like falling behind — especially with AI
					moving as fast as it is. Even resting feels like not being
					productive. Not sure if that&apos;s healthy, but here&apos;s
					everything I use to keep up.
				</p>
				<p className="mt-4 text-nav text-muted-foreground">
					Last updated January 2026
				</p>
			</div>
			<div className="mt-16 sm:mt-20">
				<ToolsSection title="Workstation">
					<Tool
						title="MacBook Pro M3"
						href="https://www.apple.com/in/macbook-pro/"
					>
						Apple Silicon changed everything for me. The M3 handles
						everything I throw at it without breaking a sweat, and the
						battery life means I can work from anywhere without hunting
						for a power outlet.
					</Tool>
					<Tool
						title="Samsung Smart Monitor M7 (43&quot;)"
						href="https://www.samsung.com/in/monitors/smart/smart-monitor-m7-43-inch-smart-tv-apps-4k-uhd-ls43fm700uwxxl/"
					>
						Honestly more of an entertainment screen than a workstation
						monitor. I bought it during COVID to watch shows and it stuck
						around. Not great as a monitor or a TV, but it works fine as
						a second screen since I do most of my work on the laptop anyway.
					</Tool>
					<Tool
						title="Apple Magic Keyboard"
						href="https://www.apple.com/in/shop/product/mxcl3hn/a/magic-keyboard-usb-c-us-english"
					>
						The base model without Touch ID — the Touch ID version costs
						extra and I didn&apos;t feel like paying for it. Low-profile,
						rechargeable, and nice to have a proper keyboard when
						I&apos;m at the desk.
					</Tool>
					<Tool
						title="Apple Magic Mouse"
						href="https://www.apple.com/in/shop/product/mxk53zm/a/magic-mouse-usb%E2%80%91c-white-multi-touch-surface"
					>
						I&apos;m in love with the design but I&apos;ll be honest — I
						barely use it. The MacBook trackpad does everything I need, so
						the Magic Mouse mostly sits on the desk looking pretty. Still
						don&apos;t regret buying it though.
					</Tool>
					<Tool
						title="IKEA RODULF Standing Desk"
						href="https://www.ikea.com/in/en/p/rodulf-desk-sit-stand-electric-white-s79581802/"
					>
						Electric sit-stand desk that reminds me to not sit for eight
						hours straight. The motor is quiet and the height memory
						presets make switching positions effortless.
					</Tool>
					<Tool
						title="IKEA LÅNGFJÄLL Chair"
						href="https://www.ikea.com/in/en/p/langfjaell-conference-chair-with-armrests-gunnared-beige-white-s89252792/"
					>
						Comfortable enough for long coding sessions without the
						absurd price tag of the usual ergonomic chair recommendations.
						The armrests are a nice bonus.
					</Tool>
				</ToolsSection>
				<Separator className="my-12" />
				<ToolsSection title="Development tools">
					<Tool title="Cursor" href="https://cursor.com">
						My daily driver for writing code. It&apos;s VS Code under the
						hood so all my extensions carry over, but the AI features on
						top make it feel like a completely different editor.
					</Tool>
					<Tool title="Ghostty" href="https://ghostty.org">
						GPU-accelerated terminal that feels genuinely native on macOS.
						Fast, zero-config out of the box, and the font rendering is
						the best I&apos;ve seen in a terminal.
					</Tool>
					<Tool title="Nushell" href="https://www.nushell.sh">
						A recent switch from zsh. Everything is structured data
						instead of raw text, which makes piping and filtering output
						so much more intuitive. Still getting used to the syntax but
						already hard to go back.
					</Tool>
					<Tool title="Google Chrome" href="https://www.google.com/chrome/">
						DevTools is still the best debugging environment for web
						development. The network panel, performance profiler, and
						Lighthouse audits are indispensable.
					</Tool>
				</ToolsSection>
				<Separator className="my-12" />
				<ToolsSection title="AI workflow">
					<Tool
						title="Claude Code"
						href="https://www.anthropic.com/claude-code"
					>
						Lives right inside my Cursor terminal. I use it for
						scaffolding features, refactoring across files, and writing
						commits — basically anything that touches more than a couple
						of files at once.
					</Tool>
					<Tool title="Claude Sonnet 4.5">
						My go-to for planning. I outline the feature or problem, and
						Sonnet drafts a step-by-step approach before I write any code.
						Keeps me from going down rabbit holes.
					</Tool>
					<Tool title="Claude Opus 4.5">
						The heavy lifter for implementation. When I need large,
						multi-file changes done right in one pass, Opus handles the
						complexity that lighter models miss.
					</Tool>
					<Tool title="Gemini Pro">
						My second opinion for code review and debugging. Sometimes I
						use it for planning too — getting a different model&apos;s
						perspective often catches blind spots.
					</Tool>
					<Tool title="ChatGPT 5.2">
						Another review and debugging lens. Bouncing the same problem
						off multiple models surfaces edge cases faster than sticking
						with one.
					</Tool>
				</ToolsSection>
				<Separator className="my-12" />
				<ToolsSection title="Productivity">
					<Tool title="Raycast" href="https://www.raycast.com">
						Replaced Spotlight for launching apps and running quick
						actions. I only use a fraction of what it can do, but even
						the free tier is worth it for clipboard history and window
						management alone.
					</Tool>
					<Tool title="Cal.com" href="https://cal.com">
						Open-source scheduling that just works. Clean booking pages,
						calendar sync, and I own my data. The free plan covers
						everything I need.
					</Tool>
					<Tool title="Google Meet" href="https://meet.google.com">
						No installs, no accounts required for guests, works in the
						browser. For meetings, the less friction the better.
					</Tool>
					<Tool title="Jotdo">
						A small local desktop app I built for myself. Today-centric
						todo list that automatically pulls overdue tasks into today
						and uses a date sidebar to browse past completed work.
					</Tool>
				</ToolsSection>
			</div>
		</Container>
	);
}
