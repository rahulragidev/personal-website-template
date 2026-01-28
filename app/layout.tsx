import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { getSiteMetadata, siteConfig } from "@/lib/site-config";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
	preload: true,
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
	preload: true,
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
	preload: false, // Only preload primary fonts
});

export const metadata: Metadata = getSiteMetadata();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang={siteConfig.language}
			className={jetbrainsMono.variable}
			suppressHydrationWarning
		>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
			>
				<Providers>
					<div className="flex w-full">
						<div className="fixed inset-0 flex justify-center sm:px-8">
							<div className="flex w-full max-w-7xl lg:px-8">
								<div className="w-full rotate-2 scale-110 bg-background ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
							</div>
						</div>
						<div className="relative flex w-full flex-col">
							<Header />
							<main className="flex-auto">{children}</main>
							<Footer />
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
