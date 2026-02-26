import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aussie-iptv.com"),
  title: {
    default: "Aussie-iptv | Premium IPTV Streaming Service Australia",
    template: "%s | Aussie-iptv"
  },
  description:
    "Aussie-iptv delivers premium IPTV with Australian servers, instant activation, and buffer-free streaming in HD & 4K.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://aussie-iptv.com",
    siteName: "Aussie-iptv",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Aussie-iptv Premium Streaming"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@aussieiptv",
    creator: "@aussieiptv"
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body
        className={`${inter.variable} ${poppins.variable} bg-midnight-900 text-white antialiased`}
      >
        <div className="relative min-h-screen">
          <div className="absolute inset-0 -z-20 bg-midnight-800" />
          <div className="absolute inset-0 -z-10 bg-hero-radial" />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
