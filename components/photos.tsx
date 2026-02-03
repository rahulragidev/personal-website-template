import Image from "next/image";
import { cn } from "@/lib/utils";
import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import image4 from "@/public/image4.jpg";
import image5 from "@/public/image5.jpg";

const images = [image1, image2, image3, image4, image5] as const;

const rotations = [
	"rotate-2",
	"-rotate-2",
	"rotate-2",
	"rotate-2",
	"-rotate-2",
] as const;

const verticalOffsets = [
	"translate-y-2",
	"-translate-y-3",
	"translate-y-4",
	"-translate-y-2",
	"translate-y-3",
] as const;

export function Photos() {
	return (
		<div className="mt-16 sm:mt-20">
			<div className="-my-4 flex items-center justify-center gap-5 overflow-hidden py-8 sm:gap-8">
				{images.map((image, imageIndex) => (
					<div
						key={image.src}
						className={cn(
							"relative w-44 flex-none overflow-hidden rounded-xl bg-card sm:w-72 sm:rounded-2xl",
							rotations[imageIndex % rotations.length],
							verticalOffsets[imageIndex % verticalOffsets.length],
						)}
					>
						<div className="aspect-9/10">
							<Image
								src={image}
								alt={`Photo ${imageIndex + 1}`}
								sizes="(min-width: 640px) 18rem, 11rem"
								placeholder="blur"
								className="absolute inset-0 h-full w-full object-cover"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
