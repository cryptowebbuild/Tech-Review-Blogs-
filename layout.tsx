import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechReview Pro - Digital Product Reviews & Affiliate Marketing",
  description: "Honest, in-depth reviews of digital products, software, and online courses. Make informed decisions with our expert analysis and community insights.",
  keywords: ["digital product reviews", "affiliate marketing", "software reviews", "online courses", "tech reviews", "product comparisons"],
  authors: [{ name: "TechReview Pro Team" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "TechReview Pro - Digital Product Reviews",
    description: "Honest, in-depth reviews of digital products, software, and online courses",
    url: "https://techreviewpro.com",
    siteName: "TechReview Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechReview Pro - Digital Product Reviews",
    description: "Honest, in-depth reviews of digital products, software, and online courses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
