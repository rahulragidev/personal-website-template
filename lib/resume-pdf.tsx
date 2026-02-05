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
		marginBottom: 4,
	},
	title: {
		fontSize: 12,
		color: "#666",
		marginBottom: 8,
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
						Full-stack developer with 6+ years of experience building web
						applications and APIs. Started with enterprise Java, now
						specializing in TypeScript, Next.js, and Node.js. I help startups
						ship fast without burning runway. Strong focus on type safety, clean
						architecture, and integrating third-party services like auth,
						payments, and email.
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
								Built reusable SaaS starter kit with Next.js monorepo,
								BetterAuth, Stripe payments, Resend email, and Hono backend with
								end-to-end type safety using Zod
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Contributing to Rabbitholes.ai: set up monorepo architecture,
								built documentation site with Fumadocs and OpenAI chat
								integration, developed AI features for infinite canvas platform
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Consulting for Exterview.ai (AI hiring platform with voice
								interviews, resume parsing, fraud detection) and WeThink AI
								(GenAI products)
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
								Built Askiy.ai for CBTS: AI-powered platform for tracking
								sustainability metrics and ESG reporting
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Implemented Clerk authentication with webhook sync and RESTful
								APIs for utility spending and sustainability data
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
								Developed APIs for omnichannel SaaS platform serving high-volume
								ecommerce clients including Landmark Group, SPAR, and Hindustan
								Unilever
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Built data validation pipelines, coordinated with BAs on effort
								estimates, and handled payload mapping between client
								requirements and database schemas
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								On-site SPOC at SPAR India (Oct 2018 - Dec 2020): led feature
								development including PDF/Excel exports, managed sprints, built
								ETL pipelines for FTP-based data transfers
							</Text>
						</View>
					</View>
				</View>

				{/* Skills */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Skills</Text>
					<View style={styles.skillsGrid}>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Frontend: </Text>
							<Text style={styles.skillValue}>
								React, Next.js, TypeScript, Tailwind CSS, HTML, CSS
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Backend: </Text>
							<Text style={styles.skillValue}>
								Node.js, Hono, Java, Spring Boot, REST APIs
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Data: </Text>
							<Text style={styles.skillValue}>
								PostgreSQL, Drizzle ORM, Prisma, Zod, SQL
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Infrastructure: </Text>
							<Text style={styles.skillValue}>
								Vercel, Git, TurboRepo, Monorepos
							</Text>
						</View>
						<View style={styles.skillCategory}>
							<Text style={styles.skillLabel}>Integrations: </Text>
							<Text style={styles.skillValue}>
								Clerk, BetterAuth, Stripe, Resend, OpenAI
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
							Vendor management system for Indian retailers handling supplier
							onboarding, GST reconciliation, and purchase order workflows with
							ERP integrations
						</Text>
					</View>
					<View style={styles.projectItem}>
						<Text style={styles.projectName}>YeloChess (yelochess.com)</Text>
						<Text style={styles.projectDescription}>
							Real-time chess teaching platform enabling live games and
							communication with students
						</Text>
					</View>
					<View style={styles.projectItem}>
						<Text style={styles.projectName}>Jotdo</Text>
						<Text style={styles.projectDescription}>
							Local-first, today-centric todo app with automatic overdue task
							management and date-based navigation
						</Text>
					</View>
				</View>
			</Page>
		</Document>
	);
}
