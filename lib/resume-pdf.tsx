import {
	Document,
	Link,
	Page,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
	page: {
		padding: 40,
		fontSize: 10,
		fontFamily: "Helvetica",
		lineHeight: 1.4,
	},
	header: {
		marginBottom: 20,
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		fontFamily: "Helvetica-Bold",
		lineHeight: 1.2,
	},
	title: {
		fontSize: 12,
		color: "#666",
		marginTop: 6,
		marginBottom: 12,
	},
	contactRow: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8,
		fontSize: 9,
		color: "#444",
	},
	contactItem: {
		marginRight: 16,
	},
	link: {
		color: "#0066cc",
		textDecoration: "none",
	},
	section: {
		marginBottom: 16,
	},
	sectionTitle: {
		fontSize: 12,
		fontWeight: "bold",
		fontFamily: "Helvetica-Bold",
		borderBottomWidth: 1,
		borderBottomColor: "#000",
		paddingBottom: 4,
		marginBottom: 10,
		textTransform: "uppercase",
		letterSpacing: 1,
	},
	experienceItem: {
		marginBottom: 12,
	},
	experienceHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 2,
	},
	jobTitle: {
		fontSize: 11,
		fontWeight: "bold",
		fontFamily: "Helvetica-Bold",
	},
	dates: {
		fontSize: 10,
		color: "#444",
	},
	company: {
		fontSize: 10,
		color: "#666",
		marginBottom: 4,
	},
	description: {
		fontSize: 10,
		color: "#333",
		marginBottom: 2,
	},
	bulletPoint: {
		flexDirection: "row",
		marginBottom: 2,
	},
	bullet: {
		width: 10,
	},
	bulletText: {
		flex: 1,
		fontSize: 10,
		color: "#333",
	},
	skillsGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	skillCategory: {
		width: "50%",
		marginBottom: 6,
	},
	skillLabel: {
		fontSize: 10,
		fontWeight: "bold",
		fontFamily: "Helvetica-Bold",
	},
	skillValue: {
		fontSize: 10,
		color: "#333",
	},
	projectItem: {
		marginBottom: 8,
	},
	projectName: {
		fontSize: 10,
		fontWeight: "bold",
		fontFamily: "Helvetica-Bold",
	},
	projectDescription: {
		fontSize: 10,
		color: "#333",
	},
	summary: {
		fontSize: 10,
		color: "#333",
		marginBottom: 4,
	},
});

export function ResumePDF() {
	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.header}>
					<Text style={styles.name}>Rahul Ragi</Text>
					<Text style={styles.title}>Full-Stack Software Engineer</Text>
					<View style={styles.contactRow}>
						<Text style={styles.contactItem}>Hyderabad, India</Text>
						<Link style={styles.link} src="mailto:rahulragi@gigglestack.com">
							rahulragi@gigglestack.com
						</Link>
						<Link style={styles.link} src="https://rahulragi.com">
							rahulragi.com
						</Link>
						<Link style={styles.link} src="https://linkedin.com/in/rahul-ragi">
							LinkedIn
						</Link>
						<Link style={styles.link} src="https://github.com/rahulragidev">
							GitHub
						</Link>
					</View>
				</View>

				{/* Summary */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Summary</Text>
					<Text style={styles.summary}>
						Full-stack engineer with 6+ years of experience building scalable
						web applications and APIs across enterprise and startup
						environments. Led development of omnichannel retail integrations
						processing millions of daily transactions for clients including
						Landmark Group and Hindustan Unilever. Currently architecting
						AI-powered SaaS products and consulting for early-stage startups on
						full-stack development, system design, and GenAI integration.
						Proficient in TypeScript/Node.js ecosystem with deep experience in
						Java/Spring Boot enterprise systems.
					</Text>
				</View>

				{/* Experience */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Experience</Text>

					<View style={styles.experienceItem}>
						<View style={styles.experienceHeader}>
							<Text style={styles.jobTitle}>
								Freelance Full-Stack Developer
							</Text>
							<Text style={styles.dates}>Sep 2023 - Present</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Architected and maintain a production-grade SaaS boilerplate
								using Next.js 16, TurboRepo monorepo, BetterAuth, Stripe
								subscriptions, and Hono API layer—reducing new project setup
								from weeks to days.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Core contributor to Rabbitholes.ai (1,800+ users): established
								monorepo architecture, built documentation site with Fumadocs,
								and implemented coupon-to-license-key redemption system enabling
								third-party reseller distribution.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Developed backend services using Hono including Firecrawl web
								scraping integration, RAG-based AI features with OpenAI
								embeddings, and various API routes as per product requirements.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Technical consultant for Exterview.ai (AI interview platform)
								and WeThink AI—delivered end-to-end features including
								real-time transcription, LLM-powered analysis, and custom
								evaluation pipelines.
							</Text>
						</View>
					</View>

					<View style={styles.experienceItem}>
						<View style={styles.experienceHeader}>
							<Text style={styles.jobTitle}>Full-Stack Developer</Text>
							<Text style={styles.dates}>Sep 2024 - Dec 2024</Text>
						</View>
						<Text style={styles.company}>WTA GenAI / Askiy.ai</Text>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Built Askiy.ai from ground up for CBTS—an enterprise
								sustainability platform enabling organizations to track carbon
								footprint, utility spending, and generate automated ESG
								compliance reports.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Implemented Clerk authentication with webhook-based user
								provisioning, built REST APIs for utility spending and
								sustainability data tracking.
							</Text>
						</View>
					</View>

					<View style={styles.experienceItem}>
						<View style={styles.experienceHeader}>
							<Text style={styles.jobTitle}>Software Engineer</Text>
							<Text style={styles.dates}>Jul 2018 - Sep 2023</Text>
						</View>
						<Text style={styles.company}>Vinculum Group</Text>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Developed and maintained REST APIs for Vin eRetail, an
								omnichannel OMS/WMS platform processing 2M+ daily orders for
								enterprise clients including Landmark Group (6,000+ stores),
								SPAR India, and Hindustan Unilever.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Led integration development for 15+ marketplace connectors
								(Amazon, Flipkart, Myntra), implementing real-time inventory
								sync, order routing logic, and fault-tolerant message queues.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Embedded on-site at SPAR India HQ for 2 years: owned ETL
								pipeline development for POS/ERP data, built automated
								reporting system generating 50+ daily Excel/PDF reports, and
								collaborated directly with business stakeholders on sprint
								planning.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Built internal tools for MDM teams enabling better data
								management workflows and automated audit report generation.
							</Text>
						</View>
					</View>
				</View>

				{/* Skills */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Technical Skills</Text>
					<View style={styles.skillsGrid}>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Languages: </Text>
							<Text style={styles.skillValue}>
								TypeScript, JavaScript, Java, SQL, HTML/CSS
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Frontend: </Text>
							<Text style={styles.skillValue}>
								React, Next.js 16, Tailwind CSS, Zustand, React Query
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Backend: </Text>
							<Text style={styles.skillValue}>
								Node.js, Hono, Spring Boot, REST APIs, WebSockets
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Databases: </Text>
							<Text style={styles.skillValue}>
								PostgreSQL, MySQL, Redis, Drizzle ORM, Prisma
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Infrastructure: </Text>
							<Text style={styles.skillValue}>
								Vercel, AWS (S3, Lambda), Docker, TurboRepo, Git
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>AI/ML: </Text>
							<Text style={styles.skillValue}>
								OpenAI API, LangChain, RAG, Embeddings, Prompt Engineering
							</Text>
						</View>
					</View>
				</View>

				{/* Projects */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Projects</Text>
					<View style={styles.projectItem}>
						<Text style={styles.projectName}>PheroChain (pherochain.com)</Text>
						<Text style={styles.projectDescription}>
							B2B vendor management platform for Indian retailers—handles
							supplier onboarding, GST compliance verification, purchase order
							workflows, and ERP integration. Built with Next.js, PostgreSQL,
							and custom middleware for Tally/SAP data sync.
						</Text>
					</View>
					<View style={styles.projectItem}>
						<Text style={styles.projectName}>YeloChess (yelochess.com)</Text>
						<Text style={styles.projectDescription}>
							Real-time chess coaching platform with reactive game sync using
							Convex database, integrated Lichess puzzle database for training
							exercises. Teaches 20+ students weekly. Stack: Next.js, Chess.js,
							react-chessboard, Convex.
						</Text>
					</View>
					<View style={styles.projectItem}>
						<Text style={styles.projectName}>Jotdo</Text>
						<Text style={styles.projectDescription}>
							Privacy-first task manager with local-only storage using
							IndexedDB. Features automatic task rollover, daily focus view,
							and keyboard-driven UX. Built with React and Zustand for offline
							state management.
						</Text>
					</View>
				</View>
			</Page>
		</Document>
	);
}
