import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./style/card.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="h-[80px] fixed inset-y-0 w-full z-50">
            <Navbar />
          </div>
          <div className="hidden top-[80px] md:flex w-64 flex-col fixed inset-y-0 z-50">
            <Sidebar />
          </div>
          <main className="min-h-screen relative md:pl-56 pt-[80px] mx-auto px-4 sm:px-12 lg:max-w-[76rem] xl:max-w-[80rem] 2xl:max-w-[100rem] text-white ">
            {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
