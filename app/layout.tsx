import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", subsets: ["latin"], weight: "400" });
const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://your-name-portfolio-2026.karciee.chatgpt.site",
  ),
  title: "Karsci Cespedes — Data Science Portfolio",
  description: "Data Science graduate and Business System Analyst building decision-ready insight from complex data.",
  openGraph: { title: "Karsci Cespedes — Data Science Portfolio", description: "Data science, business systems, and continuous learning.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Karsci Cespedes — Data Science Portfolio", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>{children}</body></html>;
}
