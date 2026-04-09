import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const arabicDisplay = localFont({
  src: "../fonts/NotoNaskhArabic-Regular.woff2",
  variable: "--font-arabic-display",
  display: "swap",
  preload: true,
  weight: "400 700",
});

const arabicBody = localFont({
  src: "../fonts/IBMPlexSansArabic-Regular.woff2",
  variable: "--font-arabic-body",
  display: "swap",
  preload: true,
  weight: "400 600",
});

const englishDisplay = localFont({
  src: "../fonts/PlayfairDisplay-Regular.woff2",
  variable: "--font-english-display",
  display: "swap",
  preload: true,
  weight: "500 700",
});

const englishBody = localFont({
  src: "../fonts/CrimsonPro-Regular.woff2",
  variable: "--font-english-body",
  display: "swap",
  preload: true,
  weight: "400 600",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL 
  ? process.env.NEXT_PUBLIC_SITE_URL 
  : process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://dr-hassan-maliki.com"; // Fallback to production domain

const localeBootstrap = `(function () {
  var locale = location.pathname.split("/")[1] === "en" ? "en" : "ar";
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Hassan Hashem Al-Maliki | Attorney & Legal Consultant",
    template: "%s | Dr. Hassan Al-Maliki",
  },
  description:
    "Official bilingual legal platform of Dr. Hassan Hashem Al-Maliki. Specialised in Financial Law, Legislative Advisory, and Certified Translation.",
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  alternates: {
    languages: {
      ar: "/ar",
      en: "/en",
    },
  },
  openGraph: {
    title: "Dr. Hassan Hashem Al-Maliki",
    description:
      "Premium bilingual legal advisory for institutions, investors, and cross-border matters.",
    url: siteUrl,
    siteName: "Dr. Hassan Al-Maliki",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/hassan_profile_pic.png",
        width: 1200,
        height: 630,
        alt: "Dr. Hassan Hashem Al-Maliki — Attorney & Legal Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Hassan Hashem Al-Maliki",
    description:
      "Premium bilingual legal advisory for institutions, investors, and cross-border matters.",
    images: ["/hassan_profile_pic.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${arabicDisplay.variable} ${arabicBody.variable} ${englishDisplay.variable} ${englishBody.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
        <Script id="locale-bootstrap" strategy="beforeInteractive">
          {localeBootstrap}
        </Script>
        {children}
      </body>
    </html>
  );
}
