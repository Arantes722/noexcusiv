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
    default: "NOEXCUSIV | Premium Mindset Clothing",
    template: "%s | NOEXCUSIV",
  },

  description:
    "NOEXCUSIV creates premium mindset clothing for those who refuse excuses and chase their goals.",

  keywords: [
    "NOEXCUSIV",
    "mindset",
    "clothing",
    "streetwear",
    "premium clothing",
    "cap",
    "hat",
    "motivation",
    "discipline",
  ],

  authors: [
    {
      name: "NOEXCUSIV",
    },
  ],

  creator: "NOEXCUSIV",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "NOEXCUSIV | Premium Mindset Clothing",

    description: "Premium mindset clothing built for those who refuse excuses.",

    url: "https://noexcusiv.vercel.app",

    siteName: "NOEXCUSIV",

    locale: "en_US",

    type: "website",

    // Vamos adicionar a imagem já a seguir
    // images: ["/og-image.jpg"],
  },

  twitter: {
    card: "summary_large_image",

    title: "NOEXCUSIV | Premium Mindset Clothing",

    description: "Premium mindset clothing built for those who refuse excuses.",

    // image vem depois
    // images: ["/og-image.jpg"],
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
        className={`
          ${inter.variable}
          ${spaceGrotesk.variable}
          bg-black
          text-white
          antialiased
        `}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
