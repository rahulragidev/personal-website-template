import Link from "next/link";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";

function NavLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="text-nav text-muted-foreground transition hover:text-primary"
		>
			{children}
		</Link>
	);
}

export function Footer() {
	return (
		<footer className="mt-32 flex-none">
			<Container>
				<Separator />
				<div className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
					<nav className="flex gap-x-6">
						<NavLink href="/about">About</NavLink>
						<NavLink href="/articles">Articles</NavLink>
						<NavLink href="/projects">Projects</NavLink>
						<NavLink href="/speaking">Speaking</NavLink>
						<NavLink href="/toolkit">Toolkit</NavLink>
					</nav>
					<p className="text-nav text-muted-foreground">
						&copy; {new Date().getFullYear()} {siteConfig.name}. All rights
						reserved.
					</p>
				</div>
			</Container>
		</footer>
	);
}
