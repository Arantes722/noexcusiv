import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noexcusiv.vercel.app"),

  title: {
    default: "NOEXCUSIV | No Excuses. No Average Life.",
    template: "%s | NOEXCUSIV",
  },

  description:
    "NOEXCUSIV creates distinctive pieces for people who refuse an average life and want their spaces to reflect it.",

  keywords: [
    "NOEXCUSIV",
    "NoExclusivClub",
    "NOEXCUSIV Club",
    "lifestyle brand",
    "statement pieces",
    "home decor",
    "wall art",
    "premium pieces",
  ],

  authors: [{ name: "NOEXCUSIV" }],
  creator: "NOEXCUSIV",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "NOEXCUSIV | No Excuses. No Average Life.",
    description:
      "Distinctive pieces for those who refuse an average life.",
    url: "https://noexcusiv.vercel.app",
    siteName: "NOEXCUSIV",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NOEXCUSIV | No Excuses. No Average Life.",
    description:
      "Distinctive pieces for those who refuse an average life.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-black text-white antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}