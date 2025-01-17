import portfolio from "@/data/portfolio.json";

import localFont from "next/font/local";
import "./globals.css";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
        <Header />
        {children}
        <Footer
          email={portfolio.email}
          github={portfolio.github}
          linkedin={portfolio.linkedin}
          name={portfolio.name}
          phone={portfolio.phone}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
