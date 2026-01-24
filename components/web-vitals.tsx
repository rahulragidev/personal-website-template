"use client";

import { useReportWebVitals } from "next/web-vitals";

/**
 * Web Vitals Reporter
 *
 * Captures Core Web Vitals metrics:
 * - LCP (Largest Contentful Paint) - loading performance
 * - FID (First Input Delay) - interactivity
 * - CLS (Cumulative Layout Shift) - visual stability
 * - FCP (First Contentful Paint) - perceived load speed
 * - TTFB (Time to First Byte) - server response time
 * - INP (Interaction to Next Paint) - responsiveness
 *
 * @see https://nextjs.org/docs/app/api-reference/functions/use-report-web-vitals
 */

type ReportWebVitalsCallback = Parameters<typeof useReportWebVitals>[0];

const handleWebVitals: ReportWebVitalsCallback = (metric) => {
	// Log to console in development
	if (process.env.NODE_ENV === "development") {
		console.log(`[Web Vital] ${metric.name}:`, {
			value: metric.value,
			rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
			delta: metric.delta,
			id: metric.id,
		});
	}

	// In production, send to your analytics service
	// Example: https://nextjs.org/docs/app/guides/analytics
};

export function WebVitals() {
	useReportWebVitals(handleWebVitals);
	return null;
}
