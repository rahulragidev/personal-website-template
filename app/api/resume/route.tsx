import { renderToBuffer } from "@react-pdf/renderer";
import { ResumePDF } from "@/lib/resume-pdf";

export async function GET() {
	const buffer = await renderToBuffer(<ResumePDF />);
	const uint8Array = new Uint8Array(buffer);

	return new Response(uint8Array, {
		headers: {
			"Content-Type": "application/pdf",
			"Content-Disposition": 'attachment; filename="Rahul_Ragi_Resume.pdf"',
		},
	});
}
