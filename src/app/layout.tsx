import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { LangProvider } from "@/i18n/LangProvider";
import PageTransition from "@/app/PageTransition";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MLBB Esports — Portfolio",
    template: "%s | MLBB Esports",
  },
  description: "Portfolio website bertema MLBB Esports (Next.js + Tailwind v4).",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MLBB Esports — Portfolio",
    title: "MLBB Esports — Portfolio",
    description: "Website modern, profesional, responsif, dan interaktif.",
    images: ["/og-default.png"], // sediakan 1200x630 di /public
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    creator: "@yourhandle",
    title: "MLBB Esports — Portfolio",
    description: "Website modern, profesional, responsif, dan interaktif.",
    images: ["/og-default.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-dvh antialiased selection:bg-brand-600/30`}>
        <LangProvider>
          <PageTransition>{children}</PageTransition>
        </LangProvider>
      </body>
    </html>
  );
}
