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
						Full-stack developer. 6+ years building web apps and APIs. Started
						with Java at an enterprise company, now I work with TypeScript,
						Next.js, and Node.js. I do the frontend, the backend, and the
						integrations—auth, payments, email, that kind of thing.
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
								Built a SaaS starter kit I keep reusing. Next.js monorepo,
								BetterAuth, Stripe, Resend, Hono backend, Zod for validation.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Contributing to Rabbitholes.ai. Set up the monorepo, wrote docs
								with Fumadocs, built AI features.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Consulting for Exterview.ai and WeThink AI. Full-stack work,
								mostly shipping GenAI stuff.
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
								Built Askiy.ai for CBTS. Sustainability tracking and ESG
								reporting.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Set up Clerk auth with webhook sync, built APIs for utility
								spending and sustainability data.
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
								Wrote APIs for an omnichannel SaaS platform. Clients included
								Landmark Group, SPAR, Hindustan Unilever.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								Data validation, payload mapping, coordinating with BAs on
								estimates. Java, Spring Boot, SQL.
							</Text>
						</View>
						<View style={styles.bulletPoint}>
							<Text style={styles.bullet}>•</Text>
							<Text style={styles.bulletText}>
								On-site at SPAR India for two years (Oct 2018 - Dec 2020).
								PDF/Excel exports, sprint planning, ETL pipelines for FTP data.
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
							Vendor management for Indian retailers. Supplier onboarding, GST
							stuff, purchase orders. Plugs into ERPs.
						</Text>
					</View>
					<View style={styles.projectItem}>
						<Text style={styles.projectName}>YeloChess (yelochess.com)</Text>
						<Text style={styles.projectDescription}>
							Chess app I built to teach kids. Play games and talk to students
							in real time.
						</Text>
					</View>
					<View style={styles.projectItem}>
						<Text style={styles.projectName}>Jotdo</Text>
						<Text style={styles.projectDescription}>
							Todo app I made for myself. Focused on today, pulls overdue stuff
							forward automatically. Data stays on your machine.
						</Text>
					</View>
				</View>
			</Page>
		</Document>
	);
}
