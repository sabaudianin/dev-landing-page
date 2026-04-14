import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rafalbobko.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rafał Bobko - Fullstack Developer (Next.js / React / .NET)",
    template: "%s | Rafał Bobko",
  },
  description:
    "Fullstack developer specializing in React, Next.js and C#/.NET. Available for B2B projects and freelance work. Based in Poland, working remotely worldwide.",
  keywords: [
    "fullstack developer",
    "Next.js developer",
    "React developer",
    "freelance developer Poland",
    "hire developer",
    "web development",
    "C# .NET developer",
  ],
  authors: [{ name: "Rafał Bobko", url: siteUrl }],
  creator: "Rafał Bobko",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rafał Bobko",
    title: "Rafał Bobko - Fullstack Developer",
    description:
      "Hire a fullstack developer with strong React/Next.js frontend and growing .NET backend skills.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Rafał Bobko - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafał Bobko - Fullstack Developer",
    description:
      "React / Next.js / C#.NET - available for projects and B2B.",
    images: ["/og.jpg"],
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
};

// JSON-LD 
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rafał Bobko",
  url: siteUrl,
  jobTitle: "Fullstack Developer",
  description:
    "Fullstack developer specializing in React, Next.js, TypeScript and C#/.NET",
  email: "rafbobbob@gmail.com",
  telephone: "+48793386445",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
  },
  sameAs: [
    "https://github.com/sabaudianin",
    "https://portfoliodev-hazel.vercel.app",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "C#",
    ".NET",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}