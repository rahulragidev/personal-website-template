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
			<p className="mt-1 text-body/relaxed text-muted-foreground">{children}</p>
		</li>
	);
}

export const metadata = {
	title: "Toolkit",
	description: "My setup, my tools, and the stuff I actually use every day.",
};

export default function Uses() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="max-w-2xl">
				<h1 className="text-heading font-bold text-foreground sm:text-heading-lg">
					My setup, my tools, and the stuff I actually use every day.
				</h1>
				<p className="mt-6 text-body text-muted-foreground">
					Most people skip these pages. If you&apos;re still here, you probably
					get it. AI moves fast, the tools change every week, and a day without
					coding feels like falling behind. Not sure if that&apos;s healthy, but
					here&apos;s everything I use to keep up. No one&apos;s paying me to
					list any of this. Just my way of saying thanks to the tools that
					actually help.
				</p>
				<p className="mt-4 text-nav text-muted-foreground">
					Last updated February 2026
				</p>
			</div>
			<div className="mt-16 sm:mt-20">
				<ToolsSection title="Workstation">
					<Tool
						title="MacBook Pro M3"
						href="https://www.apple.com/in/macbook-pro/"
					>
						Switched to Apple Silicon a while back. The M3 runs everything I
						need, stays cool, and the battery lasts long enough that I stopped
						carrying a charger around.
					</Tool>
					<Tool
						title="Samsung Smart Monitor M7 (43&quot;)"
						href="https://www.samsung.com/in/monitors/smart/smart-monitor-m7-43-inch-smart-tv-apps-4k-uhd-ls43fm700uwxxl/"
					>
						Honestly more of an entertainment screen than a workstation monitor.
						I bought it during COVID to watch shows and it stuck around. Not
						great as a monitor or a TV, but it works fine as a second screen
						since I do most of my work on the laptop anyway.
					</Tool>
					<Tool
						title="Apple Magic Keyboard"
						href="https://www.apple.com/in/shop/product/mxcl3hn/a/magic-keyboard-usb-c-us-english"
					>
						The base model without Touch ID. The Touch ID version costs extra
						and I didn&apos;t feel like paying for it. Low-profile,
						rechargeable, and nice to have a proper keyboard when I&apos;m at
						the desk.
					</Tool>
					<Tool
						title="Apple Magic Mouse"
						href="https://www.apple.com/in/shop/product/mxk53zm/a/magic-mouse-usb%E2%80%91c-white-multi-touch-surface"
					>
						I&apos;m in love with the design but I&apos;ll be honest, I barely
						use it. The MacBook trackpad does everything I need, so the Magic
						Mouse mostly sits on the desk looking pretty. Still don&apos;t
						regret buying it though.
					</Tool>
					<Tool
						title="IKEA RODULF Standing Desk"
						href="https://www.ikea.com/in/en/p/rodulf-desk-sit-stand-electric-white-s79581802/"
					>
						Got this to remind myself to stand up sometimes. The motor is quiet
						and I saved a couple height presets so switching takes one button
						press.
					</Tool>
					<Tool
						title="IKEA LÅNGFJÄLL Chair"
						href="https://www.ikea.com/in/en/p/langfjaell-conference-chair-with-armrests-gunnared-beige-white-s89252792/"
					>
						Comfortable enough for long sessions and doesn&apos;t cost a
						fortune like most ergonomic chairs people recommend. The armrests
						help.
					</Tool>
				</ToolsSection>
				<Separator className="my-12" />
				<ToolsSection title="Development tools">
					<Tool title="Cursor" href="https://cursor.com">
						Where I write code. It&apos;s basically VS Code so my extensions
						still work, but the AI stuff and MCP support on top make it way
						more useful.
					</Tool>
					<Tool title="Ghostty" href="https://ghostty.org">
						My terminal. Fast, looks good on macOS, and I didn&apos;t have to
						configure anything. The fonts render better than any other terminal
						I&apos;ve tried.
					</Tool>
					<Tool title="Nushell" href="https://www.nushell.sh">
						Switched from zsh recently. Everything comes out as structured data
						instead of text blobs, so filtering and piping actually makes sense.
						The syntax is different but I&apos;m getting used to it.
					</Tool>
					<Tool title="Google Chrome" href="https://www.google.com/chrome/">
						DevTools is still the best way to debug web stuff. I live in the
						network panel and performance tab.
					</Tool>
				</ToolsSection>
				<Separator className="my-12" />
				<ToolsSection title="AI assistants">
					<Tool
						title="Claude Code"
						href="https://www.anthropic.com/claude-code"
					>
						Runs in my terminal and does most of the heavy lifting. Scaffolding
						new features, refactoring stuff across files, writing commits. I
						hook it up to MCP servers so it can pull from Figma, docs, and run
						tests.
					</Tool>
					<Tool
						title="Claude Sonnet 4.5"
						href="https://www.anthropic.com/claude/sonnet"
					>
						What I use for planning. I describe what I want to build and it
						helps me think through the approach before I start writing code.
					</Tool>
					<Tool
						title="Claude Opus 4.5"
						href="https://www.anthropic.com/claude/opus"
					>
						For bigger changes that touch a lot of files. It gets things right
						more often than the smaller models when the task is complicated.
					</Tool>
					<Tool
						title="Gemini 3 Pro"
						href="https://gemini.google.com"
					>
						I ask it to review code or help debug when I want a second opinion.
						Different models notice different things.
					</Tool>
					<Tool
						title="ChatGPT 5.2"
						href="https://chatgpt.com"
					>
						Same idea, another set of eyes. I throw the same problem at
						multiple models and compare what they say.
					</Tool>
				</ToolsSection>
				<Separator className="my-12" />
				<ToolsSection title="MCP servers">
					<Tool
						title="Context7"
						href="https://context7.com"
					>
						Feeds current docs into Cursor and Claude Code so they stop
						hallucinating old APIs. I just type &quot;use context7&quot; and it
						grabs whatever library docs I need.
					</Tool>
					<Tool
						title="Figma MCP"
						href="https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server"
					>
						Lets Claude see my Figma files directly. I point it at a frame and
						it writes components that actually match the design. Saves a lot of
						back and forth.
					</Tool>
					<Tool
						title="CodeRabbit"
						href="https://coderabbit.ai"
					>
						Reviews my PRs automatically. It&apos;s caught real bugs before they
						made it to main, so I keep it running on everything now.
					</Tool>
					<Tool
						title="Playwright MCP"
						href="https://github.com/microsoft/playwright-mcp"
					>
						I tell Claude what to test and it writes and runs Playwright scripts
						for me. It reads the page structure directly instead of looking at
						screenshots, which works better than I expected.
					</Tool>
				</ToolsSection>
				<Separator className="my-12" />
				<ToolsSection title="Productivity">
					<Tool title="Raycast" href="https://www.raycast.com">
						Replaced Spotlight. I mostly use it for clipboard history and moving
						windows around, but it does a lot more that I haven&apos;t explored
						yet.
					</Tool>
					<Tool title="Rabbitholes" href="https://www.rabbitholes.ai">
						Where I do most of my AI thinking. Instead of one long chat thread,
						I spread conversations across a canvas and link them when they need
						shared context. Works with whatever model I want and keeps
						everything local.
					</Tool>
					<Tool title="Jotdo">
						A todo app I made for myself. It&apos;s just a list focused on today.
						Overdue stuff gets pulled forward automatically, and there&apos;s a
						sidebar to look back at what I finished on other days.
					</Tool>
				</ToolsSection>
			</div>
		</Container>
	);
}
