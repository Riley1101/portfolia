import "./globals.css";
import "katex/dist/katex.min.css";
import "dracula-prism/dist/css/dracula-prism.min.css";
import NavAside from "@/components/common/nav-aside";
import Header from "@/components/common/header";
import React from "react"
import { Inter } from 'next/font/google';
import { AnalyticsWrapper } from "@/components/common/analytics";
import GradientMesh from "@/components/common/gradient-mesh";

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
        <div className="grid w-full max-h-screen  grid-cols-1 gird-rows-2  md:grid-cols-[5%_auto_20%]  lg:grid-cols-[15%_auto] overflow-hidden font-theme bg-theme-bg ">
          <Header />
          <div className=" row-start-2 md:row-start-1 col-start-2 grid grid-cols-1 lg:grid-cols-[230px_auto] xl:grid-cols-[230px_auto] md:grid-cols-[15%_auto] w-full   text-theme-body  overflow-hidden">
            <NavAside />
            <main
              id="main"
              className="h-screen scroll-mt-1 z-[10] col-start-2 pt-[6em] p-4  overflow-hidden overflow-y-scroll lg:p-12 lg:pt-[6em]"
            >
              <div>{children}</div>
            </main>
          </div>

          <GradientMesh />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
