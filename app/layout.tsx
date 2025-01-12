import "./globals.css";
import { Lexend } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next";
import React from "react";
import { ClerkProvider} from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Shop - wagmigg",
  description: "An app",
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
          <ClerkProvider>
          {children}
          <SpeedInsights />
        </ClerkProvider>
      </body>
    </html>
  );
}
