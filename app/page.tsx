import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/container";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/lib/site-config";
import portraitImage from "@/public/image1.jpg";

function SocialLink({
	href,
	icon: Icon,
	children,
}: {
	href: string;
	icon: React.ComponentType<{ className?: string }>;
	children: React.ReactNode;
}) {
	return (
		<li>
			<Link
				href={href}
				className="group flex items-center text-nav font-medium text-foreground transition hover:text-primary"
			>
				<Icon className="h-5 w-5 flex-none text-muted-foreground transition group-hover:text-primary" />
				<span className="ml-4">{children}</span>
			</Link>
		</li>
	);
}

function GitHubIcon({ className }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
			<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
		</svg>
	);
}

function LinkedInIcon({ className }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
			<path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715ZM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.666V9.75H8.34v8.589ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003Z" />
		</svg>
	);
}

function XIcon({ className }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
			<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
		</svg>
	);
}

export default function Page() {
	return (
		<Container className="mt-16 sm:mt-32">
			<div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
				<div className="lg:pl-20">
					<div className="max-w-xs px-2.5 lg:max-w-none">
						<Image
							src={portraitImage}
							alt={siteConfig.name}
							sizes="(min-width: 1024px) 32rem, 20rem"
							className="aspect-square rotate-2 bg-muted object-cover"
						/>
					</div>
				</div>
				<div className="lg:order-first lg:row-span-2">
					<h1 className="text-heading font-bold text-foreground sm:text-heading-lg">
						{siteConfig.headline}
					</h1>
					<div className="mt-6 space-y-7 text-body text-muted-foreground">
						<p>{siteConfig.bio}</p>
					</div>
				</div>
				<div className="lg:pl-20">
					<ul role="list" className="space-y-4">
						<SocialLink href="#" icon={XIcon}>
							Follow on X
						</SocialLink>
						<SocialLink href="#" icon={GitHubIcon}>
							Follow on GitHub
						</SocialLink>
						<SocialLink href="#" icon={LinkedInIcon}>
							Follow on LinkedIn
						</SocialLink>
						<Separator className="my-6" />
						<SocialLink href="mailto:your@email.com" icon={Mail}>
							your@email.com
						</SocialLink>
					</ul>
				</div>
			</div>
		</Container>
	);
}
