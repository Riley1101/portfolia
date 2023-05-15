import "./globals.css";
import "katex/dist/katex.min.css";
import "dracula-prism/dist/css/dracula-prism.min.css";
import NavAside from "@/components/common/nav-aside";
import Header from "@/components/common/header";
import React from "react"
import { Inter } from 'next/font/google';
import { AnalyticsWrapper } from "@/components/common/analytics";
import GradientMesh from "@/components/common/gradient-mesh";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: metaData.title,
    template: "%s | Arkar Kaung Myat",
  },
  description: metaData.description,
  generator: "Next.js",
  applicationName: metaData.siteName,
  referrer: "origin-when-cross-origin",
  keywords: metaData.keywords,
  authors: [
    { name: metaData.title, url: metaData.url },
    { name: "Arkar Dev", url: "https://arkar.space" },
    { name: "ArkarDev", url: "https://arkar.space" },
  ],
  colorScheme: "dark",
  creator: metaData.title,
  publisher: metaData.title,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: getOpenGraph("/images/arkar.png", metaData.title, metaData.description, metaData.url),
  twitter:getTwitterCard("/images/arkar.png", metaData.title, metaData.description),
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body>
        <div className="grid w-full max-h-screen  grid-cols-1 gird-rows-2  md:grid-cols-[5%_auto_5%]  lg:grid-cols-[15%_auto] overflow-hidden font-theme bg-theme-bg ">
          <Header />
          <div className=" row-start-2 md:row-start-1 col-start-2 grid grid-cols-1 border
          lg:grid-cols-[230px_auto] xl:grid-cols-[230px_auto]  w-full   text-theme-body  overflow-hidden">
            <NavAside />
            <main
              id="main"
              className="h-screen scroll-mt-1 z-[10] col-start-2 pt-[6em] p-4   overflow-hidden overflow-y-scroll lg:p-12 lg:pt-[6em]"
            >
              <div className="w-full md:max-w-[1140px] lg:max-w-[800px]">{children}</div>
            </main>
          </div>

          <GradientMesh />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
