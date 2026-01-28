import { Suspense } from "react";
import { ComponentExample } from "@/components/component-example";
import { Container } from "@/components/container";
import { Photos } from "@/components/photos";
import {
	ComponentExampleSkeleton,
	PhotosSkeleton,
} from "@/components/skeletons";
import { siteConfig } from "@/lib/site-config";

export default function Page() {
	return (
		<>
			<Container className="mt-9">
				<div className="max-w-2xl">
					<h1 className="text-heading font-bold text-foreground sm:text-heading-lg">
						{siteConfig.headline}
					</h1>
					<p className="mt-6 text-body text-muted-foreground">
						{siteConfig.bio}
					</p>
				</div>
			</Container>

			<Suspense fallback={<PhotosSkeleton />}>
				<Photos />
			</Suspense>

			<Container>
				<Suspense fallback={<ComponentExampleSkeleton />}>
					<ComponentExample />
				</Suspense>
			</Container>
		</>
	);
}
