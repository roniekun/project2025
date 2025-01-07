import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StateProvider from "@/provider/StateProvider";
import ToggleBar from "@/components/layout/ToggleBar";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StateProvider>
          <main className="flex flex-col min-h-screen w-screen">
            <div className="flex p-4 w-full fixed top-0 z-50 items-center justify-between">
              <Header />
              <Navbar />
              <ToggleBar />
            </div>
            {children}
            <Footer />
          </main>
        </StateProvider>
      </body>
    </html>
  );
}
