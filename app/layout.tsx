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
  title: "Aussie-iptv | Premium IPTV Streaming Service",
  description:
    "Aussie-iptv delivers premium IPTV with Australian servers, instant activation, and buffer-free streaming in HD & 4K."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
