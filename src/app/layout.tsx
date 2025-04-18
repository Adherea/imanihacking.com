import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Support from "./components/Support";
import Footer from "./components/Footer";

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

export const metadata: Metadata = {
  title: "IMANI Hacking Bootcamp",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="default">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <Support />
        <Footer />
      </body>
    </html>
  );
}
