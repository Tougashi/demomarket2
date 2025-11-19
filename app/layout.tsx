import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pesona Gadget Mockup - Apple Premium Reseller",
  description: "Mockup of Pesona Gadget website using Next.js",
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
