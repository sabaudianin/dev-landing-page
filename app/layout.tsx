import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafbob.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Strony internetowe dla firm | Rafał Bobko - od 800 zł, 5 dni",
    template: "%s | RafBob.dev",
  },
  description:
    "Tworzę strony internetowe, landing page i wizytówki firmowe dla polskich firm. Szybka realizacja 3-7 dni, uczciwe ceny od 800 zł. Pełne SEO w cenie. Zadzwoń lub napisz na WhatsApp.",
  keywords: [
    "strony internetowe dla firm",
    "landing page cena",
    "wizytówka firmowa strona www",
    "tworzenie stron internetowych Polska",
    "tanie strony internetowe",
    "strona internetowa dla małej firmy",
    "projektowanie stron www",
    "Next.js developer Polska",
    "strona firmowa SEO",
    "webdev freelancer Polska",
  ],
  authors: [{ name: "Rafał Bobko", url: siteUrl }],
  creator: "Rafał Bobko",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "RafBob.dev",
    title: "Strony internetowe dla firm | od 500 zł · 5 dni · Pełne SEO",
    description:
      "Tworzę strony www, landing page i wizytówki dla polskich firm. Szybko, tanio, z pełnym SEO.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "RafBob.dev — Strony internetowe dla firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strony internetowe dla firm | RafBob.dev",
    description: "Od 600 zł · 5 dni · Pełne SEO w cenie. Napisz na WhatsApp.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteUrl,
  name: "RafBob.dev - Rafał Bobko",
  description:
    "Tworzenie stron internetowych, landing page i wizytówek firmowych dla polskich firm.",
  url: siteUrl,
  telephone: "+48793386445",
  email: "rafbobbob@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
  },
  priceRange: "800-5000 PLN",
  currenciesAccepted: "PLN",
  paymentAccepted: "Przelew, faktura VAT",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://github.com/sabaudianin",
    "https://portfoliodev-hazel.vercel.app",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi tworzenia stron internetowych",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Landing page",
        description: "Profesjonalna strona sprzedażowa jednostronna",
        price: "800",
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Wizytówka firmowa",
        description: "Wielostronicowa strona firmowa z pełnym SEO",
        price: "1500",
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-dm antialiased">{children}</body>
    </html>
  );
}