"use client";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@compo/footer/Footer";
import Navbar from "@compo/header/Navbar";

import { CartProvider } from "@/context/CartContext";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" scroll-smooth text-sm " lang="en">
      <body className={`  ${roboto.className}`}>
        {/* favicon for devices */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <SessionProvider >
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
