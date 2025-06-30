// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
      {/* The base theme colors are now applied directly here! */}
      <body className={`${inter.className} bg-background text-text`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}