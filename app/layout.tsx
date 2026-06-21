import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const siteTitle = `${siteConfig.displayName} | Find Trusted Skin Clinics in Korea`;
const ogImage = "/brand/kskinpick-og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.displayName,

  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.displayName}`,
  },

  description: siteConfig.description,

  keywords: [
    "Korean skin clinic",
    "skin clinic in Korea",
    "Korea dermatology clinic",
    "Seoul skin clinic",
    "Gangnam skin clinic",
    "Korean aesthetic treatments",
    "Rejuran Korea",
    "Juvelook Korea",
    "Ultherapy Korea",
    "skin booster Korea",
    "foreigner friendly clinic Korea",
  ],

  authors: [{ name: siteConfig.displayName }],
  creator: siteConfig.displayName,
  publisher: siteConfig.displayName,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: siteTitle,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.displayName,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "KSkinPick - Find trusted skin clinics in Korea",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}