import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<Container className="flex min-h-screen items-center justify-center py-16 sm:py-32">
			<div className="flex flex-col items-center text-center">
				<p className="text-body font-semibold text-muted-foreground">404</p>
				<h1 className="mt-4 text-heading font-bold text-foreground sm:text-heading-lg">
					Page not found
				</h1>
				<p className="mt-4 text-body text-muted-foreground">
					Sorry, we couldn't find the page you're looking for.
				</p>
				<Link href="/">
					<Button variant="secondary" className="mt-6">
						Go back home
					</Button>
				</Link>
			</div>
		</Container>
	);
}
