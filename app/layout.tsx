import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import "@/app/globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { DevModeGate } from "@/components/dev-mode/DevModeGate";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Milwaukee, WI`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: `${siteConfig.tagline} — ${siteConfig.selfDescription}`,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false, // Prototype preview mode: prevent accidental Google indexing
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdChurch = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    telephone: siteConfig.phone,
    url: "https://www.tcb-church.com",
    openingHours: "Su 09:00-12:00, Tu 18:30-20:00, Th 11:00-12:00",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdChurch) }}
        />
      </head>
      <body className="antialiased bg-[#221c19] text-stone-100 min-h-screen flex flex-col">
        {/* Skip to Main Content Link for Accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        {/* Global Navigation (Subpages + Minimal Mobile Drawer) */}
        <Navigation />

        {/* Main Page Body */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* DEV_MODE_SLOT */}
        <Suspense fallback={null}>
          <DevModeGate />
        </Suspense>
      </body>
    </html>
  );
}
