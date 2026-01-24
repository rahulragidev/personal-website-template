import { Container } from "@/components/container";

export default function Loading() {
	return (
		<>
			<Container className="mt-9">
				<div className="max-w-2xl animate-pulse">
					{/* Headline skeleton */}
					<div className="h-12 w-3/4 rounded-lg bg-muted sm:h-14" />
					{/* Bio skeleton */}
					<div className="mt-6 space-y-3">
						<div className="h-4 w-full rounded bg-muted" />
						<div className="h-4 w-5/6 rounded bg-muted" />
						<div className="h-4 w-4/6 rounded bg-muted" />
					</div>
				</div>
			</Container>

			{/* Photos skeleton */}
			<div className="mt-16 sm:mt-20">
				<div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
					{Array.from({ length: 5 }).map((_, i) => (
						<div
							key={i}
							className="relative w-44 flex-none animate-pulse overflow-hidden rounded-xl bg-muted sm:w-72 sm:rounded-2xl"
						>
							<div className="aspect-9/10" />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
