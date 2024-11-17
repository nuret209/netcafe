"use client"
import "./globals.css";
import { Lexend } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

import React from "react";
const font = Lexend({ weight: ["400", "500", "700"], subsets: ["latin"] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  React.useEffect(() => {
    const elements = document.querySelectorAll('[cz-shortcut-listen="true"]');
    elements.forEach((el) => {
      el.setAttribute('cz-shortcut-listen', 'false');
    });
  }, []);
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
