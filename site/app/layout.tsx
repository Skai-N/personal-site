import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skai Nzeuton",
  description: "Skai Nzeuton's personal portfolio website.",
  keywords: ["software engineer", "software developer", "quantitative developer", "personal website", "portfolio"],
  openGraph: {
    title: "Skai Nzeuton",
    description: "Skai Nzeuton's personal portfolio website.",
    type: "website",
  },
  icons: {
    icon: "/headshot.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
