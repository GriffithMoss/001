// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // <-- 1. Import Header

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // You can update your site title here
  title: "Stationery-Link",
  description: "最高の文房具を見つける場所",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header /> {/* <-- 2. Add Header here */}
        <main>{children}</main> {/* 3. Wrap children in main for semantics */}
      </body>
    </html>
  );
}