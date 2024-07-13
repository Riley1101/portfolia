import "./globals.css";
import "dracula-prism/dist/css/dracula-prism.min.css";
import "katex/dist/katex.min.css";
import GradientMesh from "@/components/common/gradient-mesh";
import Header from "@/components/common/header";
import NavAside from "@/components/common/nav-aside";
import React from "react";
import type { Metadata } from "next";
import { AnalyticsWrapper } from "@/components/common/analytics";
import { Inter } from "next/font/google";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import { CSPostHogProvider } from "@/components/providers/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN || ""),
  title: {
    default: metaData.title,
    template: "%s",
  },
  description: metaData.description,
  generator: "Next.js",
  applicationName: metaData.siteName,
  referrer: "origin-when-cross-origin",
  keywords: metaData.keywords,
  authors: [
    { name: metaData.title, url: metaData.url },
    { name: "Arkar Myat", url: "https://arkar.space" },
  ],
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
  openGraph: getOpenGraph(
    "/images/arkar.png",
    metaData.title,
    metaData.description,
    metaData.url,
  ),
  twitter: getTwitterCard(
    "/images/arkar.png",
    metaData.title,
    metaData.description,
  ),
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <CSPostHogProvider>
        <body className="overflow-hidden bg-[#121212]">
          <div className="w-full overflow-hidden md:px-[10%] lg:pr-[0%] max-h-dvh bg-[#33161600]">
            <Header />
            <div
              className="row-start-2  md:row-start-1 col-start-2 grid grid-cols-1 
          lg:grid-cols-[200px_auto] xl:grid-cols-[200px_auto] w-full text-theme-body overflow-hidden"
            >
              <div className="hidden lg:block">
                <NavAside />
              </div>
              <main
                id="main"
                className="h-dvh scroll-mt-1 z-[10]  pt-[6em] p-4 overflow-y-scroll md:p-0 lg:p-12 md:pt-[6em]"
              >
                <div className="mt-4 mb-4 flex flex-col w-full md:my-12">
                  {children}
                </div>
              </main>
            </div>
            <GradientMesh />
          </div>
          <AnalyticsWrapper />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
