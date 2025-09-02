import type { Metadata } from "next";
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
import Script from "next/script";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.svg",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Lukas Wesemann",
    "mobile-web-app-capable": "yes",
    "application-name": "Lukas Wesemann",
    "msapplication-TileColor": "#fef7f0",
    "msapplication-navbutton-color": "#fef7f0",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ backgroundColor: '#fef7f0' }}>
      <head>
        <meta name="theme-color" content="#fef7f0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C629PMG7D8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C629PMG7D8');
          `}
        </Script>
        <style dangerouslySetInnerHTML={{
          __html: `
            html, body { 
              background-color: #fef7f0 !important; 
              background: #fef7f0 !important;
            }
            * { 
              -webkit-tap-highlight-color: transparent; 
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonText.variable} antialiased`}
        style={{ backgroundColor: '#fef7f0' }}
      >
        {children}
      </body>
    </html>
  );
}
