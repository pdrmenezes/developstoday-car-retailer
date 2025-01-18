import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoaderPinwheelIcon } from "lucide-react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Retailer's",
  description: "Search for your next vehicle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="flex min-h-screen items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-3xl space-y-10 px-6 text-center">
            <div className="flex flex-col items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <LoaderPinwheelIcon className="animate-spin-slow size-7" />
                <h1 className="text-2xl font-bold">Car Retailer</h1>
              </Link>
              <p className="text-lg text-neutral-300">Check the little bit of history we offer.</p>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
