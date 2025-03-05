import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Common/Footer";
import {
  ClerkProvider} from '@clerk/nextjs';
import ReduxProvider from "@/redux/ReduxProvider";
import Navbar from "@/components/Common/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce website",
  description: "E-commerce website built with Next.js and Clerk",
  icons: {
    icon: "/imgs/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
        <Navbar />
        {children}
        <Footer />
        </ReduxProvider>
      </body>
      
      
    </html>
    </ClerkProvider>

  );
}
