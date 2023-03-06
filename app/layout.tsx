import "./globals.css";
import "katex/dist/katex.min.css";
import "dracula-prism/dist/css/dracula-prism.min.css";

import NavAside from "@/components/common/nav-aside";
import RightAside from "@/components/common/right-aside";
import Header from "@/components/common/header";
import React from "react";
import { AnalyticsWrapper } from "@/components/common/analytics";
import GradientMesh from "@/components/common/gradient-mesh";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* ! TODO  */}
        <div className="grid w-full max-h-screen  grid-cols-1 gird-rows-2  md:grid-cols-[5%_auto_20%]  lg:grid-cols-[15%_auto_20%] overflow-hidden font-mono  bg-theme-bg ">
          <Header />
          <div className=" row-start-2 md:row-start-1 col-start-2 grid grid-cols-1 lg:grid-cols-[230px_auto] xl:grid-cols-[230px_auto] md:grid-cols-[15%_auto] w-full   text-theme-body  overflow-hidden">
            <NavAside />
            <main
              id="main"
              className="h-screen z-[10] col-start-2 pt-[6em] p-4  overflow-hidden overflow-y-scroll lg:p-12 lg:pt-[6em]"
            >
              <div>{children}</div>
            </main>
          </div>

          <GradientMesh />
          <RightAside />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
