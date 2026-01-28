"use client";

import {
	Popover,
	PopoverBackdrop,
	PopoverButton,
	PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/container";
import avatarImage from "@/public/image1.jpg";

function MobileNavItem({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<li>
			<PopoverButton as={Link} href={href} className="block py-2">
				{children}
			</PopoverButton>
		</li>
	);
}

function MobileNavigation(
	props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
	return (
		<Popover {...props}>
			<PopoverButton className="group flex rotate-2 items-center bg-background/90 px-4 py-2 text-nav font-medium text-foreground shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-background/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
				Menu
				<ChevronDown className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
			</PopoverButton>
			<PopoverBackdrop
				transition
				className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
			/>
			<PopoverPanel
				focus
				transition
				className="fixed inset-x-4 top-8 z-50 origin-top bg-background p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
			>
				<div className="flex flex-row-reverse items-center justify-between">
					<PopoverButton aria-label="Close menu" className="-m-1 p-1">
						<X className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
					</PopoverButton>
					<h2 className="text-nav font-medium text-zinc-600 dark:text-zinc-400">
						Navigation
					</h2>
				</div>
				<nav className="mt-6">
					<ul className="-my-2 divide-y divide-zinc-100 text-body text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
						<MobileNavItem href="/skills">Skills</MobileNavItem>
						<MobileNavItem href="/projects">Projects</MobileNavItem>
						<MobileNavItem href="/changelog">Changelog</MobileNavItem>
						<MobileNavItem href="/toolkit">Toolkit</MobileNavItem>
					</ul>
				</nav>
			</PopoverPanel>
		</Popover>
	);
}

function NavItem({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	const isActive = usePathname() === href;

	return (
		<li>
			<Link
				href={href}
				className={clsx(
					"relative block px-3 py-2 transition",
					isActive
						? "text-primary"
						: "hover:text-primary dark:hover:text-primary",
				)}
			>
				{children}
				{isActive && (
					<span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-primary/0 via-primary/40 to-primary/0" />
				)}
			</Link>
		</li>
	);
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<"nav">) {
	return (
		<nav {...props}>
			<ul className="flex rotate-2 bg-background/90 px-3 text-nav font-medium text-foreground shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-background/90 dark:text-zinc-200 dark:ring-white/10">
				<NavItem href="/skills">Skills</NavItem>
				<NavItem href="/projects">Projects</NavItem>
				<NavItem href="/changelog">Changelog</NavItem>
				<NavItem href="/toolkit">Toolkit</NavItem>
			</ul>
		</nav>
	);
}

function ThemeToggle() {
	const { resolvedTheme, setTheme } = useTheme();
	const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<button
			type="button"
			aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
			className="group rotate-2 p-2 transition"
			onClick={() => setTheme(otherTheme)}
		>
			<Sun className="h-6 w-6 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:hidden" />
			<Moon className="hidden h-6 w-6 stroke-zinc-500 transition dark:block dark:group-hover:stroke-zinc-400" />
		</button>
	);
}

export function Header() {
	return (
		<header className="pointer-events-none relative z-50 flex flex-none flex-col">
			<div className="top-0 z-10 h-16 pt-6">
				<Container>
					<div className="relative flex gap-4">
						<div className="flex flex-1">
							<div className="pointer-events-auto h-10 w-10 rotate-2 bg-background/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-background/90 dark:ring-white/10">
								<Link href="/" aria-label="Home">
									<Image
										src={avatarImage}
										alt=""
										sizes="2.25rem"
										className="h-9 w-9 bg-muted object-cover"
										priority
									/>
								</Link>
							</div>
						</div>
						<div className="flex flex-1 justify-end md:justify-center">
							<MobileNavigation className="pointer-events-auto md:hidden" />
							<DesktopNavigation className="pointer-events-auto hidden md:block" />
						</div>
						<div className="flex justify-end md:flex-1">
							<div className="pointer-events-auto">
								<ThemeToggle />
							</div>
						</div>
					</div>
				</Container>
			</div>
		</header>
	);
}
