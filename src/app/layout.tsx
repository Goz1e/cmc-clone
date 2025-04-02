import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SwitchToDesktop from "@/components/switchToDesktop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMC Clone",
  description: "CoinMarketCap dashboard clone by Goz1e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased size-full">
        <div className="size-full hidden md:block">{children}</div>
        <div className="size-full md:hidden">
          <SwitchToDesktop />
        </div>
      </body>
    </html>
  );
}
