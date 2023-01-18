import "./globals.css";
import "katex/dist/katex.min.css";
import "dracula-prism/dist/css/dracula-prism.min.css";

import NavAside from "@/components/common/nav-aside";
import RightAside from "@/components/common/right-aside";
import Header from "@/components/common/header";
import CommandMenu from "@/components/common/cmdk";
import React from "react";
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
        <div className="grid w-full max-h-screen overflow-hidden font-mono grid-rows-dashboard bg-theme-bg ">
          <Header />
          <CommandMenu />
          <div className="grid grid-cols-1 lg:grid-cols-dashboard w-full lg:w-[70%] mx-auto text-theme-body row-start-2 overflow-hidden">
            <NavAside />
            <main className="h-screen overflow-y-scroll lg:p-6 p-4 pt-[6em] scrollbar-hide lg:pt-[6em] overflow-hidden ">
              <div>{children}</div>
            </main>
            <RightAside />
          </div>
        </div>
      </body>
    </html>
  );
}
