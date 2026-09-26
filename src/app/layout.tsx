import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { SITE } from "@/lib/site";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/jsonld";
import { WhatsAppButton } from "@/components/ui/WhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "IPTV in Deutschland – Premium 4K Streaming | StreamGermany4K",
    template: "%s | StreamGermany4K",
  },
  description:
    "StreamGermany4K ist Ihr Premium-IPTV-Dienst für Deutschland: Live-TV, Sport und Filme in 4K/HD auf allen Geräten. Anbieter vergleichen, Abo verstehen und kaufen.",
  applicationName: SITE.name,
  alternates: {
    canonical: "/",
    languages: {
      de: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    url: SITE.domain,
    images: [
      {
        url: "/images/iptv-deutschland-hero.jpg",
        width: 1344,
        height: 768,
        alt: "StreamGermany4K – Premium IPTV in 4K für Deutschland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/iptv-deutschland-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased bg-brand-dark text-white flex flex-col min-h-screen`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieBanner />
        {/* Site-wide floating WhatsApp click-to-chat button */}
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
