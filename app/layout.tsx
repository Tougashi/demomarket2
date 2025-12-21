import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radja iPhone Mockup - Apple Premium Reseller",
  description: "Mockup of Radja iPhone website using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased bg-white text-slate-900`}> 
        {children}
      </body>
    </html>
  );
}
