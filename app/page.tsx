import { ComponentExample } from "@/components/component-example";
import { Container } from "@/components/container";
import { Photos } from "@/components/photos";
import { siteConfig } from "@/lib/site-config";

export default function Page() {
	return (
		<>
			<Container>
				<h1>{siteConfig.name}</h1>
			</Container>
			<Photos />
			<Container>
				<ComponentExample />
			</Container>
		</>
	);
}
