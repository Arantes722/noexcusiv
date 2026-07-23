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

  title: {
    default: "NOEXCUSIV | Premium Mindset Clothing",
    template: "%s | NOEXCUSIV",
  },


  description:
    "NOEXCUSIV creates premium mindset clothing for those who refuse excuses and chase their goals.",


  icons: {
    icon: "/favicon.ico",
  },


  openGraph: {

    title:
      "NOEXCUSIV | Premium Mindset Clothing",

    description:
      "Built for those who refuse excuses.",

    url:
      "https://noexcusiv.vercel.app",

    siteName:
      "NOEXCUSIV",

    locale:
      "en_US",

    type:
      "website",

  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "NOEXCUSIV | Premium Mindset Clothing",

    description:
      "Built for those who refuse excuses.",

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