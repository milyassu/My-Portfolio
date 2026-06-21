import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milyassu.github.io"),
  title: {
    template: "%s | Mohammad Ilyas Suud",
    default: "Mohammad Ilyas Suud | Data Science Portfolio",
  },
  description: "Data science portfolio of Mohammad Ilyas Suud, a Mathematics undergraduate at Universitas Negeri Jakarta focusing on Data Science, Machine Learning, Statistical Modeling, and Business Analytics.",
  keywords: [
    "Mohammad Ilyas Suud",
    "Data Science Portfolio",
    "Data Scientist Indonesia",
    "Machine Learning Engineer",
    "Mathematics Student UNJ",
    "Statistical Modeling",
    "Business Analytics",
    "Dijkstra Route Optimization",
    "Tokopedia Sentiment Analysis",
    "Income Classification Machine Learning",
    "BNSP Certified Data Scientist"
  ],
  authors: [{ name: "Mohammad Ilyas Suud", url: "https://www.linkedin.com/in/milyassu/" }],
  creator: "Mohammad Ilyas Suud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/milyassu",
    title: "Mohammad Ilyas Suud | Data Science Portfolio",
    description: "Data science portfolio of Mohammad Ilyas Suud, a Mathematics undergraduate at Universitas Negeri Jakarta focusing on Data Science, Machine Learning, Statistical Modeling, and Business Analytics.",
    siteName: "Mohammad Ilyas Suud Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 400,
        height: 400,
        alt: "Mohammad Ilyas Suud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Ilyas Suud | Data Science Portfolio",
    description: "Data science portfolio of Mohammad Ilyas Suud, a Mathematics undergraduate at Universitas Negeri Jakarta.",
    images: ["/images/profile.jpg"],
    creator: "@milyassu",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        outfit.variable,
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
