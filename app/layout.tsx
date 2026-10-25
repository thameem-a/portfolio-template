import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "./config/portfolio";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: `${personal.name} - Portfolio`,
  description: personal.description,
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>{children}</body>
    </html>
  );
}
