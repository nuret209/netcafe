import "./globals.css";
import { Lexend } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "wagmigg Internet Cafe",
  icons: ["/images/favicon.ico"]
};


const font = Lexend({ weight: ["400", "500", "700"], subsets: ["latin"] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
