import type { Metadata } from "next";
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  title: "Lukas Wesemann, PhD - AI Researcher",
  description: "AI Researcher at Maincode building sovereign foundation models. Co-founder of MLAI, Australia's largest community of AI builders.",
  keywords: ["AI Researcher", "Machine Learning", "MLAI", "Maincode", "Australia", "Lukas Wesemann"],
  authors: [{ name: "Lukas Wesemann" }],
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  themeColor: "#fef7f0",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
