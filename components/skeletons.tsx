/**
 * Skeleton components for Suspense fallbacks
 * These provide a polished loading experience while content streams in
 */

const skeletonRotations = [
	"rotate-2",
	"-rotate-2",
	"rotate-2",
	"rotate-2",
	"-rotate-2",
];

const skeletonOffsets = [
	"translate-y-2",
	"-translate-y-3",
	"translate-y-4",
	"-translate-y-2",
	"translate-y-3",
];

export function PhotosSkeleton() {
	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex items-center justify-center gap-5 overflow-hidden py-8 sm:gap-8">
				{Array.from({ length: 5 }).map((_, i) => (
					<div
						key={i}
						className={`relative w-44 flex-none animate-pulse overflow-hidden rounded-xl bg-muted sm:w-72 sm:rounded-2xl ${skeletonRotations[i]} ${skeletonOffsets[i]}`}
					>
						<div className="aspect-9/10" />
					</div>
				))}
			</div>
		</div>
	);
}

export function ComponentExampleSkeleton() {
	return (
		<div className="mt-16 grid gap-8 sm:mt-20 md:grid-cols-2">
			{/* Card skeleton */}
			<div className="space-y-4">
				<div className="h-6 w-16 rounded bg-muted" />
				<div className="flex items-center justify-center rounded-xl border border-border bg-card p-8">
					<div className="w-full max-w-sm animate-pulse space-y-4">
						<div className="aspect-video rounded-lg bg-muted" />
						<div className="space-y-2">
							<div className="h-5 w-3/4 rounded bg-muted" />
							<div className="h-4 w-full rounded bg-muted" />
							<div className="h-4 w-5/6 rounded bg-muted" />
						</div>
						<div className="flex items-center gap-2">
							<div className="h-9 w-24 rounded bg-muted" />
							<div className="h-6 w-16 rounded-full bg-muted" />
						</div>
					</div>
				</div>
			</div>

			{/* Form skeleton */}
			<div className="space-y-4">
				<div className="h-6 w-16 rounded bg-muted" />
				<div className="flex items-center justify-center rounded-xl border border-border bg-card p-8">
					<div className="w-full max-w-md animate-pulse space-y-4 rounded-lg border border-border p-6">
						<div className="space-y-2">
							<div className="h-5 w-32 rounded bg-muted" />
							<div className="h-4 w-48 rounded bg-muted" />
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<div className="h-4 w-12 rounded bg-muted" />
								<div className="h-10 w-full rounded bg-muted" />
							</div>
							<div className="space-y-2">
								<div className="h-4 w-12 rounded bg-muted" />
								<div className="h-10 w-full rounded bg-muted" />
							</div>
						</div>
						<div className="space-y-2">
							<div className="h-4 w-20 rounded bg-muted" />
							<div className="h-10 w-full rounded bg-muted" />
						</div>
						<div className="space-y-2">
							<div className="h-4 w-20 rounded bg-muted" />
							<div className="h-24 w-full rounded bg-muted" />
						</div>
						<div className="flex gap-2">
							<div className="h-9 w-20 rounded bg-muted" />
							<div className="h-9 w-20 rounded bg-muted" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export function HeroSkeleton() {
	return (
		<div className="max-w-2xl animate-pulse">
			<div className="h-12 w-3/4 rounded-lg bg-muted sm:h-14" />
			<div className="mt-6 space-y-3">
				<div className="h-4 w-full rounded bg-muted" />
				<div className="h-4 w-5/6 rounded bg-muted" />
				<div className="h-4 w-4/6 rounded bg-muted" />
			</div>
		</div>
	);
}
