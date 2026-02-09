import {
	Document,
	Link,
	Page,
	StyleSheet,
	Text,
	View,
} from "@react-pdf/renderer";
import { resumeData } from "@/lib/resume-data";

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
	const { contact, summary, experience, skills, projects } = resumeData;

	return (
		<Document>
			<Page size="A4" style={styles.page}>
				{/* Header */}
				<View style={styles.header}>
					<Text style={styles.name}>{contact.name}</Text>
					<Text style={styles.title}>{contact.title}</Text>
					<View style={styles.contactRow}>
						<Text style={styles.contactItem}>{contact.location}</Text>
						<Link style={styles.link} src={`mailto:${contact.email}`}>
							{contact.email}
						</Link>
						<Link style={styles.link} src={contact.website}>
							{contact.websiteLabel}
						</Link>
						<Link style={styles.link} src={contact.linkedin}>
							LinkedIn
						</Link>
						<Link style={styles.link} src={contact.github}>
							GitHub
						</Link>
					</View>
				</View>

				{/* Summary */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Summary</Text>
					<Text style={styles.summary}>{summary}</Text>
				</View>

				{/* Experience */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Experience</Text>

					{experience.map((exp) => (
						<View key={exp.title} style={styles.experienceItem}>
							<View style={styles.experienceHeader}>
								<Text style={styles.jobTitle}>{exp.title}</Text>
								<Text style={styles.dates}>{exp.dates}</Text>
							</View>
							{exp.company && (
								<Text style={styles.company}>{exp.company}</Text>
							)}
							{exp.bullets.map((bullet) => (
								<View key={bullet} style={styles.bulletPoint}>
									<Text style={styles.bullet}>•</Text>
									<Text style={styles.bulletText}>{bullet}</Text>
								</View>
							))}
						</View>
					))}
				</View>

				{/* Skills */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Technical Skills</Text>
					<View style={styles.skillsGrid}>
						{skills.map((skill) => (
							<View key={skill.label} style={styles.skillCategory}>
								<Text style={styles.skillLabel}>{skill.label}: </Text>
								<Text style={styles.skillValue}>{skill.value}</Text>
							</View>
						))}
					</View>
				</View>

				{/* Projects */}
				<View style={styles.section}>
					<Text style={styles.sectionTitle}>Projects</Text>
					{projects.map((project) => (
						<View key={project.name} style={styles.projectItem}>
							<Text style={styles.projectName}>
								{project.name}
								{project.url
									? ` (${project.url.replace("https://", "")})`
									: ""}
							</Text>
							<Text style={styles.projectDescription}>
								{project.description}
							</Text>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
}
