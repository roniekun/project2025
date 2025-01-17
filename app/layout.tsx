import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StateProvider from "@/provider/StateProvider";
import ToggleBar from "@/components/layout/ToggleBar";
import Header from "@/components/layout/Header";
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
  const textColor: string = "black";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StateProvider>
          <main
            style={{ color: textColor }}
            className="flex flex-col min-h-screen min-w-screen overflow-hidden bg-neutral-50"
          >
            <div className="flex  w-full fixed top-0 z-50 items-center justify-between">
              <Header />
              <ToggleBar />
            </div>
            {children}
            <section className="w-full flex justify-center items-center py-28 bg-zinc-950 text-white">
              <Footer />
            </section>
          </main>
        </StateProvider>
      </body>
    </html>
  );
}
