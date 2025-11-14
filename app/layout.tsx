import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://erub-portfolio.vercel.app"),
  title: {
    default: "Erub Khan – Full‑Stack Developer",
    template: "%s | Erub Khan",
  },
  description: "Full‑stack developer building clean UIs and reliable systems. Projects, experience, and contact.",
  openGraph: {
    title: "Erub Khan – Full‑Stack Developer",
    description: "Full‑stack developer building clean UIs and reliable systems.",
    url: "/",
    siteName: "Erub Portfolio",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Erub Portfolio" },
    ],
    locale: "en_CA",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}